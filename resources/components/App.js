import React from 'react';
import ReactDOM from 'react-dom';
import ArticleShow from './includes/ArticleShow';
import ArticleIndex from './includes/ArticleIndex';
import ArticleCategory from './includes/ArticleCategory';
import ArticleSearch from './includes/ArticleSearch';

function Index() {
    return (
        <ArticleIndex />
    );
}
if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

function Show() {
    return (
        <ArticleShow />
    );
}
if (document.getElementById('show')) {
    ReactDOM.render(<Show />, document.getElementById('show'));
}

function Category() {
    return (
        <ArticleCategory />
    );
}
if (document.getElementById('category')) {
    ReactDOM.render(<Category />, document.getElementById('category'));
}

function Search() {
    return (
        <ArticleSearch />
    );
}
if (document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'));
}