import datetime
import os
import traceback
from pymongo import MongoClient
from jproperties import Properties

def init_variables():
    global Loop_Timer
    global Initial_Rep
    global Download_Schedule_Timer
    global Download_Reserves_Timer
    global Check_Reserves_Timer
    global Start_Reserve_Time_In_Advance
    global Server_Start_Time
    global Server_Shutdown_Time
    global Chrome_Window_Size_Schedule
    global Chrome_Window_Size_Reserves
    global Admin_Email
    global Shutdown_Path
    global s_User
    global s_Password
    global Contact_Email
    global Fav_Slot_Default
    global Gofit_Url_Login
    global Gofit_Url_Schedule
    global Chrome_Driver_Path
    global DB_URI
    global DB_Name
    global Application_Path
    Application_Path = os.path.dirname(os.path.abspath(__file__))
    
    
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
    Server_Start_Time = datetime.datetime.strptime(str(datetime.date.today()), "%Y-%m-%d") + datetime.timedelta(hours=float(configs.get("Server_Start_Time").data.split(":")[0])) + datetime.timedelta(minutes=float(configs.get("Server_Start_Time").data.split(":")[1]))
    Server_Shutdown_Time = datetime.datetime.strptime(str(datetime.date.today()), "%Y-%m-%d") + datetime.timedelta(hours=float(configs.get("Server_Shutdown_Time").data.split(":")[0])) + datetime.timedelta(minutes=float(configs.get("Server_Shutdown_Time").data.split(":")[1]))
    Chrome_Window_Size_Schedule = configs.get("Chrome_Window_Size_Schedule").data
    Chrome_Window_Size_Reserves = configs.get("Chrome_Window_Size_Reserves").data
    Admin_Email = configs.get("Admin_Email").data
    Shutdown_Path = configs.get("Shutdown_Path").data
    s_User = configs.get("s_User").data
    s_Password = configs.get("s_Password").data
    Contact_Email = configs.get("Contact_Email").data
    Gofit_Url_Login = configs.get("Gofit_Url_Login").data
    Gofit_Url_Schedule = configs.get("Gofit_Url_Schedule").data
    Chrome_Driver_Path = configs.get("Chrome_Driver_Path").data
    
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
    
    
    
    
    
    
    DB_URI = configs.get("DB_URI").data
    DB_Name = configs.get("DB_Name").data
         

def test_database():
    global DB
    global DB_Reserves
    global DB_Activities
    
    #https://zetcode.com/python/pymongo/
    #https://pymongo.readthedocs.io/en/stable/index.html#

    try:
        
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Reserves = DB.reserves
        DB_Activities = DB.activities
        
        #x = mycol.delete_many({})
        
        #print(DB.collection_names())
                
        #cat = DB_Reserves.find_one()1
        #print(cat)
        """
        categs = DB.categories.find()
        for categ in categs:
            print('{0} >>> {1}'.format(categ['title'], categ['description']))
        """
        
    except:
        e = traceback.format_exc()
        print('Error:' + e)
        
    finally:
        client.close()



def load_reserves_database():
    global T_Reserves
    T_Reserves = {
        "Activity_ID": [],
        "Related_Activity": [],
        "Reserve_Status": [],
        "Reserve_Owner":[]
    }
    
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
        
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Reserves = DB.reserves
        DB_Activities = DB.activities
        

        reserves = DB_Reserves.find()
        
        for reserve in reserves:
            print('{0} es ID'.format(reserve['_id']))
            '''
            if reserve_Owner...
            if (datetime.datetime.now()) < (datetime.datetime.strptime(row[1], "%d/%m/%Y %H:%M") + datetime.timedelta(hours=48)):
                T_Reserves["Activity_ID"].append(row[0])
                T_Reserves["Reserve_Start_Date"].append(row[1])
                T_Reserves["Reserve_Status"].append(row[2])'''
        
        #print("    Load reserves from DB completed")
        
    except:
        e = traceback.format_exc()
        print('Error:' + e)
        
    finally:
        client.close()

def update_reserves_database():
    
    T_Reserves = {
        "Activity_ID": ['15/05/2023_09:45_DANCE'],
        "Related_Activity_ID": [''],
        "Reserve_Start_Date": ['13/05/2023 08:45'],
        "Reserve_Status": [''],
        "Reserve_Owner":['bea.dmedial@gmail.com'],
        "Reserve_Owner_ID":['']
    }
    
        
    try:
        
        client = MongoClient(DB_URI)
        DB = client[DB_Name]
        DB_Reserves = DB.reserves
        DB_Activities = DB.activities
        
        for index in range(0, len(T_Reserves["Activity_ID"])):
            
            row = {
                "Activity_ID": str(T_Reserves["Activity_ID"][index]),
                "Related_Activity_ID": str(T_Reserves["Related_Activity_ID"][index]),
                #"Reserve_Start_Date": str(T_Reserves["Reserve_Start_Date"][index]),
                "Reserve_Start_Date": datetime.datetime.strptime(T_Reserves["Reserve_Start_Date"][index], "%d/%m/%Y %H:%M"),
                "Reserve_Status": str(T_Reserves["Reserve_Status"][index]),
                "Reserve_Owner":str(T_Reserves["Reserve_Owner"][index]),
                "Reserve_Owner_ID":str(T_Reserves["Reserve_Owner_ID"][index])
            }

            DB_Reserves.update_one({'Activity_ID':str(T_Reserves["Activity_ID"][index]), 'Reserve_Owner':str(T_Reserves["Reserve_Owner"][index])}, {'$set':row}, upsert=True)
            #DB_Reserves.replace_one({'Activity_ID':str(T_Reserves["Activity_ID"][index])}, row, upsert=True)
            
        
        #DB_Users = DB.users
        #DB_Users.insert_one({'user': 'bea.dmedial@gmail.com', 'name': 'Bea'})
        
       
    except:
        e = traceback.format_exc()
        print('Error:' + e)
        
    finally:
        client.close()

        

def main():
    
    print('SCRIPT START')

    #init_variables()
    
    #load_reserves_database()
    
    #update_reserves_database()
    
    
    x = ['01', '02', '03']
    y = list(x)
    y.reverse()
    for item in y:
        print(item)
    
    

    print('SCRIPT END')


if __name__ == "__main__":
     main()