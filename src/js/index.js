import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';
import Header from './header';
import Footer from './footer';
import '../css/main.css';

// Render the header
ReactDOM.render(
    <Header />,
    document.getElementById('root-header')
);

// Render the content
ReactDOM.render(
    <Content />,
    document.getElementById('root-content')
);

// Render the footer
// TODO