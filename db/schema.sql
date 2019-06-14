CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT(4) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(140) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY(id)
    )