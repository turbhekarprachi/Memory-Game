#! /bin/bash/

git pull 
npm run build
pm2 start pm2.json
pm2 save