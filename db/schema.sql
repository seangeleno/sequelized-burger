
--LOCAL
CREATE DATABASE burgers_db; --local
USE burgers_db; --local db

--HEROKU/JAWS
--DB is automatically created by Heroku Jaws with names like "sjrp8qw9yxmskqp8" 
--use sjrp8qw9yxmskqp8 --Jaws db


--COMMON for local and Heroku
CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean not null default 0,
    createdAt timestamp not null default current_timestamp,
    updatedAt timestamp not null default current_timestamp,
	PRIMARY KEY (id)
);

select * from burgers