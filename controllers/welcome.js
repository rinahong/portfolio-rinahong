const express = require('express');
const router = express.Router();

const welcomeController = {
  home (req, res, next) {
    res.render('welcome/home');
  }
}

module.exports = welcomeController;
