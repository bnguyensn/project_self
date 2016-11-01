var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var method = req.method;
    var url = req.url;
    var headers = req.headers;
    var userAgent = headers['user-agent'];

    res.render('index', {title: 'Just A Reever'});
});

module.exports = router;