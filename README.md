
# Sciqus-Student-Management-System-Frontend-Backend

Both Frontend Backend Task of Student Management System and Admin Privileges.
Seperate User logins and admin lagins based on admin status in MySQL.

Tech Stack: React,express,cors,nodejs


## Installation

Install zip file from VSCode

Extract It

Start VSCode

Open Extracted Folder in VSCode

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
go to backend/server.js

change mysql credentials(user,password)

go to mysql command line and login

```bash
 create database concert;
```
```bash
 use concert;
```
```bash
 CREATE TABLE signup (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(50),
    login_status INT,
    admin_status INT,
    PRIMARY KEY (id)
);
```
```bash
CREATE TABLE student (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(50),
    PRIMARY KEY (id)
);
```
Now you can register yourself and then login to start.

For admin privilages use below in mysql command line
```bash
insert into signup(name,email,username,password,login_status,admin_status) values('Your Name','Your email','Your username','Your password',0,1);
```
Enjoy Admin privileges with your email and password now




## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

go to backend/server.js

change mysql credentials(user,password)

go to mysql command line and login

```bash
 create database concert;
```
```bash
 use concert;
```
```bash
 CREATE TABLE signup (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(50),
    login_status INT,
    admin_status INT,
    PRIMARY KEY (id)
);
```
```bash
CREATE TABLE student (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(50),
    PRIMARY KEY (id)
);
```
Now you can register yourself and then login to start.

For admin privilages use below in mysql command line
```bash
insert into signup(name,email,username,password,login_status,admin_status) values('Your Name','Your email','Your username','Your password',0,1);
```
Enjoy Admin privileges with your email and password now



## Tech Stack

**Client:** React, HTML, CSS, JavaScript, Bootstrap

**Server:** Node, Express, Cors

**Database:** MySQL


