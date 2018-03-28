const UserAccess = require('../data_access/user_access');

module.exports = {
    saveData: function (req, res) {
      //console.log('user_controller > saveData');
      var user = req.body;
      UserAccess.saveData(user);
      res.send('{"sMsg":"Successfully add user controller"}');
    },
    getData: function (req, res, next) {
      var user = req.body;
      var param = {};
      //console.log('user_controller > getData');
      var user = req.body;
      UserAccess.getData(user);
      //console.log('user_controller > getData :Success :: ' + JSON.stringify(userList));
    },

  }