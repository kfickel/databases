// controllers
// var models = require('../models');
var utils = require('./utils.js');

module.exports = {
  messages: {
    get: function (req, res) {
      // models.messages.get(function(data) {
      //   utils.sendResponse(res, data);
      // });
    }, 
    post: function (req, res) {
      console.log('REQUEST ', req.url);
      // utils.collectData(req, function(data) {
      //   // models.messages.post(data, function(id) {
      //   //   utils.sendResponse(res, {objectId: id}, 201);
      //   // });
      //   console.log('inside collecdata callback');
      // });
    },
    options: function(req, res) {
      utils.sendResponse(res, '');
    }
  },

  users: {
    get: function (req, res) {
    },
    post: function (req, res) {
      // models.users.post(function(data) {
      //   utils.sendResponse(res, data, 201);
      // });
    }
  }
};

