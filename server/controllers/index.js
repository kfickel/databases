var models = require('../models');
var utils = require('./utils.js');

module.exports = {
  messages: { // a function which handles a get request for all messages
    get: function (req, res) {
      // console.log('controller');
      models.messages.get(function(data) {
        utils.sendResponse(res, data); // not able to send data bc async
      });
    }, 
    post: function (req, res) {
      console.log('inside controllers.messages.post');
      utils.collectData(req, function(data) {
        models.messages.post(data, function(insertId) {
          utils.sendResponse(res, {objectId: insertId}, 201);
        });
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      console.log('inside controllers.users.post');
      models.users.post(function(data) {
        utils.sendResponse(res, data, 201);
      });
    }
  }
};

