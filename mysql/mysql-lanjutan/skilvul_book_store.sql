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

INSERT INTO penerbit (nama, kota)
VALUES ("Gramedia Pustaka Utama", "Jakarta"),
("Mizan Pustaka","Bandung"),
("Bentang Pustaka","Yogyakarta"),
("Penerbit Erlangga","Jakarta"),
("Penerbit Republika","Jakarta");

SELECT * FROM penerbit;

INSERT INTO penulis (nama, kota)
VALUES ("Joko Sapardi", "Jakarta"),
("Tere Liye", "Palembang"),
("Raditya Dika", "Jakarta"),
("Ilana Tan", "Jakarta"),
("Andrea Hirata", "Bangka Belitung");

SELECT * FROM penulis, penerbit;

INSERT INTO buku (isbn, judul, penulis, penerbit, harga, stock)
VALUES ("978-3-16-148411-7", "Pada Suatu Hari Nanti", "Joko Sapardi", 1, 50000, 20),
("978-3-16-148411-2", "Bilang Begini Maksudnya Begitu", "Joko Sapardi", 1, 45000, 20),
("978-3-12-158511-3", "Marmut Merah Jambu", "Raditya Dika", 2, 55000, 24),
("978-3-12-158512-6", "Kambing Jantan", "Raditya Dika", 2, 62000, 30),
("978-3-22-148219-4", "Bumi", "Tere Liye", 3, 75000, 16),
("978-3-22-148226-1", "Hujan", "Tere Liye", 3, 85000, 14),
("978-3-39-127219-4", "Summer in Seoul", "Ilana Tan", 4, 95000, 10),
("978-3-39-126234-8", "Spring in London", "Ilana Tan", 4, 90000, 12),
("978-3-61-123853-5", "Orang-orang Biasa", "Andrea Hirata", 5, 89000, 34),
("978-3-61-122748-9", "Sang Pemimpi", "Andrea Hirata", 5, 89000, 46);

SELECT * FROM buku;

SELECT buku.id, buku.judul AS judul_buku, penerbit.nama AS nama_penerbit
FROM buku
INNER JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT buku.id, buku.judul AS judul_buku, penerbit.nama AS nama_penerbit
FROM buku
LEFT JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT buku.id, buku.judul AS judul_buku, penerbit.nama AS nama_penerbit
FROM buku
RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT MAX(harga) AS max_harga
FROM buku
WHERE stock < 10;

SELECT MIN(harga) AS min_harga
FROM buku;

SELECT COUNT(id) AS jumlah_buku_dibawah_seratus_ribu
FROM buku
WHERE harga < 100000;