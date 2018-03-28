var Datastore = require('nedb');
var algorithm = 'aes256';
var key = 'password';
const db = new Datastore({
    filename: './server/database/shop.db', autoload: true
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
            queryObj = { $or: [{ "nme": param.query }, { "ads": param.query }] }
        }
        db.find(queryObj, function (err, docs) {
            if (err)
                param.error(err);
            else
                param.callBack(docs);
        });
    }

    // listData: function (params, callBack) {
    //     console.log("products_access > searchData : ")
    //     queryObj = {}
    //     if (params.query != undefined && params.query != '') {
    //         queryObj = {
    //             location:
    //             { $near :
    //                {
    //                  $geometry: { type: "Point",  coordinates: [params.location.coordinates[0], params.location.coordinates[1]]},
    //                  $maxDistance: 5000
    //                }
    //             }
    //         }
    //     }
    //     db.find(queryObj, function (err, docs) {
    //         callBack(docs);
    //     });
    // }
}