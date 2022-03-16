CREATE DATABASE skilvulbookstore;

USE skilvulbookstore;

CREATE TABLE penerbit (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

CREATE TABLE penulis (
	id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

CREATE TABLE buku (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(50),
    judul VARCHAR(50),
    penulis VARCHAR(50),
    penerbit INTEGER,
    harga INTEGER,
    stock INTEGER
);

SHOW TABLES;