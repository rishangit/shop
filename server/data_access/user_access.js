
var Datastore = require('nedb');
const db = new Datastore({ filename: './server/database/user.db', autoload: true });

module.exports = {
    saveData: function (data, callBack) {
        db.insert(data, function (err, doc) {
            if (err) { param.error(err); }
            else {param.callBack(doc);}
        });
    },
    
    getData: function (param) {
        db.findOne(param.data, function (err, doc) {
            if (err) { param.error(err); }
            else {param.callBack(doc);}
        });
    },

    listData: function (param) {
        queryObj = {}
        if (param.data.query != undefined && param.data.query != '') {
            queryObj = { $or: [{ "nme": param.data.query }, { "des": param.data.query }] }
        }
        db.find(queryObj, function (err, docs) {
            if (err)
                param.error(err);
            else
                param.callBack(doc);
        });
    }
}