const mysql = require("mysql2");
require("dotenv").config();

let db;

if (process.env.MYSQL_URL) {
  console.log("Usando banco remoto (Railway)");

  const url = new URL(process.env.MYSQL_URL);

  db = mysql.createConnection({
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.replace("/", ""),
    port: url.port,
  });
} else {
  console.log("Usando banco local");

  db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
  });
}

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar:", err);
  } else {
    console.log("MySQL conectado");
  }
});

module.exports = db;
