const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const method = req.method;
    const url = req.url;
    const headers = req.headers;
    const userAgent = headers['user-agent'];

    res.render('index', {
        title: 'Binh Nguyen',
        description: "Just A Reever is Binh Nguyen's personal website.",
        keywordlist: "binh, nguyen, bnguyensn, london, uk, hanoi, vietnam, creative, learning, fun"}
    );
});

module.exports = router;