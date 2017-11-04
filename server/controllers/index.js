var models = require('../models');
var utils = require('./utils.js');

module.exports = {
  messages: { // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('controller');
      var cb = function() {
        return models.messages.get();
      };
      utils.sendResponse(res, cb);
    }, 
    post: function (req, res) {
      console.log('post messages');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('get user');
    },
    post: function (req, res) {
      console.log('post user');
    }
  }
};

