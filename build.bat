@echo off

:::: build angular ::::
cd resources/angular
call ng build

:::: copy new files ::::
:: xcopy /y dist\app.blade.php ..\views\app.blade.php
xcopy /y dist\*.js ..\..\public
xcopy /y dist\*.css ..\..\public
