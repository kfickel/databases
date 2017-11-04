// controllers
var models = require('../models');
var utils = require('./utils.js');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        utils.sendResponse(res, data);
      });
    }, 
    post: function (req, res) {
      utils.collectData(req, function(data) {
        models.messages.post(data, function(insertId) {
          utils.sendResponse(res, {objectId: insertId}, 201);
        });
      });
    }
  },

  users: {
    get: function (req, res) {
    },
    post: function (req, res) {
      models.users.post(function(data) {
        utils.sendResponse(res, data, 201);
      });
    }
  }
};

