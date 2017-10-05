
// Require the info from orm file
var orm = require('../config/orm.js');

// Create an object for database
var destiny = {
  // Select all table entries
 selectAll: function(cb) {
    orm.selectAll('raids', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('raids', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('raids', objColVals, c, function(res) {
      cb(res);
    });
  }
};

// Export the database functions
module.exports = destiny;