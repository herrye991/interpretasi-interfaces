import ENV from '../../../helpers/ENV';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Category from '../../../helpers/Category';

const requestOptions = {
    headers: { 'Accept': 'application/json' },
};
var currentURL = window.location.pathname;
var id = currentURL.replace('/user/', '')
const queryParameters = new URLSearchParams(window.location.search)
const page = queryParameters.get("p") ? queryParameters.get("p") : '';
const arr = id.split("/")

const API = {
    article: async () => {
        try {
            const data = await axios.get(ENV.apiURL('user/' + arr[0] + '/show'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API;