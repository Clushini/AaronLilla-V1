const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aaronjlilla@gmail.com',
      pass: ''
    },
    tls:{
        rejectUnauthorized: false
    }
  });

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/contact', function (req, res) {
  res.send("hello");
});

app.post('/contactme', function(req, res) {
    //console.log(req.body);
    var mailOptions = {
        from: 'aaronjlilla@gmail.com',
        to: 'aaronjlilla@gmail.com',
        subject: 'Website Submission',
        text: 'Firstname: ' + req.body.firstName + '      Last Name: ' + req.body.lastName + '      E-Mail: ' + req.body.email + '      Phone: ' + req.body.phone + '      Company: ' + req.body.company + '      Description: ' + req.body.descript 
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});