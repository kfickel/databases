CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  roomname TEXT,
  username TEXT,
  text TEXT,
);

/* Create other tables and define schemas for them here! */

-- CREATE TABLE rooms (
--   id INTEGER PRIMARY KEY,
--   roomname TEXT
-- );

-- CREATE TABLE users (
--   id INTEGER PRIMARY KEY,
--   username TEXT
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

