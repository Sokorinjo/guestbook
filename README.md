# Guestbook
Fullstack ReactTS, NodeJS and SQL app.

## 1. Setup Node and React
**1. Clone git repo.**
```
git clone git@github.com:Sokorinjo/guestbook.git
```

**2. From the root folder(guestbook) run:**
```
npm install
```

**3. Navigate to frontend folder and run the same:**
```
npm install
```

## 2. Setup MariaDB
1. MariaDB installation differs from OS to OS, so refer to official MariaDB docs: <br> https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb

2. Create table guestbook_db, or any name, just change DB_NAME in .env to match you db name(check section 3. for env variables).

2. From guestbook folder run in terminal:
```
npm run create-table
```
which will create a messages table
## 3. Environment variables
Create a .env file in guestbook folder and add env variables like so:
* NODE_ENV=development
* PORT=5000
* DB_HOST=localhost
* DB_USER=root
* DB_PASS=secretpass
* DB_PORT=3306
* DB_NAME=guestbook_db

Each of these variables can be changed if needed.

## 4. Start app
Run this script from guestbook frolder to start app:
```
npm run dev
```
You can also run client and server individually:
```
npm run client

npm run server
```






