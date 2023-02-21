import React from 'react';
import ReactDOM from 'react-dom';
import ArticleShow from './includes/ArticleShow';
import ArticleIndex from './includes/ArticleIndex';
import CategoryAPI from './helpers/CategoryAPI';
import { useEffect } from 'react';

function Index() {
    useEffect(() => {
        console.log(CategoryAPI(1)).name;
    }, []);
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