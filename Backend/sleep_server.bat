@echo off
setlocal enableextensions enabledelayedexpansion
::Esperamos 10 segundos

FOR /L %%V IN (10, -1, 1) DO (
	echo Quedan %%V segundos para suspender el ordenador
	ping 127.0.0.1 -n 2 > nul
)

::Suspendemos el pc
powershell -c "$wshell = New-Object -ComObject wscript.shell; Add-Type -Assembly System.Windows.Forms; $state = [System.Windows.Forms.PowerState]::Suspend; [System.Windows.Forms.Application]::SetSuspendState($state, $false, $false)