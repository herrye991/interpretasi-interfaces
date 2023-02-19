import axios from 'axios';
import Env from '../../../helpers/Env';

const currentURL = window.location.pathname;
const id = currentURL.replace('/article/', '')
const requestOptions = {
    headers: { 'Accept': 'application/json' },
};

const API = {
    article: async () => {
        try {
            const data = await axios.get(Env.apiURL('article/' + id), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    comment: async () => {
        try {
            const data = await axios.get(Env.apiURL('article/' + id + '/comment'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    related: async (cat_id) => {
        try {
            const data = await axios.get(Env.apiURL('article?random=2&category=' + cat_id), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    trend: async () => {
        try {
            const data = await axios.get(Env.apiURL('article?trending=1&random=4'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    newest: async () => {
        try {
            const data = await axios.get(Env.apiURL('article?skip=0&take=6&orderBy=latest'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    preview: async () => {
        try {
            const data = await axios.post(Env.apiURL('article/' + id + '/preview'), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API