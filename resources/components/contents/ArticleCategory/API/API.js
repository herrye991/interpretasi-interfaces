import ENV from '../../../helpers/ENV';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Category from '../../../helpers/Category';

const requestOptions = {
    headers: { 'Accept': 'application/json' },
};
var currentURL = window.location.pathname;
var id = currentURL.replace('/category/', '')

const API = {
    article: async () => {
        let [category, setCategory] = useState([]);
        useEffect(() => {
            Category(id).map((cat) => {
                setCategory(cat)
            })
        }, []);
        try {
            const data = await axios.get(ENV.apiURL('article?category=' + category.id), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API;