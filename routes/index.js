var express = require('express');
const { request } = require('../app');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // Log the request header x-ms-client-principal and deserialise from base64
  if (req.headers['x-ms-client-principal']) {
    const buff = Buffer.from(req.headers['x-ms-client-principal'], 'base64');
    const text = buff.toString('ascii');
    console.log('Request Header x-ms-client-principal:', text);
  }
  console.log('Request Header x-ms-client-principal:', req.headers['x-ms-client-principal']);
  // console.log('Request Headers:', req.headers);
  res.render('index', { title: 'PURE Dashboard', pure_url: process.env.PURE_URL });
});

module.exports = router;
