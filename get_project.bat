@echo off
echo Downloading project from GitHub...
powershell -NoProfile -Command "Invoke-WebRequest -Uri 'https://github.com/amstrongluiese/portfolio/archive/refs/heads/main.zip' -OutFile 'repo.zip'; Expand-Archive -Path 'repo.zip' -DestinationPath '.' -Force; Move-Item -Path 'portfolio-main\*' -Destination '.' -Force; Move-Item -Path 'portfolio-main\.*' -Destination '.' -Force -ErrorAction SilentlyContinue; Remove-Item -Path 'portfolio-main' -Recurse -Force; Remove-Item -Path 'repo.zip' -Force"
echo.
echo Project has been downloaded and extracted!
pause
