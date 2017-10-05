// Require mysql npm
var mysql = require('mysql');

// Connect mysql
var connect;


if(process.env.JAWSDB_URL){
	//if deployed to heroku...
  connect = mysql.createConnection(process.env.JAWSDB_URL);
}else{
	//else deploy locally
  connect = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'iforgotit', 
    database : 'destinyRaidDB'
  });
}


// Export the Connection
module.exports = connect;