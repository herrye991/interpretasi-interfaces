import React from 'react';
import ReactDOM from 'react-dom';
import ArticleShow from './includes/ArticleShow';
import ArticleIndex from './includes/ArticleIndex';

function Index() {
    return (
        <ArticleIndex />
    );
}

function Show() {
    return (
        <ArticleShow />
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

if (document.getElementById('show')) {
    ReactDOM.render(<Show />, document.getElementById('show'));
}