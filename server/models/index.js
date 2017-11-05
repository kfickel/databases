// models
var db = require('../../orm-resources/orm-example.js');

module.exports = {
  messages: {
    get: function (cb) {
      db.Message.findAll({
        attributes: ['username', 'text', 'roomname']})
      .then(messages => {
        cb({results: messages});
      });
      // var queryString = 'SELECT * FROM messages';
      // db.db.query(queryString, function(err, results) {
      //   cb({results: results});
      // });
    }, 
    post: function (messageObj, cb) {
      console.log('MESSAGEOBJ ', messageObj);
      //query select the largest message id
      // increment to make new message id
      // var queryString = `INSERT INTO messages VALUES ("${messageObj.roomname}", "${messageObj.username}", "${messageObj.text}")`;
      // db.db.query(queryString, function(err, results) {
      //   console.log('ERR ', err);
      //   console.log('RESULTS ', results);
      //   cb(results.insertId);
      // });
      // db.Message.sync()
      //   .then(function() { 
      //     return db.Message.create({
      //       id: messageObj.id, 
      //       username: messageObj.username,
      //       text: messageObj.text,
      //       roomname: messageObj.roomname
      //     })
      //   })
      //   .then(function() {
      //     cb();
      //   });
    }
      
  },

  users: {
    get: function () {
      var queryString = 'SELECT username FROM messages';
      db.db.query(queryString, function(err, results) {
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

