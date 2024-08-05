@if (@CodeSection == @Batch) @then
@echo off
setlocal enableextensions enabledelayedexpansion

SET SendKeys=CScript //nologo //E:JScript "%~F0"

FOR /L %%V IN (10, -1, 1) DO (
	echo Quedan %%V segundos para reactivar el ordenador
	ping 127.0.0.1 -n 2 > nul
)

FOR /L %%V IN (0, 1, 999999) DO (
	echo Han pasado %%V minutos desde la reactivacion

	%SendKeys% "{ }"
	TIMEOUT /t 60

)


GOTO :EOF

@end
// JScript section
var WshShell = WScript.CreateObject("WScript.Shell");
WshShell.SendKeys(WScript.Arguments(0));0