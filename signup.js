
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

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


router.post('/create6', (req, res) => {
    const { email, password } = req.body;
    const query = 'INSERT INTO login (email, password) VALUES (?, ?)';
    db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.json({ success: false, message: 'Failed to sign up' });
    } else {
      res.json({ success: true, message: 'Signed up successfully' });
    }
  });
});

module.exports = router;
