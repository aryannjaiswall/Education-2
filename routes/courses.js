var express = require('express');
var app = express()
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('courses', { title: 'Express' });
});

module.exports = router