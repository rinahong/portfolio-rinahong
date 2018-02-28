const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const moment = require('moment');
const knex = require('./db');
require('dotenv').config();
// const nodemailer = require('nodemailer');
const root = require('./routes');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  console.log(`📝 ${req.method} – ${req.path} – ${new Date().toString()}`);
  next();
});

app.get('/home', (req, res) => {
  let today = moment().format('MMMM Do YYYY');
  res.send(`Welcome To FlyOver, ${today}`)
});

app.use(root);

// handle errors
app.use((err, req, res, next) => {
  res.status(500).send(err);
})

const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});
