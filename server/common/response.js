const Enums = require('./project/enum');

class ResponseBase {
  constructor(res) {
    this.resObj = {};
    this.res = res;
    this.res.header("Access-Control-Allow-Origin", "*");
    this.res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }
  sendError() { }
  sendSuccessObj() { }
  sendSuccessList() { }
  sendSuccessEmpty() { }
  send(){
    this.res.send(this.resObj);
  }
}

class SendResponse extends ResponseBase {

  sendError(err) {
    this.resObj.typ = Enums.ResponseType.ERROR;
    this.resObj.obj = err;
    this.send();
  }

  sendSuccessObj(obj){
    this.resObj.typ = Enums.ResponseType.SUCCESS_OBJ;
    this.resObj.obj = obj;
    this.send();
  }

  sendSuccessList(lst){
    this.resObj.typ = Enums.ResponseType.SUCCESS_LIST;
    this.resObj.lst = lst;
    this.send();
  }

  sendSuccessEmpty(){
    this.resObj.typ = Enums.ResponseType.SUCCESS_EMPTY;
    this.send();
  }
}

module.exports = SendResponse