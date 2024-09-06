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


router.post('/createdd', (req, res) => {
    const { userid, username, date, bloodgroup, contact, Disease, address,lastreceiveddate } = req.body;
    const query = 'INSERT INTO receiver (userid,receivername, dateofbirth, bloodtype, phonenumber, medicalcondition,address, lastreceiveddate) VALUES (?, ?, ?, ?, ?,?,?,?)';
    db.query(query, [userid,username, date, bloodgroup, contact, Disease,address,lastreceiveddate], (err, result) => {    
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      res.json({ success: true, id: result.insertId });
    }
  });
});

module.exports = router;