@echo off

:::: build angular ::::
cd resources/angular
call ng build

:::: copy new files ::::
xcopy /y dist\app.template.blade.php ..\views\app.blade.php
xcopy /y dist\*.js ..\..\public
xcopy /y dist\*.css ..\..\public
xcopy /s/y dist\assets\* ..\..\public\assets
