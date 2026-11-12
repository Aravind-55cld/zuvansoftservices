@echo off
set "PATH=C:\Program Files\nodejs;%LOCALAPPDATA%\Programs\nodejs;%APPDATA%\npm;%PATH%"
echo Building Zuvan Next.js Production App...
npm run build

