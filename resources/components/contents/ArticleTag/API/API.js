import ENV from '../../../helpers/ENV';
import axios from 'axios';

const requestOptions = {
    headers: { 'Accept': 'application/json' },
};
var currentURL = window.location.pathname;
var id = currentURL.replace('/tag/', '')

const API = {
    article: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/tag/' + id), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API;