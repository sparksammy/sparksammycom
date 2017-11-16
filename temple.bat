@echo off
color 0a
title Temple OS 0.1 alpha
:A
ECHO TEMPLE OS
ECHO G - TALK TO G0d
echo TERRY - ABOUT ME
echo EOF - EXIT
SET /p CMD="$ "
GOTO %CMD%
:TERRY
echo god iz da bezt
echo cia is da worzt
echo run over dem cia peepz
goto A
:G
echo Hello, son.
echo Our talk is important to us.
echo Please hold on the line while you wait for God.
echo Your position is: %RANDOM%
echo Press any key to hang up.
pause
GOTO A
:EOF
exit
GOTO EOF