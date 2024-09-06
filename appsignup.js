
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


const signupRouter = require('./signup.js'); 
app.use('/loginform', signupRouter);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke! ${err.message}`); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
