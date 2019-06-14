var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, isDevoured, cb) {
    orm.updateOne(burgerId, isDevoured, function(res) {
      console.log(burgerId);
      cb(res);
    });
  }
};

module.exports = burger;
