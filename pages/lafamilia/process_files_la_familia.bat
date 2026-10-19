@echo off
:: Switch to the directory where this batch file (and your media folder) is located
cd /d "%~dp0"

:: Convert Windows path to a Cygwin path so bash retains the correct working directory
for /f "delims=" %%i in ('cygpath -u "%CD%"') do set "CYG_PATH=%%i"

C:\cygwin64\bin\bash.exe -l -c "cd '%CYG_PATH%' && c:/cygwin64/home/tom/bin/programming/html/update_media_el_familia.py"

C:\cygwin64\bin\bash.exe -l -c "cd '%CYG_PATH%' && c:/cygwin64/home/tom/bin/programming/html/update_links_el_familia.py"

:: 3. Convert markdown to HTML (fixed with cd and ./)
C:\cygwin64\bin\bash.exe -l -c "cd '%CYG_PATH%' && ./pandoc_convert_md2html.sh"

echo Converted markdown to HTML

pause
