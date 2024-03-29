# My Presentation on ORM

## Introduction
This README file provides an overview of ORM and its importance in software development.

## What is ORM?
ORM stands for Object-Relational Mapping

It's a programming technique that allows developers to interact with a relational database using an object-oriented approach. Instead of writing SQL queries directly to interact with the database, developers can work with objects in their programming language of choice, and the ORM library translates those operations into the corresponding database queries

## Difference btwn ORM AND ODM

ODM is used for NoSQL databases, particularly document-oriented databases like MongoDB, Couchbase, or CouchDB.

ODM frameworks provide features for CRUD (Create, Read, Update, Delete) operations, indexing, and querying documents in the database

Popular ODM frameworks include Mongoose (for MongoDB in Node.js), Morphia (for MongoDB in Java), and Mongoid (for MongoDB in Ruby)

### Benefits of ORM
- Reduced development time
- Increased productivity
- Improved maintainability

## Popular ORM Frameworks
- Hibernate (Java)
- Entity Framework (.NET)
- SQLAlchemy (Python)
- Sequelize (Javascript)

## SEQUELIZE
Sequelize is a popular ORM (Object-Relational Mapping) library for Node.js, which allows developers to interact with relational databases like PostgreSQL, MySQL, SQLite, and MSSQL using JavaScript objects. When combined with Express.js, a web application framework for Node.js, Sequelize simplifies database operations and integrates seamlessly into Node.js web applications. Let's walk through the basics of using Sequelize with Node.js and Express:


##  SEQUELIZE INSTALLATION 
```Javascript 
npm install sequelize

```



## comand to start postgress

```Javascript 
sudo -i -u postgres
```

## then 
```Javascript 
psql
```

This command launches the PostgreSQL interactive terminal where you can execute SQL commands

## confirm your connections
```Javascript 
\conninfo 
```


## see database that already exist 

```Javascript 
\l
```

## create db 
```Javascript 
CREATE DATABASE students;
```

## switch to your created database
```Javascript 
\c students
```

## CREATE TABLE IN THE DATABASE
```sql
CREATE TABLE students(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT,
    dob DATE);

 ```
## viewtable 

```Javascript 
\dt

```

## insert studensts
```sql 
INSERT INTO students (name, email, age,dob)
VALUES ('kababa', 'kaka@gmail.com', 45, '1897-02-02'),
('ann','aaana@gmai.com',34,'1985-05-05')

```









