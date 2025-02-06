var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PURE Dashboard', pure_url: process.env.PURE_URL });
});

module.exports = router;
