const express = require("express");
const router = express.Router();
const pool = require("../utils/database");

// Select ALL records from db
router.get("/:table", (req, res) => {
  const table = req.params.table;
  pool.query(`SELECT * from ${table};`, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(200).send(results);
  });
});

// Select ONE record from db by ID
router.get("/:table/:id", (req, res) => {
  const table = req.params.table;
  const id = req.params.id;
  pool.query(`SELECT * from ${table} WHERE id=?`, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(200).send(results);
  });
});

// Delete ONE record from db by ID
router.get("/:table/:id", (req, res) => {
  const table = req.params.table;
  const id = req.params.id;
  pool.query(`DELETE from ${table} WHERE id=?`, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(200).send(results);
  });
});

module.exports = router;
