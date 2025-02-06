var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PURE Dashboard', foobar: process.env.FOOBAR });
});

module.exports = router;
