import React from 'react';
import ReactDOM from 'react-dom';
import ArticleShow from './includes/ArticleShow';
import ArticleIndex from './includes/ArticleIndex';
import ArticleCategory from './includes/ArticleCategory';

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

function Category() {
    return (
        <ArticleCategory />
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
if (document.getElementById('show')) {
    ReactDOM.render(<Show />, document.getElementById('show'));
}
if (document.getElementById('category')) {
    ReactDOM.render(<Category />, document.getElementById('category'));
}