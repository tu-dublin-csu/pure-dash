var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var xmscp = null;
  // Log the request header x-ms-client-principal and deserialise from base64
  if (req.headers['x-ms-client-principal']) {
    const buff = Buffer.from(req.headers['x-ms-client-principal'], 'base64');
    const text = buff.toString('ascii');
    xmscp = JSON.stringify(JSON.parse(text), null, 2)
    //pretty print the decoded string
    console.log('Request Header x-ms-client-principal:\n\n', xmscp);
  }
  res.render('index', { title: 'PURE Dashboard', pure_url: process.env.PURE_URL, xmscp: xmscp });
});

module.exports = router;
