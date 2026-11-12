@echo off
set "PATH=C:\Program Files\nodejs;%LOCALAPPDATA%\Programs\nodejs;%APPDATA%\npm;%PATH%"
if exist .next\BUILD_ID (
    echo Cleaning stale build cache...
    rmdir /s /q .next 2>nul
)
echo Starting Zuvan Next.js Development Server...
npm run dev

