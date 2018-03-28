var Datastore = require('nedb');
var algorithm = 'aes256';
var key = 'password';
const db = new Datastore({
    filename: './server/database/sync.db', autoload: true
});




module.exports = {
    saveData: function (param) {
        db.insert(param.data, function (err, doc) {
            if (err)
                param.error(err);
            else
                param.callBack(doc);
        });
    },

    listData: function (param) {
        queryObj = {}
        if (param.data.query != undefined && param.data.query != '') {
            //queryObj = { $or: [{ "cod": param.query }, { "mfd": param.query }] }
        }
        db.find(queryObj, function (err, docs) {
            if (err)
                param.error(err);
            else
                param.callBack(docs);
        });
    }
}