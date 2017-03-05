const express = require('express');
const router = express.Router();
const path = require('path');

// Custom server .js files
// const anagram = require('server/anagram');

/* GET home page */

router.get('*', (req, res, next) => {
    /*const method = req.method;
    const url = req.url;
    const headers = req.headers;
    const userAgent = headers['user-agent'];

    res.render('index', {
        title: 'Binh Nguyen',
        description: "Binh Nguyen's personal website",
        keywordlist: "binh, nguyen, binhnguyen, bnguyensn, london, uk, hanoi, vietnam, creative, learning, fun"
    });*/

    const options = {
        root: './dist' // Directory root of the file being served
    };
    const fileName = 'home.html';
    res.sendFile(fileName, options, (e) => {
        (e) ? next(e) : console.log(`Served ${fileName}`);
    })
});

/*

/!* GET About *!/

router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'About',
        description: "About Binh Nguyen",
        keywordlist: "binh, nguyen, about"
    });
});

/!* GET Blog *!/

router.get('/blog', function(req, res, next) {
    res.render('blog', {
        title: 'Blog',
        description: "Binh Nguyen's articles.",
        keywordlist: "binh, nguyen, blog, post, posts, article, articles, note, notes"
    });
});

/!* GET Projects *!/

router.get('/projects', function(req, res, next) {
    res.render('projects', {
        title: 'Projects',
        description: "A list of Binh Nguyen's projects",
        keywordlist: "binh, nguyen, projects"
    });
});

router.route('/projects/anagram')
    .get(function(req, res, next) {
        res.render('anagram', {
            title: 'Anagram',
            description: "A multi-word anagram solver",
            keywordlist: "binh, nguyen, anagram",
        });
    })
    .post(function(req, res, next) {
        res.send(anagram.solveAnagram(req.body.query, req.body.multi));
    });

/!* GET Contact *!/

router.get('/contact', function(req, res, next) {
    res.render('contact', {
        title: 'Contact',
        description: "Information on contacting Binh Nguyen",
        keywordlist: "binh, nguyen, contact"
    });
});
*/

module.exports = router;