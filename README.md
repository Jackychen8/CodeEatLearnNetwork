# Get started
1. Clone repository `git clone https://github.com/Jackychen8/CodeEatLearnNetwork.git`
2. Enter repository `cd CodeEatLearnNetwork`

# Start Running the App
1. Database
    1. PostgreSQL
        1. Download & Install
        2. Start Postgres Daemon
        3. Use Postgres CLI to create testdb
2. Backend
    1. Python
        1. Create virtual environment with virtualenv (Python 2.7) `virtualenv venv`
        2. Start virtual environment `$ source venv/bin/activate`
        3. Install required packages `$ pip install -r requirements.txt`
    2. Flask
        1. Set environment variable to recognize db. `$ export DATABASE_URL="postgresql://localhost/testdb"`
        2. Run Flask Server from main directory `$ python manage.py runserver`
3. Frontend
    1. Start a new terminal window
    2. Move into frontend code's directory from previous directory `$ cd static`
    3. Install dependencies `$ npm install`
    4. Start Frontend server `npm start`



# React-Redux-Flask #

Boilerplate application for a Flask JWT Backend and a React/Redux Front-End with Material UI.

* Python 2.7+ or 3.x
* Pytest
* Heroku
* Flask
* React
* Redux
* React-Router 2.0
* React-Router-Redux
* Babel 6
* SCSS processing
* Webpack

![screenshot](http://i.imgur.com/ZIS4qkw.png)

### Create DB
Start a database daemon and create a database on your computer (localhost) or elsewhere
- mysql
- postgresql
- sqlite

#### Point env variable DATABASE_URL at database
```sh
$ export DATABASE_URL="postgresql://username:password@localhost/mydatabase"

or

$ export DATABASE_URL="mysql+mysqlconnector://username:password@localhost/mydatabase"

or

$ export DATABASE_URL="sqlite:///your.db"

$ export DATABASE_URL="postgresql://localhost/testdb"
```
(More about connection strings in this [flask config guide](http://flask-sqlalchemy.pocoo.org/2.1/config/).)
```
$ python manage.py create_db
$ python manage.py db upgrade
$ python manage.py db migrate
```

To update database after creating new migrations, use:

```sh
$ python manage.py db upgrade
```

### Install Front-End Requirements
```sh
$ cd static
$ npm install
```

### Run Back-End

```sh
$ python manage.py runserver
```

### Test Back-End

```sh
$ python test.py --cov-report=term --cov-report=html --cov=application/ tests/
```

### Run Front-End

```sh
$ cd static
$ npm start
```

### Build Front-End

```sh
$ npm run build:production
```

### New to Github?
#### Common FAQ
##### Getting started contributing (git push issues)
- If 2 factor authentication is on, you must generate a personal access token with access to repositories and, when pushing, use that token as your password.
[https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/]

### New to Python?

If you are approaching this demo as primarily a frontend dev with limited or no python experience, you may need to install a few things that a seasoned python dev would already have installed.

Most Macs already have python 2.7 installed but you may not have pip install. You can check to see if you have them installed:

```
$ python --version
$ pip --version
```

If pip is not installed, you can follow this simple article to [get both homebrew and python](https://howchoo.com/g/mze4ntbknjk/install-pip-on-mac-os-x)

After you install python, you can optionally also install python 3

```
$ brew install python3
```

Now you can check again to see if both python and pip are installed. Once pip is installed, you can download the required flask modules:

```
$ sudo pip install flask flask_script flask_migrate flask_bcrypt
```

Now, you can decide on which database you wish to use.

#### New to MySQL?

If you decide on MySQL, install the free community edition of [MySQL](https://dev.mysql.com/downloads/mysql/) and [MySQL Workbench](https://www.mysql.com/products/workbench/)

1. start MySQL from the System Preferences
2. open MySQL Workbench and [create a database](http://stackoverflow.com/questions/5515745/create-a-new-database-with-mysql-workbench) called mydatabase but don't create the tables since python will do that for you
3. Install the MySQL connector for Python, add the DATABASE_URL configuration, and create the database and tables

```
$ sudo pip install mysql-connector-python-rf
$ export DATABASE_URL="mysql+mysqlconnector://username:password@localhost/mydatabase"
$ python manage.py create_db
```

Note: you do not need to run "python manage.py db upgrade" or "python manage.py db migrate" if its your first go at it

4. Run Back-End

```
$ python manage.py runserver
```

If all goes well, you should see ```* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)``` followed by a few more lines in the terminal.

5. open a new tab to the same directory and run the front end

```
$ cd static
$ npm install
$ npm start
```

6. open your browser to http://localhost:3000/register and setup your first account
7. enjoy! By this point, you should be able to create an account and login without errors.

#### New to Postgres?  Here Are 10 Easy Steps To Start Postgres

```
1. show list of database: psql -l

MTVL16076ce6e:static jxie2$ psql -l
                              List of databases
   Name    | Owner | Encoding |   Collate   |    Ctype    | Access privileges 
-----------+-------+----------+-------------+-------------+-------------------
 postgres  | jxie2 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 template0 | jxie2 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/jxie2         +
           |       |          |             |             | jxie2=CTc/jxie2
 template1 | jxie2 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/jxie2         +
           |       |          |             |             | jxie2=CTc/jxie2

2. get into a database: psql postgres

MTVL16076ce6e:static jxie2$ psql postgres
psql (10.5)
Type "help" for help.

postgres=# 

3. create database:  create database newdatabase

postgres=# create database testdb;
CREATE DATABASE



4. list of database within database: \l

postgres=# \l
                              List of databases
   Name    | Owner | Encoding |   Collate   |    Ctype    | Access privileges 
-----------+-------+----------+-------------+-------------+-------------------
 postgres  | jxie2 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 template0 | jxie2 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/jxie2         +
           |       |          |             |             | jxie2=CTc/jxie2
 template1 | jxie2 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/jxie2         +
           |       |          |             |             | jxie2=CTc/jxie2
 testdb    | jxie2 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =Tc/jxie2        +
           |       |          |             |             | jxie2=CTc/jxie2  +
           |       |          |             |             | jiajia=CTc/jxie2

4. switch to a database within a database: \c newdatabase

postgres=# \c testdb
You are now connected to database "testdb" as user "jxie2".
testdb=# 

5. create role:  create role somerole

testdb=# create role jjxie;
CREATE ROLE
testdb=# 

6. list of tables and other objects: \d

testdb=# \d
            List of relations
 Schema |    Name     |   Type   | Owner 
--------+-------------+----------+-------
 public | user        | table    | jxie2
 public | user_id_seq | sequence | jxie2
(2 rows)

7. describe the table:  \d tablename

                                     Table "public.user"
  Column  |          Type          | Collation | Nullable |             Default              
----------+------------------------+-----------+----------+----------------------------------
 id       | integer                |           | not null | nextval('user_id_seq'::regclass)
 email    | character varying(255) |           |          | 
 password | character varying(255) |           |          | 
Indexes:
    "user_pkey" PRIMARY KEY, btree (id)
    "user_email_key" UNIQUE CONSTRAINT, btree (email)


8. show the content of the table:   select * from schemaname.tablename;

testdb=# select * from public.user;
 id |      email       |                           password                           
----+------------------+--------------------------------------------------------------
  1 | jiaxie@gmail.com | $2a$12$geBdB0LnrDvJRVL5C0S8m./xKWFNHvsOw8lmJ1qphrDYVN0/SJMe2
(1 row)

9. change database: \c newdatabase

testdb=# \c postgres;
You are now connected to database "postgres" as user "jxie2".
postgres=# 

10.  get out of a database \q 

postgres=# \q
MTVL16076ce6e:static jxie2$ 


11.  Congratulations for finish the tutorial!  

Additional resources: 

https://www.postgresql.org/docs/9.5/static/sql-createrole.html
http://www.postgresqltutorial.com/

And pleae thank the technical writer Jia for her awesome work!
```
