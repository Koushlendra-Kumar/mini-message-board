var express = require('express');
var router = express.Router();

let time = new Date();
let postTime = `${time.getHours()}:${time.getMinutes()}`;

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: postTime
  },
  {
    text: 'Hello World!',
    user: "Charles",
    added: postTime
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', message: messages });
});

/* form page */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New Message'});
});

/* post req handler */
router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: postTime
  });
  res.redirect('/');
});

module.exports = router;
