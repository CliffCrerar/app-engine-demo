/**
 * Router Main
 */
// @ts-nocheck
const
  express = require('express'),
  router = express.Router(),
  path = require('path'),
  fs = require('fs'),
  getContent = (file) => fs.readFileSync(path.resolve(`views/content/${ file }`),'utf8'),
  // Intro page content
  introPageContent = {
    title: 'Google Cloud Platform',
    subtitle: 'Web application demo',
    body: 'body'
  },
  // About page content: Text content pulled from .txt files using node fs
  aboutPageContent = {
    title: 'About',
    subtitle: getContent('p2.txt'),
    introParagraph: getContent('p1.txt'),
    mobileFirstImg: 'images/mobile-first-005.png',
    bullets: getContent('p3.txt').split('|'),
    author: getContent('author.txt').split('|')
  }

// Use moment
router.use('/moment', express.static(path.resolve('./node_modules/moment/min/moment.min.js')));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).render('index', introPageContent);
});

router.get('/showtime', function (req, res, next) {
  res.status(200).render('showtime');
});

router.get('/about', function (req, res, next) {
  res.status(200).render('about', aboutPageContent);
});

module.exports = router;
