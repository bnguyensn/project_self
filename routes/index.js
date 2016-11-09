var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var method = req.method;
    var url = req.url;
    var headers = req.headers;
    var userAgent = headers['user-agent'];

    res.render('index', {
        title: 'Binh Nguyen',
        description: "Just A Reever is Binh Nguyen's personal website.",
        keywordlist: "binh, nguyen, bnguyensn, london, uk, hanoi, vietnam, creative, learning, fun"}
    );
});

module.exports = router;