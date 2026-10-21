
@echo off
setlocal
cd /d "%~dp0"

for /r %%F in (*.jpg *.jpeg *.png) do (
    echo Processing: %%~fF

    ffmpeg.exe -hide_banner -loglevel error -y -i "%%~fF" -c:v libwebp -quality 85 "%%~dpnF_converted.webp"

    if errorlevel 1 (
        echo FAILED - Original kept: %%~nxF
    ) else (
        del "%%~fF"
        ren "%%~dpnF_converted.webp" "%%~nF.webp"
        echo DONE: %%~nF.webp
    )
)

echo.
echo All images processed!
pause
