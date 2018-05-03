var Datastore = require('nedb');
var algorithm = 'aes256';
var key = 'password';
const db = new Datastore({
    filename: './server/database/products.db', autoload: true
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

    getData: function (param) {
        db.findOne(param.data, function (err, doc) {
            if (err)
                param.error(err);
            else
                param.callBack(doc);
        });
    },

    listData: function (param) {
        queryObj = {}
        if (param.data.query != undefined && param.data.query != '') {
            queryObj = { $or: [{ "cod": param.data.query }, { "mfd": param.data.query }] }
        }
        console.log(queryObj);
        db.find(queryObj, function (err, docs) {
            if (err)
                param.error(err);
            else
                {param.callBack(docs);}

        });
    },

    removeData: function (param) {
        db.remove(param.data, function (err, doc) {
            if (err)
                param.error(err);
            else
                param.callBack(doc);
        });
    }
}