import ENV from '../../../helpers/ENV';
import axios from 'axios';

const requestOptions = {
    headers: { 'Accept': 'application/json' },
};
var currentURL = window.location.pathname;
var id = currentURL.replace('/tag/', '')
const queryParameters = new URLSearchParams(window.location.search)
const page = queryParameters.get("p") ? queryParameters.get("p") : '';

const API = {
    article: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/tag/' + id + '?page=' + page), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API;