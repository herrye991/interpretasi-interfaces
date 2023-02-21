import React from 'react';
import axios from 'axios';
import ENV from './ENV';

async function CategoryAPI(id) {
    const requestOptions = {
        headers: { 'Accept': 'application/json' },
    };
    try {
        const API = await axios.get(ENV.apiURL('article?type=categories'), requestOptions)
        const response = API.data.data
        const result = response.filter(data => data.id === id)
        return result
    } catch (error) {
        console.error('error', error);
    }
}

export default CategoryAPI;