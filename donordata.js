

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


router.post('/createdone', (req, res) => {
    const { userid, name, email, blood_group, phone , address, last_donation_date , medical_background ,date_of_birth} = req.body;
    const query = 'INSERT INTO donor (userid, donorName,email, bloodType ,phoneNumber, address,lastDonationDate ,  medicalBackground, DateOfBirth) VALUES (?, ?,?, ?,?,?,?,?,?)';
    db.query(query, [ userid, name, email, blood_group, phone , address, last_donation_date , medical_background , date_of_birth], (err, result) => {    
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      res.json({ success: true, id: result.insertId });
    }
  });
});

module.exports = router;
