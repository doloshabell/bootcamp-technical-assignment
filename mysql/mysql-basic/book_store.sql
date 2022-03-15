SHOW DATABASES;

CREATE DATABASE bookstore;

USE bookstore;

SHOW TABLES;

CREATE TABLE books (
	id integer auto_increment primary key,
    author1 varchar(100) not null,
    author2 varchar(100),
    author3 varchar(100),
    title varchar(100),
    description text,
    place_sell varchar(3),
    stock integer default 0,
    creation_date datetime default current_timestamp on update current_timestamp
);

ALTER TABLE books
ADD price integer default 0;

ALTER TABLE books
ADD status enum("available", "out of stock", "limited");

ALTER TABLE books
DROP COLUMN place_sell;

INSERT INTO books (author1, author2, author3, title, description, stock, price, status)
VALUES ("Habell", "Dolosha", "Purba", "Mendaki Gunung", "Buku yang berisi cerita ketika mendaki gunung", 5, 50000, "available"),
("Bambang", "Sudjatmiko", "Jajang", "Sang Pahlawan Kesiangan", "Cerita-cerita lucu tentang manusia sok-sokan", 2, 51000, "limited"),
("Joko", "Cakra", "Kulino", "Aku Hebat", "Kumpulan kata-kata motivasi", 0, 55000, "out of stock");

SELECT * FROM books;

SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3
FROM books;

SELECT * 
FROM books
WHERE id = 1;

SELECT *
FROM books
WHERE id = 2 AND author1 = "Bambang";

SELECT *
FROM books
WHERE id = 3 OR author1 = "Habell";

SELECT *
FROM books
WHERE NOT id = 2;

SELECT *
FROM books
ORDER BY id ASC;

SELECT * 
FROM books
LIMIT 2;

UPDATE books
SET author1 = "Lala", price = 20000
WHERE id = 2;

DELETE FROM books WHERE id = 3;