var db = require('../db');

var counter = 1;

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      // should serve up array of messages, each containing username, text, roomname
      console.log('model get before function');
      // var queryString = 'SELECT rooms.roomname, users.username, messages.text FROM rooms, users, messages WHERE messages.rooms_id = rooms.id AND messages.users_id = users.id';
      var queryString = 'SELECT roomname, username, text FROM messages';
      db.connect();
      db.query(queryString, function(err, results) {
        // results is an array of ROWDATA objects, with properties 
        // corresponding to column names, must JSON stringify to serialize properly
        console.log('RESULTS ', JSON.stringify(results));
        return results; // async problem
      });
      // db.end();
    }, 
    post: function (messageObj) { // a function which can be used to insert a message into the database
      // takes in a message object, and runs an insert query (or queries)
      var queryString = `INSERT INTO messages VALUES (${counter++}, ${messageObj.roomname}, ${messageObj.username}, ${messageObj.text})`;
      db.query(queryString, function(err, results) {
        console.log('INSERT RESULTS ', results);
      });
      // db.end();
    } 
      
  },

  users: {
    // Ditto as above.
    get: function () {
      var queryString = 'SELECT username FROM messages';
      db.connect();
      db.query(queryString, function(err, results) {
        return results; // async problem
      });
      // db.end();
    },
    post: function () {
      // what's the point of this if we don't have a separate users table?
      // fake the test out until we get to advanced content.
      // db.end();
    }
  }
};

