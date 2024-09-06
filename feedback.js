
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const ejs = require('ejs');  

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


router.get('/creating', (req, res) => {
  const query = 'SELECT username, feedback FROM contactus WHERE userid IN (1, 2, 3, 4)';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving feedback data');
    } else {
      res.json(results); 
    }
  });
});

module.exports = router;
