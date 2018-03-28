
function SyncObj() {  
    this._id;
    this.typ; // 0 add; 1 update; 2 delete
    this.syc;
    this.sdb; // sync database type 
}

module.exports = {  
    SyncObj: SyncObj
}
