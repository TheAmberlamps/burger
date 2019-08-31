DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;
USE todolist;
CREATE TABLE burgers(
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
  );