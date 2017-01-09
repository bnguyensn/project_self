const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', function (req, res, next) {
    const method = req.method;
    const url = req.url;
    const headers = req.headers;
    const userAgent = headers['user-agent'];

    res.render('index', {
        title: 'Binh Nguyen',
        description: "Binh Nguyen's personal website",
        keywordlist: "binh, nguyen, binhnguyen, bnguyensn, london, uk, hanoi, vietnam, creative, learning, fun"
    });
});

/* GET something else */

router.get('/projects', function(req, res, next) {
    res.render('projects', {
        title: 'Projects',
        description: "A list of Binh Nguyen's projects",
        keywordlist: "binh, nguyen, projects"
    });
});

module.exports = router;