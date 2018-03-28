const SendResponse = require('../common/response');
 
 class BaseController{

    constructor(access){
        this.Access = access;
    }

    saveData (req, res) {    
        var data = req.body;
        var sendResponse = new SendResponse(res);
        this.Access.saveData({
          data: data,
          callBack: (doc) => {
            if (doc != null) { sendResponse.sendSuccessObj(doc) }
            else { sendResponse.sendSuccessEmpty() }
          },
          error: (err) => {
            sendResponse.sendError(err);
          }
        });
      }
    
      getData (req, res) {
        var data = req.body;
        var sendResponse = new SendResponse(res);
        this.Access.getData({
          data: data,
          callBack: (doc) => {
            if (doc != null) { sendResponse.sendSuccessObj(doc)}
            else { sendResponse.sendSuccessEmpty()  }
          },
          error: (err) => {
            sendResponse.sendError(err);
          }
        });
      }
    
      listData(req, res) {
        var data = req.body;
        var sendResponse = new SendResponse(res);
        this.Access.listData({
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

 module.exports = BaseController