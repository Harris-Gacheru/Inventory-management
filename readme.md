# Inventory Management System

This is a project to manage inventory and sale data.

## Technologies

* Frontend: Angular
* Backend: Nodejs
* DB: MySQL

## Get started

### Clone the repo

```shell
git clone https://github.com/Harris-Gacheru/Inventory-management.git
cd Inventory-management
```
### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

Frontend: 
```shell
cd fe
npm install
```

Backend: 
```shell
cd be
npm install
```

### Running the project

Frontend: 
```shell
cd fe
ng serve
```

Backend: 
```shell
cd be
npm start
```

DB:
```shell
cd be/db
```

Import `inventory.db.sql` to your mysql/ xamppp.
Create `.env` file and the environment variables to match the config file i.e `cd be\config\config.js`.