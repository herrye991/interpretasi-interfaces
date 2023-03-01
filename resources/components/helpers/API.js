import axios from 'axios';
import ENV from './ENV';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const requestOptions = {
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + cookies.get('token') },
};

const API = {
    signin: async (body = {}) => {
        try {
            const response = await axios.post(ENV.apiURL('signin'), body, requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            cookies.set('token', response.data.data, { path: '/' });
            return response.data.code
        } catch (error) {
            console.error('error', error);
        }
    },
    session: async () => {
        try {
            const response = await axios.get(ENV.apiURL('user/profile'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return response.status
        } catch (error) {
            console.error('error', error);
        }
    }
}

export default API