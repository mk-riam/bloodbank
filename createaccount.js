const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mine123',
  database: 'vitalveins'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});


router.post('/created', (req, res) => {
  const { FullName, email, password } = req.body;
  const query = 'INSERT INTO createaccount (username, password, email) VALUES (?, ?, ?)';
  db.query(query, [FullName, password, email], (err, result) => {
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      res.json({ success: true, id: result.insertId });
    }
  });
});

module.exports = router;
