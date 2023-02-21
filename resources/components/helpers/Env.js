import React from 'react';

const ENV = {
    baseURL: 
    function(path = null) {
        return 'https://interpretasi.id/' + path;
    },
    apiURL:
    function(path = null) {
        return 'https://interpretasi.id/api/v1/' + path;
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
    }
}

export default ENV;