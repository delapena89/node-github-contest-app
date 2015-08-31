var express = require('express');
var router = express.Router();

var contestants = [];
var Submissions = function(githubName, githubURL, githubImage) {
  this.githubName = githubName;
  this.githubURL = githubURL;
  this.githubImage = githubImage;
};


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sumbit', function(req, res, next){
  var  newUser = new Submissions(req.body.name, req.body.url, req.body.image);
  contestants.push(newUser);
  console.log(contestants);
  res.redirect('/contest');
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Contest'});
});

router.get('/adduser', function(req, res, next) {
  res.render('addUser', { title: 'Add User'});

});

router.get('/contest', function (req, res, next){
  res.render('contest', {title:"GitHub Contest"});
});

module.exports = router;
