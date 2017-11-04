var models = require('../models');
var utils = require('./utils.js');

module.exports = {
  messages: { // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('controller');
      var cb = function() {
        return models.messages.get();
      };
      utils.sendResponse(res, cb); // not able to send data bc async
    }, 
    post: function (req, res) {
      utils.collectData(req, models.messages.post);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
    }
  }
};

