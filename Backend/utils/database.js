require("dotenv").config();

const logger = require("./logger");
console.log(process.env);

const mysql = require("mysql");

let pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
});

function query(sql, params = [], callback, req = "") {
  const start = Date.now();
  const context = req ? `${req.method} ${req.originalUrl}` : "DB";
  const txt = req.method == "GET" ? "sent" : "affected";

  pool.query(sql, (error, results) => {
    if (process.env.DEBUG == 1) {
      if (error) {
        logger.error(`[DB ERROR]: ${error.message}`);
      } else {
        const count = Array.isArray(results)
          ? results.length
          : results.affectedRows;
        logger.info(
          `?? - ${count} record(s) ${txt} -> ${context} - ${
            Date.now() - start
          } ms`
        );
      }
    }

    if (callback) {
      callback(error, results);
    }
  });
}

module.exports = pool;

// Log : adatbázis muveletek, hány rekordot adott tobvább?
