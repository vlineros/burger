var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(cb) {
    orm.updateOne(burgerId, isDevoured, function(res) {
      console.log(burgerId);
      cb(res);
    });
  }
};

module.exports = burger;
