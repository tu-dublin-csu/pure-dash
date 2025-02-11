var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var xmscp = null;
  var issuer = null;
  var user_fullname = null;
  // deserialise from base64 and log the request header x-ms-client-principal to the console
  if (req.headers['x-ms-client-principal']) {
    const buff = Buffer.from(req.headers['x-ms-client-principal'], 'base64');
    const text = buff.toString('ascii');
    xmscp = JSON.parse(text);
    //pretty print the decoded string
    console.log('Request Header x-ms-client-principal:\n\n', JSON.stringify(xmscp, null, 2));
    user_fullname = xmscp.claims.find(claim => claim.typ === 'name').val
  }
  res.render('index', { title: 'PURE Dashboard', pure_url: process.env.PURE_URL, user_fullname: user_fullname });
});

module.exports = router;
