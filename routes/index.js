/**
 * Router Main
 */
// @ts-nocheck
const
  express = require('express'),
  router = express.Router(),
  path = require('path'),
  introPageContent = {
    title: 'Google Cloud Platform',
    subtitle: 'Web application demo',
    body: 'body'
  };

// Use moment
router.use('/moment', express.static(path.resolve('./node_modules/moment/min/moment.min.js')));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', introPageContent);
});

router.get('/showtime', function (req, res, next) {
  res.render('showtime');
});

module.exports = router;
