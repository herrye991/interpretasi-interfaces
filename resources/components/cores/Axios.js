import React from 'react';
import axios from 'axios';

export function get(url) {
    let [responseData, setResponseData] = React.useState('')
    const requestOptions = {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
    };
    axios(url, requestOptions).then((response) => {
        setResponseData(response.data)
    }).catch((error) => {
        console.log(error)
    });

    return responseData;
}