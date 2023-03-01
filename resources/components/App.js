import React from 'react';
import ReactDOM from 'react-dom';
import ArticleShow from './includes/ArticleShow';
import ArticleIndex from './includes/ArticleIndex';
import ArticleCategory from './includes/ArticleCategory';
import ArticleSearch from './includes/ArticleSearch';
import ArticleTag from './includes/ArticleTag';
import ArticleUser from './includes/ArticleUser';

if (document.getElementById('index')) {
    ReactDOM.render(<ArticleIndex />, document.getElementById('index'));
}

if (document.getElementById('show')) {
    ReactDOM.render(<ArticleShow />, document.getElementById('show'));
}

if (document.getElementById('category')) {
    ReactDOM.render(<ArticleCategory />, document.getElementById('category'));
}

if (document.getElementById('search')) {
    ReactDOM.render(<ArticleSearch />, document.getElementById('search'));
}

if (document.getElementById('tag')) {
    ReactDOM.render(<ArticleTag />, document.getElementById('tag'));
}

if (document.getElementById('user')) {
    ReactDOM.render(<ArticleUser />, document.getElementById('user'));
}