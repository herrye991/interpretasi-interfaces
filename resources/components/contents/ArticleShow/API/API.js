import axios from 'axios';
import ENV from '../../../helpers/ENV';

const currentURL = window.location.pathname;
const id = currentURL.replace('/article/', '')
const requestOptions = {
    headers: { 'Accept': 'application/json' },
};

const API = {
    article: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/' + id), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    comment: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/' + id + '/comment'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    related: async (cat_id) => {
        try {
            const data = await axios.get(ENV.apiURL('article?random=2&category=' + cat_id), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    trend: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?trending=1&random=4'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    newest: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?skip=0&take=6&orderBy=latest'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    preview: async () => {
        try {
            const data = await axios.post(ENV.apiURL('article/' + id + '/view'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API