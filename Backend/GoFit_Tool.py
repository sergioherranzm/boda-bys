from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import datetime
import time
import os
import sys
import logging
import traceback
from mailjet_rest import Client
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail, Content
from pymongo import ASCENDING
from pymongo import MongoClient
import win32com.client as win32
from jproperties import Properties

def error_handler(exctype, value, tb):
    logging.error('-------------------------------ERROR-------------------------------')
    logging.error('Type:' + str(exctype))
    logging.error('Value:' + str(value))
    logging.error('Traceback:' + str(tb))
    logging.error('-------------------------------------------------------------------')

def send_mail(fTo, fSubject, fBody, fMode = 'text/plain'):
    if Allow_Notifications == True:
        if Mailer_App == 'outlook':
            outlook = win32.Dispatch('outlook.application')
            mail = outlook.CreateItem(0)
            mail.To = fTo
            mail.Subject = fSubject
            if fMode == 'text/html':
                mail.HTMLBody = fBody
            else:
                mail.Body = fBody
            #attachment  = "Path to the attachment"
            #mail.Attachments.Add(attachment)
            
            #mail.display()
            mail.Send()

        elif Mailer_App == 'sendgrid':
            from_email = Admin_Email #Debe estar verificado en el mailer
            to_email = fTo
            subject = fSubject
            if fMode == 'text/html':
                content = Content("text/html", fBody)
            else:
                content = Content("text/plain", fBody)
            
            mail = Mail(from_email, to_email, subject, content)
            #mail_json = mail.get()
            
            sg = SendGridAPIClient(api_key=Mailer_ApiKey)
            #response = sg.client.mail.send.post(request_body=mail_json)
            response = sg.send(mail)
            #print("Mail status = " + str(response.status_code))
            #print(response.headers)
            
        elif Mailer_App == 'mailjet':
            from_email = Admin_Email #Debe estar verificado en el mailer
            from_email_name = "GoFit Tool App"
            to_email = fTo
            to_email_name = fTo
            subject = fSubject
            
            data = {
                'Messages': [
                        {
                            "From": {
                                    "Email": from_email,
                                    "Name": from_email_name
                            },
                            "To": [
                                    {
                                        "Email": to_email,
                                        "Name": to_email_name
                                    }
                            ],
                            "Subject": subject,
                            #Aqui va el texto que añadimos mas abajo
                        }
                ]
            }
            
            if fMode == 'text/html':
                data['Messages'][0]['HTMLPart'] = fBody
            else:
                data['Messages'][0]['TextPart'] = fBody
                
            mailjet = Client(auth=(Mailer_ApiUser, Mailer_ApiKey), version='v3.1')
            response = mailjet.send.create(data=data)
            #print("Mail status = " + str(response.status_code))
            #print(response.json())

def convert_date_format(s_date) -> str:
    for i in range(0, 31):
        new_date = datetime.date.today() + datetime.timedelta(days=i)
        if int(s_date[-2:]) == new_date.day:
            return str(new_date.strftime("%d/%m/%Y"))
        
def check_chromedriver_compatibility():
    try:
        options = Options()
        options.headless = True
        s = Service(Chrome_Driver_Path)
        browser = webdriver.Chrome(service=s, options=options)
        
        chromeVer = browser.capabilities['browserVersion']
        chromedriverVer = browser.capabilities['chrome']['chromedriverVersion'].split(' ')[0]
        
        print("Chrome Version: " + chromeVer)
        print("Chromedriver Version: " + chromedriverVer)
        
        if chromeVer[0:3] != chromedriverVer[0:3]: 
            print("Incompatibility error:\nChrome Version: " + chromeVer + "\nChromedriver Version: " + chromedriverVer)
            send_mail(Admin_Email, "Chromedriver Version Error", "Incompatibility error:\nChrome Version: " + chromeVer + "\nChromedriver Version: " + chromedriverVer)
        
    except Exception as e:
        errMsg = e.msg
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print("************************ERROR************************")
        print("IN: check_chromedriver_compatibility")
        print('ERROR:' + errMsg)
        send_mail(Admin_Email, "Chromedriver Version Error", 'ERROR:' + errMsg)

def init_variables():
    global Loop_Timer
    global Initial_Rep
    global Download_Schedule_Timer
    global Download_Reserves_Timer
    global Check_Reserves_Timer
    global Start_Reserve_Time_In_Advance
    global Time_Loading_Schedule
    global Max_Schedule_Refresh_Times
    global Server_Start_Time
    global Server_Shutdown_Time
    global Chrome_Window_Headless
    global Chrome_Window_Size_Schedule
    global Chrome_Window_Size_Reserves
    global Admin_Email
    global Shutdown_Path
    global Sleeping_Path
    global s_User
    global s_Password
    global Contact_Email
    global Fav_Slot_Default
    global Gofit_Url_Login
    global Gofit_Url_Schedule
    global Chrome_Driver_Path
    global Chrome_Driver_Timeout
    global Max_Reserve_Tries
    global Min_Activities_To_Update_Schedule
    global Reminder_Min_Time
    global DB_URI
    global DB_Name
    global Mailer_App
    global Mailer_ApiUser
    global Mailer_ApiKey
    global Allow_DB_Removal
    global Allow_Server_Management
    global Allow_Notifications
    global Allow_Reserve_Reminders
    global Application_Path
    Application_Path = os.path.dirname(os.path.abspath(__file__))
    
    #INICIALIZAR EL LOG
    logging.basicConfig(filename=Application_Path + '\\log.log', filemode='a', format='%(asctime)s - %(message)s', level=logging.INFO)
    
    #IMPORTAR ARCHIVO DE PROPIEDADES
    global configs
    
    configs = Properties()
    with open(Application_Path + '\\config.properties', 'rb') as read_prop:
        configs.load(read_prop)
    
    
    Loop_Timer = float(configs.get("Loop_Timer").data)
    Initial_Rep = int(configs.get("Initial_Rep").data)
    Download_Schedule_Timer = float(configs.get("Download_Schedule_Timer").data)
    Download_Reserves_Timer = float(configs.get("Download_Reserves_Timer").data)
    Check_Reserves_Timer = float(configs.get("Check_Reserves_Timer").data)
    Start_Reserve_Time_In_Advance = float(configs.get("Start_Reserve_Time_In_Advance").data)
    if Start_Reserve_Time_In_Advance < 0:
        Start_Reserve_Time_In_Advance = 0
        logging.info('Start_Reserve_Time_In_Advance invalid value. Set to 0 by default')
    Time_Loading_Schedule = float(configs.get("Time_Loading_Schedule").data)
    if Time_Loading_Schedule < 0:
        Time_Loading_Schedule = 0
        logging.info('Time_Loading_Schedule invalid value. Set to 0 by default')
    Max_Schedule_Refresh_Times = float(configs.get("Max_Schedule_Refresh_Times").data)
    Reminder_Min_Time = float(configs.get("Reminder_Min_Time").data)
    if Reminder_Min_Time < 0:
        Reminder_Min_Time = 0
        logging.info('Reminder_Min_Time invalid value. Set to 0 by default')
   
    Chrome_Window_Headless = bool(float(configs.get("Chrome_Window_Headless").data))
    Chrome_Window_Size_Schedule = configs.get("Chrome_Window_Size_Schedule").data
    Chrome_Window_Size_Reserves = configs.get("Chrome_Window_Size_Reserves").data
    
    Admin_Email = configs.get("Admin_Email").data
    Shutdown_Path = configs.get("Shutdown_Path").data
    Sleeping_Path = configs.get("Sleeping_Path").data
    
    s_User = configs.get("s_User").data
    s_Password = configs.get("s_Password").data
    Contact_Email = configs.get("Contact_Email").data
    
    Gofit_Url_Login = configs.get("Gofit_Url_Login").data
    Gofit_Url_Schedule = configs.get("Gofit_Url_Schedule").data
    
    Chrome_Driver_Path = configs.get("Chrome_Driver_Path").data
    Chrome_Driver_Timeout = float(configs.get("Chrome_Driver_Timeout").data)
    
    Max_Reserve_Tries = int(configs.get("Max_Reserve_Tries").data)
    if Max_Reserve_Tries <= 0:
        Max_Reserve_Tries = 1
        logging.info('Max_Reserve_Tries invalid value. Set to 1 by default')
        
    Min_Activities_To_Update_Schedule = int(configs.get("Min_Activities_To_Update_Schedule").data)
    if Min_Activities_To_Update_Schedule <= 0:
        Min_Activities_To_Update_Schedule = 10
        logging.info('Min_Activities_To_Update_Schedule invalid value. Set to 10 by default')
        
    DB_URI = configs.get("DB_URI").data
    DB_Name = configs.get("DB_Name").data
    Mailer_App = configs.get("Mailer_App").data
    Mailer_ApiUser = configs.get("Mailer_ApiUser").data
    Mailer_ApiKey = configs.get("Mailer_ApiKey").data
    
    Allow_DB_Removal = bool(float(configs.get("Allow_DB_Removal").data))
    Allow_Notifications = bool(float(configs.get("Allow_Notifications").data))
    Allow_Reserve_Reminders = bool(float(configs.get("Allow_Reserve_Reminders").data))
    
    Fav_Slot_Default = int(configs.get("Fav_Slot_Default").data)

    global Fav_Slot_List
    Fav_Slot_List = {
        "Activity": [],
        "Slot_Number": []
    }
    for i in range(0, int(configs.get("Fav_Slot_List.count").data)):
        Fav_Slot_List["Activity"].append(configs.get("Fav_Slot_List." + str(i) + ".activity").data)
        Fav_Slot_List["Slot_Number"].append(int(configs.get("Fav_Slot_List." + str(i) + ".slot").data))

    global Init_Time
    Init_Time = datetime.datetime.now()
    
    # BUSCAMOS DIA DE LA SEMANA
    for i in range(0, 7):
        if i == Init_Time.weekday():
            Str_Server_Start_Time = configs.get("Server_Availability." + str(i) + ".start").data
            Str_Server_Shutdown_Time =configs.get("Server_Availability." + str(i) + ".shutdown").data
            Server_Start_Time = datetime.datetime.strptime(str(datetime.date.today()), "%Y-%m-%d") + datetime.timedelta(hours=float(Str_Server_Start_Time.split(":")[0])) + datetime.timedelta(minutes=float(Str_Server_Start_Time.split(":")[1]))
            Server_Shutdown_Time = datetime.datetime.strptime(str(datetime.date.today()), "%Y-%m-%d") + datetime.timedelta(hours=float(Str_Server_Shutdown_Time.split(":")[0])) + datetime.timedelta(minutes=float(Str_Server_Shutdown_Time.split(":")[1]))
            
    print('SERVER START AND SHUTDOWN TIMES: '+ Str_Server_Start_Time + ' >>> ' + Str_Server_Shutdown_Time)
    logging.info('SERVER START AND SHUTDOWN TIMES: '+ Str_Server_Start_Time + ' >>> ' + Str_Server_Shutdown_Time)
    
    Allow_Server_Management = bool(float(configs.get("Allow_Server_Management").data))
    
    global rep
    rep = Initial_Rep
    
    global T_Reserves
    T_Reserves = {
        "Activity_ID": [],
        "Related_Activity_ID": [],
        "Reserve_Start_Date": [],
        "Reserve_Status": [],
        "Reserve_Slot": [],
        "Reserve_Owner":[],
        "Reserve_Owner_ID":[]
    }
    
    if Allow_Server_Management == True:
        check_chromedriver_compatibility()
    
    download_reserves_database()
    
    
def get_fav_slot(r_Activity) -> int:
    for index in range(0, len(Fav_Slot_List["Activity"])):
        if Fav_Slot_List["Activity"][index] == r_Activity:
            return Fav_Slot_List["Slot_Number"][Fav_Slot_List["Activity"].index(r_Activity)]
    return Fav_Slot_Default


def clean_database():
    try:
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Reserves = DB.reserves
        DB_Activities = DB.activities

        DB_Activities.delete_many({"Activity_Start_Date":{"$lt":datetime.datetime.today()}})
        
        DB_Reserves.delete_many({"Reserve_Start_Date":{"$lt":(datetime.datetime.today() - datetime.timedelta(hours=49))}})


    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> clean_database")
        
    finally:
        client.close()


def clean_obsolete_activities():
#This function clean from DB the activvities that have been cancelled or relocated in the official schedule
    try:
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Reserves = DB.reserves
        DB_Activities = DB.activities
        activities = list(DB_Activities.find())
        reserves = list(DB_Reserves.find())

        day_variable = ""
        
        for activity in activities:
            for index in range(0, len(T_Schedule["Activity_ID"])):
                if (activity['Activity_ID'] == T_Schedule["Activity_ID"][index]):
                    break
                if index == (len(T_Schedule["Activity_ID"]) - 1):
                    #if datetime.datetime.today() + datetime.timedelta(days=6) > datetime.datetime.strptime(activity["Day"], "%d/%m/%Y"):
                    #if datetime.datetime.today().strftime("%d/%m/%Y") != activity["Day"]:
                    
                    if day_variable != activity["Day"]:
                        
                        DB_Activities.delete_one({'Activity_ID':activity['Activity_ID']})
                        logging.info('        Activity deleted from DB (' + activity['Activity_ID'] + ')')
                        print("        Activity deleted from DB (" + activity['Activity_ID'] + ')')
                        #send_mail(Admin_Email, "Deleted Activity in DB", "Deleted Activity in DB: " + activity['Activity_ID'])
                        
                        day_variable = activity["Day"]
                        
                        logging.info('        Looking in reserves '+ activity['Activity_ID'] + '...')
                        print('        Looking in reserves '+ activity['Activity_ID'] + '...')
                        for reserve in reserves:
                            if (activity['Activity_ID'] == reserve["Activity_ID"]):
                                logging.info('            Activity match. Reserve owner: ' + reserve["Reserve_Owner"])
                                print('            Activity match. Reserve owner: ' + reserve["Reserve_Owner"])
                                send_mail(reserve["Reserve_Owner"], "Deleted Activity in GoFit schedule", "One of your reserved activities has dissapeared from GoFit official schedule: " + reserve['Activity_ID'] + ". Your reserve has been deleted.")
                                DB_Reserves.delete_one({'_id':reserve['_id']})

        logging.info('    Clean obsolete schedule DB completed')
        print("    Clean obsolete schedule DB completed")
    
    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> clean_obsolete_activities")
        
    finally:
        client.close()


def download_reserves_database():
    global T_Reserves
    T_Reserves_Old = T_Reserves
    
    try:
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Reserves = DB.reserves
        reserves = DB_Reserves.find().sort('Reserve_Start_Date', ASCENDING)
        
        T_Reserves = {
            "Activity_ID": [],
            "Related_Activity_ID": [],
            "Reserve_Start_Date": [],
            "Reserve_Status": [],
            "Reserve_Slot": [],
            "Reserve_Owner":[],
            "Reserve_Owner_ID":[]
        }
        
        for reserve in reserves:
            #if (datetime.datetime.now()) < (datetime.datetime.strptime(reserve['Reserve_Start_Date'], "%d/%m/%Y %H:%M") + datetime.timedelta(hours=48)) and (reserve['Reserve_Owner']==s_User):
            if (datetime.datetime.now()) < ((reserve['Reserve_Start_Date']) + datetime.timedelta(hours=48)) and (reserve['Reserve_Owner']==s_User):
                T_Reserves["Activity_ID"].append(reserve['Activity_ID'])
                T_Reserves["Related_Activity_ID"].append(reserve['Related_Activity_ID'])
                T_Reserves["Reserve_Start_Date"].append(reserve['Reserve_Start_Date'])
                T_Reserves["Reserve_Status"].append(reserve['Reserve_Status'])
                T_Reserves["Reserve_Slot"].append(reserve['Reserve_Slot'])
                T_Reserves["Reserve_Owner"].append(reserve['Reserve_Owner'])
                T_Reserves["Reserve_Owner_ID"].append(reserve['Reserve_Owner_ID'])
        
        logging.info('    Download reserves from DB completed')
        print("    Download reserves from DB completed")
        
        #CHEQUEAMOS SI HA HABIDO CAMBIOS EN LOS DATOS DE RESERVAS
        if T_Reserves != T_Reserves_Old:
            logging.info("    Changes in reserve DB have been downloaded")
            print("    Changes in reserve DB have been downloaded")
            for index in range(0, len(T_Reserves["Activity_ID"])):
                if T_Reserves["Activity_ID"][index] not in T_Reserves_Old["Activity_ID"]: 
                    logging.info("        New reserve detected >>> " + T_Reserves["Activity_ID"][index])
                    print("        New reserve detected >>> " + T_Reserves["Activity_ID"][index])
            
        
    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> download_reserves_database")
    
    finally:
        client.close()


def update_reserves_database():

    #print("    Saving reserves... >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
    
    try:
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Reserves = DB.reserves
        
        for index in range(0, len(T_Reserves["Activity_ID"])):
            
            row = {
                "Activity_ID": str(T_Reserves["Activity_ID"][index]),
                "Related_Activity_ID": str(T_Reserves["Related_Activity_ID"][index]),
                #"Reserve_Start_Date": str(T_Reserves["Reserve_Start_Date"][index]),
                "Reserve_Start_Date": T_Reserves["Reserve_Start_Date"][index],
                "Reserve_Status": str(T_Reserves["Reserve_Status"][index]),
                "Reserve_Slot": str(T_Reserves["Reserve_Slot"][index]),
                "Reserve_Owner": str(T_Reserves["Reserve_Owner"][index]),
                "Reserve_Owner_ID": str(T_Reserves["Reserve_Owner_ID"][index])
            }
            
            DB_Reserves.update_one({'Activity_ID':str(T_Reserves["Activity_ID"][index]), 'Reserve_Owner':str(T_Reserves["Reserve_Owner"][index])}, {'$set':row}, upsert=True)
        
        logging.info('    Update reserves DB completed')
        print("    Update reserves DB completed")
            
    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> update_reserves_database")
        
    finally:
        client.close()


def update_schedule_database():
    
    try:
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Activities = DB.activities
        
        for index in range(0, len(T_Schedule["Activity_ID"])):

            row = {
                "Weekday": str(T_Schedule["Weekday"][index]),
                "Day": str(T_Schedule["Day"][index]),
                "Start_Time": str(T_Schedule["Start_Time"][index]),
                "End_Time": str(T_Schedule["End_Time"][index]),
                "Activity": str(T_Schedule["Activity"][index]),
                "Room": str(T_Schedule["Room"][index]),
                "Monitor": str(T_Schedule["Monitor"][index]),
                "Color": str(T_Schedule["Color"][index]),
                #"Activity_Start_Date": str(T_Schedule["Activity_Start_Date"][index]),
                "Activity_Start_Date": datetime.datetime.strptime(T_Schedule["Activity_Start_Date"][index], "%d/%m/%Y %H:%M"),
                #"Reserve_Start_Date": str(T_Schedule["Reserve_Start_Date"][index]),
                "Reserve_Start_Date": datetime.datetime.strptime(T_Schedule["Reserve_Start_Date"][index], "%d/%m/%Y %H:%M"),
                "Activity_ID": str(T_Schedule["Activity_ID"][index]),
                "Status": str(T_Schedule["Status"][index])
            }

            DB_Activities.update_one({'Activity_ID':str(T_Schedule["Activity_ID"][index])}, {'$set':row}, upsert=True)
            
        logging.info('    Update schedule DB completed')
        print("    Update schedule DB completed")
        
        if Allow_DB_Removal == True:
            logging.info('    Launching Clean obsolete schedule DB')
            print("    Launching Clean obsolete schedule DB")
            clean_obsolete_activities()
            
    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> update_schedule_database")
        
    finally:
        client.close()

        
def search_in_schedule(r_Day, r_Start_Time, r_Activity) -> tuple:
    
    list_of_days = []
    index_r_Day = -1
    r_current_status_final = "NOT FOUND"
    r_current_activity_final = object()
    
    print("        Searching activity in schedule... >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
    logging.info('        Searching activity in schedule...' + r_Activity)
    
    try:
        #LEEMOS LA CABECERA DE LAS COLUMNAS
        header_days = browser.find_elements(By.XPATH, "//div[contains(@class, 'contenedor-cabecera-dias padding-9 col-xs-2 cajaNombredias ng-scope')]")
        
        #HAYAMOS EL INDICE DEL DIA QUE BUSCAMOS
        for index, day in enumerate(header_days):
            list_of_days.append(convert_date_format(day.get_attribute('innerText')))
            if list_of_days[index] == r_Day:
                index_r_Day = index
        
        if index_r_Day == -1:
            return (r_current_status_final, None)
        
        #LEEMOS LAS ACTIVIDADES DE LA COLUMNA DEL DIA ELEGIDO
        column = browser.find_element(By.XPATH, "//div[contains(@class, 'contenedor-item-dia maximoEntre')][" + str(index_r_Day + 1) + "]")
        
        activities_list = column.find_elements(By.XPATH, ".//div[@class='div item-dias altoNormal alturaActividadesReservas ng-scope grisClaro']")
        
        if len(activities_list) > 0:
            for activity in activities_list:
                s_start_time = activity.find_element(By.XPATH, ".//span[@class='label etiquetaHora ng-binding']").get_attribute('innerText').split("/", 2)[0].strip()
                s_activity = activity.find_element(By.XPATH, ".//div[@class='actividad centrarElementos']").get_attribute('innerText')
                
                if s_start_time == r_Start_Time and s_activity == r_Activity:
                    r_current_status = activity.find_element(By.XPATH, ".//span[@class='label padding-0 ng-binding ng-scope']").get_attribute('innerText')
                    if r_current_status.casefold() == "Reservar ya".casefold():
                        r_current_status_final = "AVAILABLE"
                        r_current_activity_final = activity
                        #return (r_current_status_final, activity) #Devolvemos el WebElement de la actividad
                    elif r_current_status.casefold() == "Completa".casefold():
                        r_current_status_final = "FULL"
                        #return (r_current_status_final, None)
                    elif r_current_status.casefold() == "No disponible".casefold():
                        r_current_status_final = "UNAVAILABLE"
                        #return (r_current_status_final, None)
                    elif r_current_status.casefold() == "Finalizada".casefold():
                        r_current_status_final = "FINISHED"
                        #return (r_current_status_final, None)
                    elif r_current_status.casefold() == "Reservada".casefold():
                        r_current_status_final = "RESERVED"
                        #return (r_current_status_final, None)
                    else:
                        r_current_status_final = "ERROR"
                        #return (r_current_status_final, None)
                        
                    break

    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> search_in_schedule")

    finally:
        logging.info('        Searching activity in schedule completed. Status: ' + r_current_status_final)
        return(r_current_status_final, r_current_activity_final)

def reserve_activity(r_Activity) -> str:
    
    slot_list = []
    slot_list_reversed = []
    selected_slot = "-"
    
    try:
        print("        Reading slots in activity...")
        logging.info("        Reading slots in activity...")
        
        slots_table = browser.find_element(By.ID, "puestos-horario")
        
        #DETECTAMOS SI LA ACTIVIDAD NO TIENE LISTA DE PUESTOS
        if slots_table.get_attribute('innerText') == "":
            reserve_button = browser.find_element(By.XPATH, "//*[@class='btn-tg btn-tg-modal-actividad tg-centrado btn-tg-modal-salir clicked ng-scope']")
            reserve_button.click()
            selected_slot = "N/A"     
            return selected_slot
        
        #SI HAY PUESTOS DETECTAMOS EL BOTON DE RESERVE y el FAV SLOT
        reserve_button = browser.find_element(By.XPATH, "//*[@class='btn-tg btn-tg-modal-plazas col-md-5 col-xs-offset-1 col-xs-10 tg-centrado btn-tg-modal-salir clicked']")
        favourite_slot = get_fav_slot(r_Activity)
        print("        Favourite slot: " + str(favourite_slot))
        logging.info("        Favourite slot: " + str(favourite_slot))
        
        #LISTAMOS LOS PUESTOS
        for slot in slots_table.find_elements(By.XPATH, ".//*[@class='puesto tg-centrado clicked padding-0 centrarElementos ng-scope puesto_libre']"):
            str_slot = slot.get_attribute('innerText')
            slot_list.append(str_slot)
            slot_list_reversed.insert(0, str_slot)
        
        #DETECTAMOS SI SE HAN AGOTADO LOS PUESTOS DISPONIBLES
        if len(slot_list) == 0:
            selected_slot = "FULL"
            print("        No available slots found. Class is just full")
            logging.info("        No available slots found. Class is just full")
            return selected_slot
        else:
            print("        Available slots: [" + ','.join(slot_list) + "]")
            logging.info("        Available slots: [" + ','.join(slot_list) + "]")
            
        #SELECCIONAMOS EL PUESTO MAS CERCANO EN LA LISTA EN ORDEN ASCENDENTE
        for slot_nbr in slot_list:
            if int(slot_nbr) >= favourite_slot:
                print('        Trying to reserve slot ' + slot_nbr)
                logging.info('        Trying to reserve slot ' + slot_nbr)
                slot_button = slots_table.find_elements(By.XPATH, ".//*[@class='puesto tg-centrado clicked padding-0 centrarElementos ng-scope puesto_libre']")[slot_list.index(slot_nbr)]
                slot_button.click()
                time.sleep(0.2)
                #ELEMENTO SELECCIONADO > "puesto tg-centrado clicked padding-0 centrarElementos ng-scope puesto_seleccionado"
                reserve_button.click()
                selected_slot = slot_nbr
                time.sleep(0.8)
                #DETECTAR SI HA SALIDO UN MODAL DE FALLO DE LA RESERVA
                test_elements = browser.find_elements(By.XPATH,".//div[@tg-modal='showModalNegro' and .//span[@id='mTitulo' and contains(text(),'atenci')]]")
                if len(test_elements) != 0:
                    for element in test_elements:
                        text_element = element.find_elements(By.ID,"mInfo")
                        print("        Error: " + text_element[0].get_attribute('innerText'))
                        logging.error("        Error: " + text_element[0].get_attribute('innerText'))
                        logging.error("Modal HTML:")
                        logging.error(element.get_attribute('outerHTML'))
                    selected_slot = "INCOMPATIBLE" + text_element[0].get_attribute('innerText')
                    #DETECTAR SI EL MODAL ES DE QUE LA PLAZA JUSTO QUE SE HA SELECCIONADO YA NO ESTA DISPONIBLE PARA VOLVER A INTERTARLO CON OTRA PLAZA
                    if text_element[0].get_attribute('innerText').casefold() == "PLAZA NO DISPONIBLE".casefold():
                        selected_slot = "PLAZA NO DISPONIBLE"
                    if text_element[0].get_attribute('innerText').casefold() == "NO PUEDES REALIZAR RESERVAS EN ESTE MOMENTO, INTÉNTALO DE NUEVO MÁS TARDE.".casefold():
                        selected_slot = "PLAZA NO DISPONIBLE"
                    if text_element[0].get_attribute('innerText').casefold() == "NO HAY PUESTOS PARA RESERVAR EN EL HORARIO".casefold():
                        selected_slot = "PLAZA NO DISPONIBLE"
                
                print("        Reading slots in activity completed")
                logging.info("        Reading slots in activity completed")
                
                return selected_slot
        
        #SI NO HEMOS CONSEGUIDO PUESTO RECORREMOS EL LISTADO INVERTIDO
        for slot_nbr in slot_list_reversed:
            if int(slot_nbr) < favourite_slot:
                print('        Trying to reserve slot ' + slot_nbr)
                logging.info('        Trying to reserve slot ' + slot_nbr)
                slot_button = slots_table.find_elements(By.XPATH, ".//*[@class='puesto tg-centrado clicked padding-0 centrarElementos ng-scope puesto_libre']")[slot_list.index(slot_nbr)]
                slot_button.click()
                time.sleep(0.2)
                reserve_button.click()
                selected_slot = slot_nbr
                time.sleep(0.8)
                #DETECTAR SI HA SALIDO UN MODAL DE FALLO DE LA RESERVA
                test_elements = browser.find_elements(By.XPATH,".//div[@tg-modal='showModalNegro' and .//span[@id='mTitulo' and contains(text(),'atenci')]]")
                if len(test_elements) != 0:
                    for element in test_elements:
                        text_element = element.find_elements(By.ID,"mInfo")
                        print("        Error: " + text_element[0].get_attribute('innerText'))
                        logging.error("        Error: " + text_element[0].get_attribute('innerText'))
                        logging.error("Modal HTML:")
                        logging.error(element.get_attribute('outerHTML'))
                    selected_slot = "INCOMPATIBLE" + text_element[0].get_attribute('innerText')
                    #DETECTAR SI EL MODAL ES DE QUE LA PLAZA JUSTO QUE SE HA SELECCIONADO YA NO ESTA DISPONIBLE PARA VOLVER A INTERTARLO CON OTRA PLAZA
                    if text_element[0].get_attribute('innerText').casefold() == "PLAZA NO DISPONIBLE".casefold():
                        selected_slot = "PLAZA NO DISPONIBLE"
                    if text_element[0].get_attribute('innerText').casefold() == "NO PUEDES REALIZAR RESERVAS EN ESTE MOMENTO, INTÉNTALO DE NUEVO MÁS TARDE.".casefold():
                        selected_slot = "PLAZA NO DISPONIBLE"
                    if text_element[0].get_attribute('innerText').casefold() == "NO HAY PUESTOS PARA RESERVAR EN EL HORARIO".casefold():
                        selected_slot = "PLAZA NO DISPONIBLE"
                    if text_element[0].get_attribute('innerText').casefold() == "EL ASIENTO YA ESTÁ RESERVADO".casefold():
                        selected_slot = "PLAZA NO DISPONIBLE"
                        
                print("        Reading slots in activity completed")
                logging.info("        Reading slots in activity completed")
                
                return selected_slot
            
    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> reserve_activity")
        return selected_slot

def read_schedule():

    dia_en_semana = ("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo")
    list_of_days = []
    
    logging.info('    Read_schedule >>> Downloading schedule...')
    print("    Read_schedule >>> Downloading schedule... >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
    
    try:
        #LEEMOS LA CABECERA DE LAS COLUMNAS
        header_days = browser.find_elements(By.XPATH, "//div[contains(@class, 'contenedor-cabecera-dias padding-9 col-xs-2 cajaNombredias ng-scope')]")
        
        for day in header_days:
            list_of_days.append(convert_date_format(day.get_attribute('innerText')))
            
        #LEEMOS LAS ACTIVIDADES DE CADA COLUMNA
        column_list = browser.find_elements(By.XPATH, "//div[contains(@class, 'contenedor-item-dia maximoEntre')]")
        
        day_index = 0
        
        for column in column_list:
            activities_list = column.find_elements(By.XPATH, ".//div[@class='div item-dias altoNormal alturaActividadesReservas ng-scope grisClaro']")
            
            for activity in activities_list:
                s_day = list_of_days[day_index]
                T_Schedule["Day"].append(s_day)
                s_weekday = dia_en_semana[datetime.datetime.strptime(s_day, "%d/%m/%Y").weekday()]
                T_Schedule["Weekday"].append(s_weekday)
                s_start_time = activity.find_element(By.XPATH, ".//span[@class='label etiquetaHora ng-binding']").get_attribute('innerText').split("/", 2)[0].strip()
                T_Schedule["Start_Time"].append(s_start_time)
                s_activity = activity.find_element(By.XPATH, ".//div[@class='actividad centrarElementos']").get_attribute('innerText')
                T_Schedule["Activity"].append(s_activity)
                T_Schedule["End_Time"].append(activity.find_element(By.XPATH, ".//span[@class='label etiquetaHora ng-binding']").get_attribute('innerText').split("/", 2)[1].strip())
                T_Schedule["Room"].append(activity.find_elements(By.XPATH, ".//div[@class='salaMonitor centrarElementos']//span")[0].get_attribute('innerText').split(":", 2)[1].strip())
                T_Schedule["Monitor"].append(activity.find_elements(By.XPATH, ".//div[@class='salaMonitor centrarElementos']//span")[1].get_attribute('innerText').split(":", 2)[1].strip())
                T_Schedule["Color"].append(activity.find_element(By.XPATH, ".//div[@class='lineaColorActividad']").value_of_css_property('background-color'))
                T_Schedule["Status"].append(activity.find_element(By.XPATH, ".//span[@class='label padding-0 ng-binding ng-scope']").get_attribute('innerText'))
                
                s_activity_start_date = s_day + " " + s_start_time
                T_Schedule["Activity_Start_Date"].append(s_activity_start_date)
                s_reserve_start_date = datetime.datetime.strptime(s_activity_start_date, "%d/%m/%Y %H:%M") + datetime.timedelta(hours=-49)
                T_Schedule["Reserve_Start_Date"].append(str(s_reserve_start_date.strftime("%d/%m/%Y %H:%M")))
                T_Schedule["Activity_ID"].append(s_day + "_" + s_start_time + "_" + s_activity)
            
            day_index += 1

    except:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> read_shedule")


def load_schedule(window_size):
    global browser
    
    logging.info('    Load_schedule >>> Conecting to gofit.es...')
    print("    Load_schedule >>> Conecting to gofit.es... >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))

    try:
        #START BROWSER
        options = Options()
        #options.headless = True
        options.add_argument("--window-size=" + window_size)
        options.add_argument("--incognito")
        if Chrome_Window_Headless:
            options.add_argument("--headless=new")
        s = Service(Chrome_Driver_Path)
        browser = webdriver.Chrome(service=s, options=options)
        #browser.implicitly_wait(10)
        
        #ABRIR URL GOFIT
        browser.get(Gofit_Url_Login)

        #LOG IN
        browser.find_element(By.NAME, 'tg_login_email').send_keys(s_User)
        browser.find_element(By.NAME, 'tg_login_password').send_keys(s_Password)
        accept_button = browser.find_element(By.XPATH, "//form[@class='wrap-form js-validateUser']//button[@class='button filled orange']")
        accept_button.click()
        try:
            WebDriverWait(browser, Chrome_Driver_Timeout).until(EC.title_contains('Área privada'))
        except:
            logging.error(str(rep) + " rep >>> load Area privada - TimeoutException")
            print(str(rep) + " rep >>> ************************ERROR************************")
            print(str(rep) + " rep >>> load Area privada - TimeoutException")
        
        #CERRAR VENTANDE DE COOKIES
        try:
            accept_button = browser.find_element(By.ID, 'wt-cli-accept-all-btn')
            accept_button.click()
        except:
            logging.error(str(rep) + " rep >>> Area privada - Cookies sin ventana")
            print(str(rep) + " rep >>> ************************ERROR************************")
            print(str(rep) + " rep >>> Area privada - Cookies sin ventana")
            
        #BUSCAR URL HORARIO
        browser.get(Gofit_Url_Schedule)
        
        try:
            #WebDriverWait(browser, Chrome_Driver_Timeout).until(EC.presence_of_element_located((By.XPATH, "//article[@class='block-booking block-no-activity']//iframe")))
            WebDriverWait(browser, Chrome_Driver_Timeout).until(EC.presence_of_element_located((By.XPATH, "//*[contains(@class, 'block-booking')]//iframe")))
        except:
            logging.error(str(rep) + " rep >>> load Gofit_Url_Schedule - TimeoutException")
            print(str(rep) + " rep >>> ************************ERROR************************")
            print(str(rep) + " rep >>> load Gofit_Url_Schedule - TimeoutException")
        
        #Url_Schedule = browser.find_element(By.XPATH, "//article[@class='block-booking block-no-activity']//iframe").get_attribute("src")
        Url_Schedule = browser.find_element(By.XPATH, "//*[contains(@class, 'block-booking')]//iframe").get_attribute("src")

        #NAVEGAR AL HORARIO
        browser.get(Url_Schedule)
        
        try:
            WebDriverWait(browser, Chrome_Driver_Timeout).until(EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'contenedor-item-dia maximoEntre')]")))
        except:
            logging.error(str(rep) + " rep >>> load Url_Schedule - TimeoutException")
            print(str(rep) + " rep >>> ************************ERROR************************")
            print(str(rep) + " rep >>> load Url_Schedule - TimeoutException")
            
        #PROTECCION CONTRA CAJA-LOGIN
        #login_box = browser.find_element(By.XPATH, "//*[@class='caja-login-input']")
                
    except Exception as e:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> load_schedule")
        
        
def get_schedule_main():
    global T_Schedule
    
    T_Schedule = {
        "Weekday": [],
        "Day": [],
        "Start_Time": [],
        "End_Time": [],
        "Activity": [],
        "Room": [],
        "Monitor": [],
        "Color": [],
        "Activity_Start_Date": [],
        "Reserve_Start_Date": [],
        "Activity_ID": [],
        "Status": []
    }
    
    try:
        load_schedule(Chrome_Window_Size_Schedule)
        
        time.sleep(Time_Loading_Schedule)
        
        read_schedule()
        
        #CAMBIO DE SEMANA
        logging.info('    Get_schedule_main >>> changing the week...')
        print("    Get_schedule_main >>> changing the week...")
        week_button = browser.find_element(By.XPATH, "//*[@class='fa icon-avanzar redIcon30 bolder']")
        week_button.click()
        
        try:
            WebDriverWait(browser, Chrome_Driver_Timeout).until(EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'contenedor-item-dia maximoEntre')]")))
        except:
            logging.error(str(rep) + " rep >>> cambio_semana - TimeoutException")
            print(str(rep) + " rep >>> ************************ERROR************************")
            print(str(rep) + " rep >>> cambio_semana - TimeoutException")
            
        time.sleep(Time_Loading_Schedule)
        
        read_schedule()
        
        #ACTUALIZAR LA DB 
        if len(T_Schedule["Activity_ID"]) > Min_Activities_To_Update_Schedule:
            logging.info('    Launching update_schedule_database (Number of activities:' + str(len(T_Schedule["Activity_ID"])) + ')')
            print("    Launching update_schedule_database")
            update_schedule_database()
        else:
            logging.error('    Minimum number of activities not met. Aborting update_schedule_database (Number of activities:' + str(len(T_Schedule["Activity_ID"])) + ')')
            print("    Aborting update_schedule_database due to minimum number of activities")
        
    except Exception as e:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> get_schedule_main")
        
    finally:
        browser.quit()
        T_Schedule.clear()
        logging.info('    Completed get_schedule_main')
        print("    Completed get_schedule_main")

def try_get_schedule_main():
#This function look for reserves that are close to begin its reservation time (600sec) in order NOT to launch the Schedule Download
    for r_reserve_ID in T_Reserves["Activity_ID"]:
        r_reserve_status = T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(r_reserve_ID)]
        r_reserve_time = T_Reserves["Reserve_Start_Date"][T_Reserves["Activity_ID"].index(r_reserve_ID)]
        if (r_reserve_time + datetime.timedelta(seconds=-600) < datetime.datetime.now()) and (r_reserve_time > datetime.datetime.now()) and (r_reserve_status == ""):
            logging.info('    Schedule NOT DOWNLOADED due to reserve proximity >>> ' + r_reserve_ID)
            print("    Schedule NOT DOWNLOADED due to reserve proximity >>> " + r_reserve_ID)
            return
            
    logging.info('    Launching get_schedule_main')
    print("    Launching get_schedule_main")
    get_schedule_main()

        
def make_reserve_main(reserve_ID, r_Day, r_Start_Time, r_Activity):
    
    dia_en_semana = ("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo")
    r_weekday = dia_en_semana[datetime.datetime.strptime(r_Day, "%d/%m/%Y").weekday()]
    final_slot = "Undefined"
    
    try:
        logging.info('    Trying to reserve >>> ' + reserve_ID)
        print("    Trying to reserve >>> " + reserve_ID)
        
        Start_Reserve_Time = datetime.datetime.now()
        
        load_schedule(Chrome_Window_Size_Reserves)
        
        time.sleep(Time_Loading_Schedule)
        
        reserve_current_status, activity_dom_element = search_in_schedule(r_Day, r_Start_Time, r_Activity)
        
        #SI TODAVIA NO ESTA DISPONIBLE ENTRAMOS EN EL BUCLE DE REFRESCAR LAS ACTIVADES POR SI ESTA A PUNTO DE COMENZAR
        if reserve_current_status == 'UNAVAILABLE':
            schedule_refresh_times = 0
            while schedule_refresh_times < Max_Schedule_Refresh_Times:
                #REFRESCAR ACTIVIDADES EN CALENDARIO
                print("    Refreshing activities status... >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
                #week_button_next = browser.find_element(By.XPATH, "//*[@class='fa icon-avanzar redIcon30 bolder']")
                #week_button_next.click()
                #time.sleep(3)
                #week_button_previous = browser.find_element(By.XPATH, "//*[@class='fa icon-retroceder redIcon30 bolder']")
                #week_button_previous.click()
                browser.refresh()
                time.sleep(Time_Loading_Schedule)
                schedule_refresh_times += 1
                
                reserve_current_status, activity_dom_element = search_in_schedule(r_Day, r_Start_Time, r_Activity)
                
                if reserve_current_status == 'AVAILABLE':
                    break
        
        if reserve_current_status == 'NOT FOUND':
            if T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)].split("_", 1)[0] == 'NOT FOUND':
                repetition = int(T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)].split("_", 1)[1])
                T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)] = reserve_current_status + '_' + str(repetition + 1)
                if (repetition + 1)  >= Max_Reserve_Tries:
                    print("    " + reserve_ID + ' with status NOT FOUND has reached max number of reserve tries. Aborting reservation...')
                    logging.info("    " + reserve_ID + ' with status NOT FOUND has reached max number of reserve tries. Aborting reservation...')
            else:
                T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)] = reserve_current_status + '_1'
        else:
            T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)] = reserve_current_status
            if reserve_current_status == "RESERVED":
                T_Reserves["Reserve_Slot"][T_Reserves["Activity_ID"].index(reserve_ID)] = "UNKNOWN"
            
        #time.sleep(0.5)
        
        if reserve_current_status == "AVAILABLE":
            while True:
                browser.execute_script("arguments[0].click();", activity_dom_element)
                time.sleep(0.8) #Damos tiempo a que se abra la venta de puestos
                final_slot = reserve_activity(r_Activity)

                if final_slot == "PLAZA NO DISPONIBLE":
                    #DETECTAR SI EL MODAL ES DE QUE LA PLAZA JUSTO QUE SE HA SELECCIONADO YA NO ESTA DISPONIBLE PARA VOLVER A INTERTARLO CON OTRA PLAZA
                        #Hacemos click fuera del modal para cerrarlo
                    temp_dom_object = browser.find_element(By.XPATH, "//*[@class='misReservas tg-centrado']")
                    ac = ActionChains(browser)
                    ac.move_to_element(temp_dom_object).move_by_offset(0, 0).click().perform()
                    time.sleep(0.8) #Damos tiempo a que se cierre el modal
                    continue
                else:
                    if final_slot == "-":
                        send_mail(Contact_Email, "Reserve ERROR - " + reserve_ID, reserve_ID + " error during slot selection.\nManual reserve recommended.")
                    elif final_slot == "FULL":
                        #send_mail(Contact_Email, "NOT RESERVED - Class is just full - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " impossible to reserve. Class is just full.")
                        send_mail(Contact_Email, "NOT RESERVED - Class is just full - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, "<p>" + r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + ' impossible to reserve. Class is just full.</p><p></p><p>Start reserve at: ' + str(Start_Reserve_Time.isoformat(sep=' ', timespec='seconds')) + '</p><p>Reserve completed at: ' + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')) + '</p>', 'text/html')
                        T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)] = "FULL"
                        logging.info('    NOT RESERVED - Class is just full >>> ' + reserve_ID)
                        print("    NOT RESERVED - Class is just full >>> " + reserve_ID)
                    elif final_slot[:12] == "INCOMPATIBLE":
                        #send_mail(Contact_Email, "NOT RESERVED - Class is incompatible - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " impossible to reserve. Class is incompatible with another reserve or daily reserve limit exceeded.")
                        send_mail(Contact_Email, "NOT RESERVED - Class is incompatible - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, "<p>" + r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + ' impossible to reserve.</p>Reason: ' + final_slot[12:] + '<p></p><p></p><p>Start reserve at: ' + str(Start_Reserve_Time.isoformat(sep=' ', timespec='seconds')) + '</p><p>Reserve completed at: ' + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')) + '</p>', 'text/html')
                        T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)] = "INCOMPATIBLE"
                        logging.info('    NOT RESERVED - Class is incompatible >>> ' + reserve_ID)
                        print("    NOT RESERVED - Class is incompatible >>> " + reserve_ID)
                    else:
                        T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(reserve_ID)] = "RESERVED"
                        T_Reserves["Reserve_Slot"][T_Reserves["Activity_ID"].index(reserve_ID)] = final_slot
                        r_activity_start = T_Reserves["Reserve_Start_Date"][T_Reserves["Activity_ID"].index(reserve_ID)] + datetime.timedelta(hours=49)
                        r_activity_end = r_activity_start + datetime.timedelta(hours=1)
                        #send_mail(Contact_Email, "Reserve COMPLETED - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " reserve COMPLETED.\nSlot: " + final_slot)
                        #send_mail(Contact_Email, "Reserve COMPLETED - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, "<div><p>" + r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " reserve COMPLETED.</p><p>Slot: " + final_slot + '</p></div><a href="http://www.google.com/calendar/render?action=TEMPLATE&text=' + r_Activity + '+-+Slot:+'+ final_slot + '&dates=' + r_activity_start.strftime("%Y%m%dT%H%M%S") + '/' + r_activity_end.strftime("%Y%m%dT%H%M%S") + '&location=GO%20fit%20Vallehermoso" target="_blank" rel="nofollow" style="font-size: 25px;">Add to my calendar</a><p></p><p>Start reserve at: ' + str(Start_Reserve_Time.isoformat(sep=' ', timespec='seconds')) + '</p><p>Reserve completed at: ' + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')) + '</p>', 'text/html')
                        send_mail(Contact_Email, "Reserve COMPLETED - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, "<div><p>" + r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " reserve COMPLETED.</p><p>Slot: " + final_slot + '</p></div><a href="http://www.google.com/calendar/render?action=TEMPLATE&text=' + r_Activity + '+-+Slot:+'+ final_slot + '&dates=' + r_activity_start.strftime("%Y%m%dT%H%M%S") + '/' + r_activity_end.strftime("%Y%m%dT%H%M%S") + '" target="_blank" rel="nofollow" style="font-size: 25px;">Add to my calendar</a>', 'text/html')
                        logging.info('    Reserve COMPLETED >>> ' + reserve_ID + ' >>> Slot: ' + final_slot)
                        print("    Reserve COMPLETED >>> " + reserve_ID + ' >>> Slot: ' + final_slot)
                    
                    break

        elif reserve_current_status == "UNAVAILABLE":
            send_mail(Contact_Email, "NOT RESERVED - Class is UNAVAILABLE yet - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " impossible to reserve. Class is UNAVAILABLE yet.\n\nStart reserve time: " + str(Start_Reserve_Time.isoformat(sep=' ', timespec='seconds')) + "\nClass is UNAVAILABLE at: " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
            logging.info('    NOT RESERVED - Class is UNAVAILABLE yet >>> ' + reserve_ID)
            print("    NOT RESERVED - Class is UNAVAILABLE yet >>> " + reserve_ID)
        elif reserve_current_status == "FULL":
            send_mail(Contact_Email, "NOT RESERVED - Class is FULL - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " impossible to reserve. Class is FULL in the schedule.\nTry to enter the wating list via GoFit app on your smartphone.\n\nStart reserve time: " + str(Start_Reserve_Time.isoformat(sep=' ', timespec='seconds')) + "\nClass is full at: " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
            logging.info('    NOT RESERVED - Class is FULL in the schedule >>> ' + reserve_ID)
            print("    NOT RESERVED - Class is FULL >>> " + reserve_ID)
        elif reserve_current_status == "FINISHED":
            send_mail(Contact_Email, "NOT RESERVED - Class is FINISHED - " + reserve_ID, reserve_ID + " impossible to reserve. Class is FINISHED at " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
            logging.info('    NOT RESERVED - Class is FINISHED >>> ' + reserve_ID)
            print("    NOT RESERVED - Class is FINISHED >>> " + reserve_ID)
        elif reserve_current_status == "RESERVED":
            r_activity_start = T_Reserves["Reserve_Start_Date"][T_Reserves["Activity_ID"].index(reserve_ID)] + datetime.timedelta(hours=49)
            r_activity_end = r_activity_start + datetime.timedelta(hours=1)
            send_mail(Contact_Email, "Reserve COMPLETED - " + r_Activity + " - " + r_weekday[0:3] + "-" + r_Day[0:2] + " " + r_Start_Time, "<div><p>" + r_Activity + " - " + r_weekday + " " + r_Day + " " + r_Start_Time + " reserve already COMPLETED.</p><p>Slot: UNKNOWN" + '</p></div><a href="http://www.google.com/calendar/render?action=TEMPLATE&text=' + r_Activity + '+-+Slot:+UNKNOWN&dates=' + r_activity_start.strftime("%Y%m%dT%H%M%S") + '/' + r_activity_end.strftime("%Y%m%dT%H%M%S") + '" target="_blank" rel="nofollow" style="font-size: 25px;">Add to my calendar</a>', 'text/html')
            logging.info('    RESERVED - Class is already RESERVED >>> ' + reserve_ID)
            print("    RESERVED - Class is already RESERVED >>> " + reserve_ID)
        else:
            send_mail(Contact_Email, "Reserve ERROR - " + reserve_ID, reserve_ID + " not found in schedule, or activity already reserved in My GO Fit app.\nManual reserve recommended.")
            logging.info('    RESERVE ERROR >>> ' + reserve_ID + " / reserve_current_status = " + reserve_current_status)
            print('    RESERVE ERROR >>> ' + reserve_ID + " / reserve_current_status = " + reserve_current_status)
            

        update_reserves_database()

    except Exception as e:
        e = traceback.format_exc()
        logging.error('Error:' + e)
        print(str(rep) + " rep >>> ************************ERROR************************")
        print(str(rep) + " rep >>> make_reserve_main")
        
    finally:
        browser.quit()
        final_slot = "Undefined"
    
        
def check_reserves():
    for r_reserve_ID in T_Reserves["Activity_ID"]:
        r_reserve_status = T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(r_reserve_ID)]
        r_reserve_time = T_Reserves["Reserve_Start_Date"][T_Reserves["Activity_ID"].index(r_reserve_ID)]
        #if (r_reserve_time + datetime.timedelta(seconds=-Start_Reserve_Time_In_Advance) < datetime.datetime.now()) and (r_reserve_time + datetime.timedelta(seconds=180) > datetime.datetime.now()) and (r_reserve_status != "RESERVED") and (r_reserve_status != "FULL"):
        if (r_reserve_time + datetime.timedelta(seconds=-Start_Reserve_Time_In_Advance) < datetime.datetime.now()) and (r_reserve_status != "RESERVED") and (r_reserve_status != "FULL") and (r_reserve_status != "INCOMPATIBLE") and (r_reserve_status != "FINISHED") and (r_reserve_status != "ERROR"):
            
            if r_reserve_status.split("_", 1)[0] == 'NOT FOUND':
                if int(r_reserve_status.split("_", 1)[1]) >= Max_Reserve_Tries:
                    continue
                else:
                    print("    " + r_reserve_ID + ' > reserve status = ' + r_reserve_status + ' / Max_Reserve_Tries = ' + str(Max_Reserve_Tries))
                    logging.info("    " + r_reserve_ID + ' > reserve status = ' + r_reserve_status + ' / Max_Reserve_Tries = ' + str(Max_Reserve_Tries))
            
            r_Day = r_reserve_ID.split("_", 2)[0]
            r_Start_Time = r_reserve_ID.split("_", 2)[1]
            r_Activity = r_reserve_ID.split("_", 2)[2]
            
            make_reserve_main(r_reserve_ID, r_Day, r_Start_Time, r_Activity)
           
def reserves_reminder():
    for r_reserve_ID in T_Reserves["Activity_ID"]:
        r_activity_start = T_Reserves["Reserve_Start_Date"][T_Reserves["Activity_ID"].index(r_reserve_ID)] + datetime.timedelta(hours=49)
        r_reserve_status = T_Reserves["Reserve_Status"][T_Reserves["Activity_ID"].index(r_reserve_ID)]
        r_Start_Time = r_reserve_ID.split("_", 2)[1]
        r_Activity = r_reserve_ID.split("_", 2)[2]
        r_reserve_slot = T_Reserves["Reserve_Slot"][T_Reserves["Activity_ID"].index(r_reserve_ID)]
        if ((r_activity_start +  datetime.timedelta(hours=-(Reminder_Min_Time + 1))) < datetime.datetime.now()) and ((r_activity_start + datetime.timedelta(hours=-(Reminder_Min_Time))) > datetime.datetime.now()) and (r_reserve_status == "RESERVED"):
            print("    Sending a class reminder for " + r_reserve_ID)
            logging.info("    Sending a class reminder for " + r_reserve_ID)
            send_mail(Contact_Email, "Class reminder: " + r_Activity + " - " + r_Start_Time, "<div><p>Please, note that you may have a GO Fit class reserved for today.</p><p>" + r_Activity + " at " + r_Start_Time + ". Slot: " + r_reserve_slot + '</p></div><a href="https://gym.serhe.es/reserves/list" target="_blank" rel="nofollow">Check my reserves</a>', 'text/html')


def start_loop():

    rep = Initial_Rep
    while rep >= 0:
    #for rep in range(0, 5):
    
        try:
            #print(str(rep) + " rep >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
            
            if float(rep) % Check_Reserves_Timer == 0:
                #logging.info(str(rep) + " rep >>> " + s_User + " >>> CHECK RESERVES")
                print(str(rep) + " rep >>> " + s_User + " >>> CHECK RESERVES >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
                check_reserves()
                #print(str(rep) + " rep >>> CHECK RESERVES DONE>>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))#######
                
            if float(rep) % Download_Schedule_Timer == 0:
                logging.info(str(rep) + " rep >>> " + s_User + " >>> DOWNLOAD SCHEDULE")
                print(str(rep) + " rep >>> " + s_User + " >>> DOWNLOAD SCHEDULE >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
                try_get_schedule_main()
                #print(str(rep) + " rep >>> DOWNLOAD SHEDULE DONE>>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))#######
                
            if float(rep) % Download_Reserves_Timer == 0:
                logging.info(str(rep) + " rep >>> " + s_User + " >>> DOWNLOAD RESERVES DB")
                print(str(rep) + " rep >>> " + s_User + " >>> DOWNLOAD RESERVES DB >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
                download_reserves_database()
                #print(str(rep) + " rep >>> DOWNLOAD RESERVES DONE>>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))#######
                
            if float(rep) % 3540 == 0:
                if Allow_Reserve_Reminders == True:
                    logging.info(str(rep) + " rep >>> " + s_User + " >>> RESERVES REMINDER")
                    print(str(rep) + " rep >>> " + s_User + " >>> RESERVES REMINDER >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
                    reserves_reminder()
            
            if (Init_Time + datetime.timedelta(minutes=10)) < (datetime.datetime.now()):
                if(datetime.datetime.now() > Server_Shutdown_Time):
                    if Allow_Server_Management == True:
                        server_shutdown()
                    break
                elif(datetime.datetime.now() < Server_Start_Time):
                    if Allow_Server_Management == True:
                        server_sleep()

            #ESPERAR X SEC
            time.sleep(Loop_Timer)
            
        except Exception as e:
            e = traceback.format_exc()
            logging.error('Error:' + e)
            print(str(rep) + " rep >>> ************************ERROR************************")
            print(str(rep) + " rep >>> start_loop")
            
        rep += 1
        

def server_shutdown():
    logging.info('SERVER SHUTDOWN')
    send_mail(Admin_Email, "GoFit_Tool SHUTTING DOWN", "Server shutting down at " + datetime.datetime.now().isoformat(sep=' ', timespec='seconds'))
    #subprocess.call([Shutdown_Path])
    os.system("C:\Windows\System32\cmd.exe /c " + Shutdown_Path)
    
def server_sleep():
    logging.info('SERVER SLEEPING')
    send_mail(Admin_Email, "GoFit_Tool GOING TO SLEEP", "Server sleeping at " + datetime.datetime.now().isoformat(sep=' ', timespec='seconds'))
    os.system("C:\Windows\System32\cmd.exe /c " + Sleeping_Path)


def main():

    sys.excepthook = error_handler

    init_variables()
    
    print("STARING SCRIPT FOR " + s_User)
    logging.info("STARING SCRIPT FOR " + s_User)
    
    if Allow_DB_Removal == True:
        print("    Cleaning Database")
        logging.info('    Cleaning Database')
        clean_database()
    
    print("INIT_TIME >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
    logging.info('START LOOP')

    if Allow_Server_Management == True:
        send_mail(Admin_Email, "GoFit_Tool STARTING", "GoFit_Tool has started at " + datetime.datetime.now().isoformat(sep=' ', timespec='seconds'))
    
    start_loop()

    print("END_TIME >>> " + str(datetime.datetime.now().isoformat(sep=' ', timespec='seconds')))
    logging.info('END LOOP')


if __name__ == "__main__":
     main()