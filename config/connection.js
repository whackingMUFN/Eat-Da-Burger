// Set up MySQL connection.
const mysql = require("mysql");
const credentials = require('../config')

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: credentials.user,
  password: credentials.password,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;