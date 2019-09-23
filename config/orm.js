var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString =
      "INSERT INTO " + table + "(" + cols + ")" + " VALUES ('" + vals + "',0);";
    console.log("querystring: " + queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  // This is where the devour button seems to be breaking, get down to brass tacks and get this shit working
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
