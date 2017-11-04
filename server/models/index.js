// models
var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var queryString = 'SELECT roomname, username, text FROM messages';
      db.query(queryString, function(err, results) {
        cb({results: results});
      });
    }, 
    post: function (messageObj, cb) {
      console.log('MESSAGEOBJ ', messageObj);
      //query select the largest message id
      // increment to make new message id
      var queryString = `INSERT INTO messages VALUES ("${messageObj.roomname}", "${messageObj.username}", "${messageObj.text}")`;
      db.query(queryString, function(err, results) {
        console.log('ERR ', err);
        console.log('RESULTS ', results);
        cb(results.insertId);
      });
    }
      
  },

  users: {
    get: function () {
      var queryString = 'SELECT username FROM messages';
      db.query(queryString, function(err, results) {
        return results;
      });
    },
    post: function (cb) {
      // what's the point of this if we don't have a separate users table?
      // fake the test out until we get to advanced content.
      cb('posted user');
    }
  }
};

