var Datastore = require('nedb');
const db = new Datastore({
    filename: './server/database/setting.db', autoload: true
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

    updateData: function (param) {
        console.log("update settings");
        db.update({ _id: param.data._id },{$set:param.data},{}, function (err, doc) {
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

    removeData: function (param) {
        db.remove(param.data, function (err, doc) {
            if (err)
                param.error(err);
            else
                param.callBack(doc);
        });
    }
}