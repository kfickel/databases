// need to drop old db, create new db, then you can set up connection

// var Sequelize = require('sequelize');
// var dbConnection = new Sequelize('chatter', 'root', 'plantlife');

// var User = dbConnection.define('User', {
//   username: Sequelize.STRING
// });

// var Message = dbConnection.define('Message', {
//   username: Sequelize.STRING,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });


// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".
// var dbConnection = mysql.createConnection({
//   user: 'root',
//   password: 'plantlife',
//   database: 'chat'
// });

// module.exports = dbConnection;