const Access = require('../data_access/product_category_access');
const SendResponse = require('../common/response');

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
        if (doc != null) { sendResponse.sendSuccessObj(doc)}
        else { sendResponse.sendSuccessEmpty()  }
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
        if (docs != null) { sendResponse.sendSuccessList(docs)}
        else { sendResponse.sendSuccessEmpty()  }
      },
      error: (err) => {
        sendResponse.sendError(err);
      }
    });
  }
}