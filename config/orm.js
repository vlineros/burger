// make routes for orm and export
var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: function(burgerName, cb) {
    var queryString =
      "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "');";
    console.log(queryString);
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  updateOne: function(burgerId, isDevoured, cb) {
    var queryString =
      "UPDATE burgers SET devoured = " +
      isDevoured +
      " WHERE id = " +
      burgerId +
      ";";
    console.log(queryString);
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
