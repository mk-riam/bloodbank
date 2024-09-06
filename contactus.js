const express = require('express');
const mysql = require('mysql');
const router = express.Router();


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


router.post('/create3', (req, res) => {
  const { userid, FullName, feedback } = req.body;
  const query = 'INSERT INTO contactus ( userid, username, feedback) VALUES (?,?,?)';
  db.query(query, [userid, FullName, feedback ], (err, result) => {
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      res.json({ success: true, id: result.insertId });
    }
  });
});

module.exports = router;