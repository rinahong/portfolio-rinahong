const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const contactController = {
  submit (req, res, next) {
    let mailOpts, smtpTrans;
    let textMessage = req.body.name + '\n' + req.body.email + '\n'
                      + req.body.phone + '\n'  + req.body.message;

    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PWD
      }
    });

    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: process.env.GMAIL_USER,
      subject: 'New message from contact form at rinahong.com',
      text: textMessage
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        // res.locals.flashType = "danger"
        // res.locals.messages = "Error, Email Not Sent...";
        // res.redirect('/');
        res.render('contact/contact-fail.ejs')
      }
      else {
        // res.locals.flashType= "success";
        // res.locals.messages = "Email has successfully sent!";
        // res.redirect('/');
        // res.render('welcome/home');
        res.render('contact/contact-success.ejs')
      }
    });
  }
};

module.exports = contactController;
