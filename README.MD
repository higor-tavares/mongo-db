# MogoDB Sample
This project have made to pratice some concepts of mongo database.
## Runing the project
First of all create an `.env` file with the sample configuration like this
```
MDB_SERVER=localhost
MDB_PORT=27017
MDB_USER=mongoadmin
MDB_PASSWORD=admin
MDB_DATABASE=messages_db
```
and run `docker-compose up` to set up the database  
so run `npm start` command.

## Creating a message
To create a message from user A to user B you can to it running script `scripts/send-message.sh A B hello!` and this will invoke curl command and make a post on api

## Reading messages
To read all messages call `curl -X GET localhost:3000/messages | json_pp` 
To read specific messages from user A to user B run `curl -X GET localhost:3000/messages/{from}/{to} | json_pp` where from and to are your indentifiers

## Sample database queries

Inside db folder you can see the sample that i run on my machine and call edit and use this sample to lear the basics

## Warning
Do not use this project in production enviroments. this is a project to only educational purpouse. this is not otimized and secury and you may put your companie security under risk.