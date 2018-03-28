const Access = require('../data_access/stocks_access');
const SendResponse = require('../common/response');
const syncObj = require('../common/project/sync_obj');
const SyncObj = syncObj.SyncObj;
const SyncAccess = require('../data_access/sync_access');
const Enums = require('../common/project/enum');
module.exports = {

  saveData: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.saveData({
      data: data,
      callBack: (doc) => {
        if (doc != null) { 
          module.exports.addtoSync(doc._id)
          sendResponse.sendSuccessObj(doc) }
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
  },

  addtoSync: function (id) {
    let data = new SyncObj();
    data.syc = id;
    data.typ = Enums.ActionsType.ADD;;
    data.sdb = Enums.DbType.STOCK_DB;
   // var sendResponse = new SendResponse(res);
    SyncAccess.saveData({
      data: data,
      callBack: (doc) => {
        // if (doc != null) { 
        //   sendResponse.sendSuccessObj(doc) }
        // else { sendResponse.sendSuccessEmpty()
        //  }
      },
      error: (err) => {
        //sendResponse.sendError(err);
      }
    });
  },
}