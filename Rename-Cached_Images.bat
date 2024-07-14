@echo off
setlocal enabledelayedexpansion
REM Cached Trader Image Cleanup Script
:: ====================================
::       author | jbs4bmx
:: created date | [DMY] 13.07.2024
::  modify date | [DMY] 13.07.2024
:: ====================================

:: Delete the local spt cached images.
::echo.
::echo. Removing cached trader images...
::del /s ..\..\sptappdata\files\trader\avatar\*.*
::ping -n 5 127.0.0.1 >NUL 2>&1 || ping -n %1 ::1 >NUL 2>&1




:menu
cls
echo.=============================================
echo.     Cached Trader Image Renaming Script
echo.=============================================
echo.  1. Rename files
echo.  2. Restore original trader icons
echo.  3. Cancel ^(Exit^)
echo.=============================================
set /p choice="Enter your choice (1, 2, or 3): "

if "%choice%"=="1" goto rename_files
if "%choice%"=="2" goto revert_files
if "%choice%"=="3" goto end
echo Invalid choice, please try again.
pause
goto menu



:rename_files
cls && echo.
echo. Renaming cached trader images...
for %%f in (..\..\sptappdata\files\trader\avatar\*.png) do (
    ren "%%f" "%%~nf.png.bak"
)
ping -n 3 127.0.0.1 >NUL 2>&1 || ping -n %1 ::1 >NUL 2>&1
for %%g in (..\..\sptappdata\files\trader\avatar\*.jpg) do (
    ren "%%g" "%%~ng.jpg.bak"
)
ping -n 3 127.0.0.1 >NUL 2>&1 || ping -n %1 ::1 >NUL 2>&1
goto menu



:revert_files
cls && echo.
echo. Restoring cached trader images...
for %%h in (..\..\sptappdata\files\trader\avatar\*.*) do (
    if /I "%%~xh" NEQ ".bak" (
        del "%%h"
        echo Deleted %%h
    )
)
for %%p in (..\..\sptappdata\files\trader\avatar\*.png.bak) do (
    set "filename=%%~np"
    set "extension=%%~xp"
    ren "%%p" "%%~np"
)
ping -n 3 127.0.0.1 >NUL 2>&1 || ping -n %1 ::1 >NUL 2>&1
for %%j in (..\..\sptappdata\files\trader\avatar\*.jpg.bak) do (
    set "filename=%%~nj"
    set "extension=%%~xj"
    ren "%%j" "%%~nj"
)
ping -n 3 127.0.0.1 >NUL 2>&1 || ping -n %1 ::1 >NUL 2>&1
goto menu



:end
echo.
echo.Exiting script...
ping -n 3 127.0.0.1 >NUL 2>&1 || ping -n %1 ::1 >NUL 2>&1
exit 0
::end
