var express = require('express');
const { request } = require('../app');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // Log the request header x-ms-client-principal and deserialise from base64
  if (req.headers['x-ms-client-principal']) {
    const buff = Buffer.from(req.headers['x-ms-client-principal'], 'base64');
    const text = buff.toString('ascii');
    const xmscp = JSON.stringify(JSON.parse(text), null, 2)
    //pretty print the decoded string
    console.log('Request Header x-ms-client-principal:', xmscp);
  }
  res.render('index', { title: 'PURE Dashboard', pure_url: process.env.PURE_URL, xmscp: xmscp });
});

module.exports = router;
