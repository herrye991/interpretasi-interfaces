import React from 'react';

const ENV = {
    appName: 
    function() {
        return 'Interpretasi ID';
    },
    baseURL: 
    function(path = null) {
        return 'https://interpretasi.id/' + path;
    },
    apiURL:
    function(path = null) {
        return 'https://interpretasi.id/api/v1/' + path;
    },
    currentURL:
    function(path = null) {
        return location.protocol + '//' + location.host + location.pathname;
    },
    articleURL:
    function(path = null) {
        return 'https://interpretasi.id/article/' + path;
    },
    categoryURL:
    function(path = null) {
        return 'https://interpretasi.id/category/' + path;
    },
    tagURL:
    function(path = null) {
        return 'https://interpretasi.id/tag/' + path;
    },
    userURL:
    function(path = null) {
        return 'https://interpretasi.id/user/' + path;
    }
}

export default ENV;