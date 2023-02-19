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
    related: async (id) => {
        try {
            const data = await axios.get(Env.apiURL('article?random=1&skip=0&take=2&category=' + id), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API