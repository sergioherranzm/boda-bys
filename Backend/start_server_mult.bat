@echo off
setlocal enableextensions enabledelayedexpansion

::Iniciamos los scripts

echo INICIANDO SCRIPT SERGIO
::echo Esperamos 30 segundos
TIMEOUT /t 30
start "C:\Users\BTC_server\AppData\Local\Programs\Python\Python39\python.exe" "C:\Users\BTC_server\Desktop\s_Folder\GoFit_Tool\Sergio\GoFit_Tool.py"

echo INICIANDO SCRIPT BEA
::echo Esperamos 300 segundos
TIMEOUT /t 300
start "C:\Users\BTC_server\AppData\Local\Programs\Python\Python39\python.exe" "C:\Users\BTC_server\Desktop\s_Folder\GoFit_Tool\Bea\GoFit_Tool.py"

exit