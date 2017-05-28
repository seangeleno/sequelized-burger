// Import MySQL connection.
var connection = require("../config/connection.js");

//==========================================================================================================================
// Object Relational Mapper (ORM)

var orm = {
    getUndevouredBurgers: function(cb) {
        var queryString = "SELECT * FROM burgers where devoured=false order by id desc";
        connection.query(queryString, [], function(err, result) {
            //console.log('orm.getUndevouredBurgers\n' + JSON.stringify(result));
            cb(result);
        });
    },
    getDevouredBurgers: function(cb) {
        var queryString = "SELECT * FROM burgers where devoured=true";
        connection.query(queryString, [], function(err, result) {
            //console.log(result);
            cb(result);
        });
    },
    addNewBurger: function(burgerName,cb) {
        var queryString = "Insert into burgers (burger_name,devoured) values('" + burgerName + "',false)";
        connection.query(queryString, [], function(err, result) {
            //console.log(result);
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    devourBurger: function(burgerId,cb) {
        var queryString = "update burgers set devoured=true where id = " + burgerId;
        connection.query(queryString, function(err, result) {
            //console.log(result);
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteBurger: function(burgerId,cb) {
        var queryString = "delete from burgers where id = " + burgerId;
        //console.log(queryString);
        connection.query(queryString, function(err,result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};
module.exports = orm;

// selectWhere: function(tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//         console.log(result);
//     });
// },
// selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
//     var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
//     console.log(queryString);
//     connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
//         console.log(result);
//     });
// },
// findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//     var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
//     connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
//         console.log(result);
//     });
// }
