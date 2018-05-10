const Access = require('../data_access/setting_access');
const SendResponse = require('../common/response');
const BaseController = require('./base_controller');

module.exports = {

  saveData: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.saveData({
      data: data,
      callBack: (doc) => {
        if (doc != null) { sendResponse.sendSuccessObj(doc) }
        else { sendResponse.sendSuccessEmpty() }
      },
      error: (err) => {
        sendResponse.sendError(err);
      }
    });
  },

  updateData: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.updateData({
      data: data,
      callBack: (doc) => {
        if (doc != null) { sendResponse.sendSuccessObj(doc) }
        else { sendResponse.sendSuccessEmpty() }
      },
      error: (err) => {
        sendResponse.sendError(err);
      }
    });
  },

  getData: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.getData({
      data: data,
      callBack: (doc) => {
        if (doc != null) { sendResponse.sendSuccessObj(doc) }
        else { sendResponse.sendSuccessEmpty() }
      },
      error: (err) => {
        sendResponse.sendError(err);
      }
    });
  },

  removeData: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.removeData({
      data: data,
      callBack: (doc) => {
        if (doc != null && doc > 0) { sendResponse.sendSuccessObj(data) }
        else { sendResponse.sendSuccessEmpty() }
      },
      error: (err) => {
        sendResponse.sendError(err);
      }
    });
  }
}
