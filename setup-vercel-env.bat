@echo off
echo Adding environment variables to Vercel...
echo.

echo Adding URI...
echo mongodb+srv://foodDB:aWEabfeT2RV05q0u@cluster0.znmkoxj.mongodb.net/foodDB?appName=Cluster0 | vercel env add URI production --yes

echo.
echo Adding DB_NAME...
echo foodDB | vercel env add DB_NAME production --yes

echo.
echo Adding NEXT_PUBLIC_BASE_URL...
echo https://foodi-murex.vercel.app | vercel env add NEXT_PUBLIC_BASE_URL production --yes

echo.
echo Environment variables added successfully!
echo Now redeploying...
vercel --prod

echo.
echo Done! Check your deployment at https://foodi-murex.vercel.app
