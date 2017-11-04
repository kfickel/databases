var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      // should serve up array of messages, each containing username, text, roomname
      console.log('model get before function');
      var queryString = 'SELECT rooms.roomname, users.username, messages.text FROM rooms, users, messages WHERE messages.rooms_id = rooms.id AND messages.users_id = users.id';
      db.connect();
      db.query(queryString, function(err, results) {
        // results is an array of row objects, with properties 
        // corresponding to column names
        console.log('RESULTS ', JSON.stringify(results));
        return results;
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

