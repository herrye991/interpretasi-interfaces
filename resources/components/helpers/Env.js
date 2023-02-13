import React from 'react';

const Env = {
    baseURL: 
    function(path) {
        return 'https://interpretasi.id/' + path;
    },
    apiURL:
    function(path) {
        return 'https://interpretasi.id/api/v1/' + path;
    }
}

export default Env;