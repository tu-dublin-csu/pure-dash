var express = require('express');
const { request } = require('../app');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // Log the request headers
  console.log('Request Headers:', req.headers);
  res.render('index', { title: 'PURE Dashboard', pure_url: process.env.PURE_URL });
});

module.exports = router;
