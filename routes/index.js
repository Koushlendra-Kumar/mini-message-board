var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: "Charles",
    added: new Date()
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
  messages.push(req.body);
  console.log(messages);
  res.redirect('/');
});

module.exports = router;
