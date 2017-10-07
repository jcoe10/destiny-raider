-- Create the database --
CREATE DATABASE destinyRaidDB;

USE destinyRaidDB;

-- Create a table for the raids --
CREATE TABLE raids
(
	id int NOT NULL AUTO_INCREMENT,
	raid_name varchar(255) NOT NULL,
	defeated BOOLEAN DEFAULT false,
  	time_comp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	date_comp DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);