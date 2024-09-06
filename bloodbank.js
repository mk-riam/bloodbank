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
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});


router.get('/mycreate', (req, res) => {
  const query = 'SELECT bloodType, COUNT(*) as count FROM donor GROUP BY bloodType';

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving bloodbank data');
    } else {
      res.json(results); 
    }
  });
});

module.exports = router;
