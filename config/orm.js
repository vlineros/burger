// make routes for orm and export
var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: function(burgerName, cb) {
    connection.query(
      "INSERT INTO burgers (burger_name) VALUES(" + burgerName + ")",
      function(err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  },
  updateOne: function(burgerId, isDevoured, cb) {
    connection.query(
      "UPDATE burgers SET devoured = " + isDevoured + "WHERE id = " + burgerId,
      function(err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  }
};

module.exports = orm;
