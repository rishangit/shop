const Access = require('../data_access/sync_access');
const SendResponse = require('../common/response');
const ShopInfoAccess = require('../data_access/shop_info_access');
const StockAccess = require('../data_access/stocks_access');
const Enums = require('../common/project/enum');

module.exports = {

  saveData: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.saveData({
      data: data,
      callBack: (doc) => {
        if (doc != null) { 
          sendResponse.sendSuccessObj(doc) }
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
        if (docs != null) { sendResponse.sendSuccessList(docs)}
        else { sendResponse.sendSuccessEmpty()  }
      },
      error: (err) => {
        sendResponse.sendError(err);
      }
    });
  },


  syncData: function (req, res) {
    console.log('list sync Item')
    var data = req.body;
    Access.listData(data, function (pDocs) {
      if (pDocs.length > 0) {
        for (var i = 0; i < pDocs.length; ++i) {
          switch (pDocs[i].sdb) {
            case Enums.DbType.SHOP_DB:
              ShopInfoAccess.getData({ _id: pDocs[i].syc }, (shopInfo) => {
                console.log(shopInfo)
              })
              break;
              case Enums.DbType.STOCK_DB:
              StockAccess.getData({ _id: pDocs[i].syc }, (stockItem) => {
                console.log(stockItem)
              })
              break;
          }
        }
        //Response.sendTrueWithObj(res, pDocs)
      } else {
        Response.sendFalse(res)
      }
    });
  }
}