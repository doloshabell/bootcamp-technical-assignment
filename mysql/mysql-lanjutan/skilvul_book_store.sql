CREATE DATABASE skilvulbookstore;

USE skilvulbookstore;

SHOW TABLES;

CREATE TABLE penerbit (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

SELECT * FROM penerbit;

desc penerbit;