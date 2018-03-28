const Access = require('../data_access/products_access');
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

  listData: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.listData({
      data: data,
      callBack: (docs) => {
        if (docs != null) { 
          console.log(docs)   
          sendResponse.sendSuccessList(docs) }
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
