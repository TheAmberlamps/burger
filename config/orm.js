var connection = require("./connection.js");

var orm = {
    selectAll: function(table)  {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], 
            function(err, result)  {
              if (err) throw err;
              console.log(result);
        });
    },
    insertOne: function(table, newBurg)  {
        var queryString = "INSERT INTO ?? VALUES ??";
        connection.query(queryString, [table, newBurg],
            function(err, result)  {
              if (err) throw err;
              console.log(result);
        });
    },
    updateOne: function(whatBurg, table) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatBurg, table],
            function(err, result)   {
              if (err) throw err;
              console.log(result);
        });
    }
};

module.exports(orm);