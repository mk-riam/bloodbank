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

router.post('/create5', (req, res) => {
  const userId = req.body.userid;
  const userName = req.body.name;
  const bloodGroup = req.body.blood_group;
  const userType = req.body.usertype;

  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7); 

  const randomDate = new Date(today.getTime() + Math.random() * (nextWeek.getTime() - today.getTime()));


  const appointmentDate = randomDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
  const appointmentTime = randomDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });


  const sql = 'INSERT INTO appointment (hospitalid, userid, username, bloodtype, usertype, appointmentdate, appointmenttime) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const hospitalId = 1005; 

  db.query(sql, [hospitalId, userId, userName, bloodGroup, userType, appointmentDate, appointmentTime], (err, result) => {
    if (err) {
      console.error('Error inserting appointment:', err);
      res.status(500).send('Error creating appointment');
    } else {
      res.send(`Appointment scheduled successfully for ${userName} on ${appointmentDate} at ${appointmentTime}`);
    }
  });
});

module.exports = router;
