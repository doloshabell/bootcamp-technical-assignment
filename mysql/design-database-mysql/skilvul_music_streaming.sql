CREATE DATABASE skilvul_music_streaming;

USE skilvul_music_streaming;

create table user (
	user_id INT,
    name VARCHAR(45),
    email VARCHAR(45),
    password VARCHAR(45)
);

create table singer (
	singer_id INT,
    name VARCHAR(45)
);

create table track (
	track_id INT,
    title VARCHAR(45),
    singer_id INT,
    album_id INT
);

create table album (
	album_id INT,
    name VARCHAR(45),
    singer_id INT
);

create table playlist (
	playlist_id INT,
    user_id INT,
	tracks INT
);

create table track_playlist (
	playlist_id INT,
	track_id INT
);

SHOW TABLES;