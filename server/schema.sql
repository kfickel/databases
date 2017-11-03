CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  rooms_id INTEGER,
  users_id INTEGER,
  message_text TEXT,
  FOREIGN KEY(rooms_id) REFERENCES rooms(id),
  FOREIGN KEY(users_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

