import axios from 'axios';
import ENV from '../../../helpers/ENV';

const currentURL = window.location.pathname;
const id = currentURL.replace('/article/', '')
const requestOptions = {
    headers: { 'Accept': 'application/json' },
};

const API = {
    firstTrend: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?tending=1&skip=0&take=1'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    secondTrend: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?tending=1&skip=1&take=2'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    latest: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?skip=0&take=6&orderBy=latest'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    popular: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?skip=0&take=6&trending=0'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    trending: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?skip=3&take=6&trending=1'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    firstNews: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=2&skip=0&take=1'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    secondNews: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=2&skip=1&take=3'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    etcNews: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=2&skip=4&take=5'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    firstEntertainment: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=12&skip=0&take=1'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    secondEntertainment: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=12&skip=1&take=3'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    etcEntertainment: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=12&skip=4&take=5'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
}

export default API;