import ENV from '../../../helpers/ENV';
import axios from 'axios';

const requestOptions = {
    headers: { 'Accept': 'application/json' },
};
var currentURL = window.location.pathname;
var id = currentURL.replace('/user/', '')
const queryParameters = new URLSearchParams(window.location.search)
const page = queryParameters.get("p") ? queryParameters.get("p") : '';
const arr = id.split("/")

const API = {
    user: async () => {
        try {
            const data = await axios.get(ENV.apiURL('user/' + arr[0]), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    },
    article: async () => {
        try {
            const data = await axios.get(ENV.apiURL('user/' + arr[0] + '?show=articles&page=' + page), requestOptions)
            return data
        } catch (error) {
            console.error('error',error);
        }
    }
}

export default API;