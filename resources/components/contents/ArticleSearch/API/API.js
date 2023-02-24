import ENV from '../../../helpers/ENV';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Category from '../../../helpers/Category';

const requestOptions = {
    headers: { 'Accept': 'application/json' },
};
const queryParameters = new URLSearchParams(window.location.search)
const query = queryParameters.get("q") ? queryParameters.get("q") : '';
const page = queryParameters.get("p") ? queryParameters.get("p") : '';

const API = {
    article: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?find=' + query + "&page=" + page), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API;