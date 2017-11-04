var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      // should serve up array of messages, each containing username, text, roomname
      var queryString = 'SELECT rooms.roomname, users.username, messages.text FROM rooms, users, messages WHERE messages.rooms_id = rooms.id AND messages.users_id = users.id';

      db.query(queryString, function(err, results) {
        console.log(results);
      });
    }, 
    post: function () { // a function which can be used to insert a message into the database
      // takes in a message object, and runs an insert query (or queries)
    } 
      
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

