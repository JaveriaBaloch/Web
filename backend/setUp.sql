alter user 'web-admin'@'localhost' identified with mysql_native_password By 'Potsdam!sGr8';
create database JaveriaBaloch;
use JaveriaBaloch;
CREATE TABLE `Customers`(
  `CID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Conatact` VARCHAR(45) NOT NULL,
  `Location` VARCHAR(145) NOT NULL,
  `role` VARCHAR(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`CID`)
  );
  
  CREATE TABLE `Project` (
  `PID` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(45) NOT NULL,
  `StartDate` DATE NOT NULL,
  `Type` VARCHAR(45) NOT NULL,
  `Budget` INT NOT NULL,
  `CustomerID` INT NOT NULL,
  `Duration` VARCHAR(45) NOT NULL,
  `noOFproducts` INT NOT NULL,
  Foreign key(CustomerID) references Customers(CID),
  PRIMARY KEY (`PID`)
  );

CREATE TABLE `Messages`(
  `MsgID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Message` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`MsgID`)
  );

insert into customers values (1,"Javeria","123678","k@gmai.com","Potsdam","user");
insert into customers values (2,"Ali","12neii8","k1324k@gmai.com","USA","user");
insert into customers values (3,"Mike","1rtrt78","kdakh@gmai.com","Berlin","admin");

insert into project values (1,"ETD","2022-11-08","Web App Development",50000,1,"7",4);
insert into project values (2,"EvD","2023-01-08","Web App Development",50000,1,"5",4);
insert into project values (3,"Evite","2023-01-08","Mobile App Development",56900,2,"2",1);
insert into project values (4,"EUYE","2021-11-06","Web App Development",95000,1,"5",2);
insert into project values (5,"EBe","2022-05-18","Mobile App Development",536900,2,"3",6);

insert into Messages values (1,"Javeria","r123@gmail.com","Need Guidance in app projects");
insert into Messages values (2,"Annet","a.mike@gmail.io","Help is need in account creation");

