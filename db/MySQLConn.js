// getting-started.js
import mysql from 'mysql'

export default function MySQLTestConn() {
// code
console.log("testing DB Connection ...!");
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "raditms",
  port:3366
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM sign", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

}