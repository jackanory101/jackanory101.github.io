@echo off
:: Switch to the directory where this batch file (and your media folder) is located
cd /d "%~dp0"

:: Convert Windows path to a Cygwin path so bash retains the correct working directory
for /f "delims=" %%i in ('cygpath -u "%CD%"') do set "CYG_PATH=%%i"

:: Run bash, change into the media folder's directory, and execute your script
C:\cygwin64\bin\bash.exe -l -c "cd '%CYG_PATH%' && c:/cygwin64/home/tom/bin/programming/html/html_snip_from_media.py"

pause
