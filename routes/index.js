/**
 * Router Main
 */
// @ts-nocheck
var express = require('express');
var router = express.Router();

const introPageContent = {
  title: 'Google Cloud Platform',
  subtitle: 'Web application demo',
  body: 'body'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', introPageContent);
});

router.get('/showtime', function(req, res, next) {
  res.render('showtime');
});

module.exports = router;
