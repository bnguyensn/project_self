import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './pages/main';

// Render the content with Router
ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById('root')
);