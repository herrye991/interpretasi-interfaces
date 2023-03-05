import axios from 'axios';
import ENV from './ENV';
import Cookies from 'universal-cookie';
import React from 'react';
import Category from './Category';

const cookies = new Cookies();
const requestOptions = {
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + cookies.get('token') },
};
const path = window.location.pathname;
const articleId = path.replace('/article/', '')
const categoryId = path.replace('/category/', '')
const tagId = path.replace('/tag/', '')
const userId = path.replace('/user/', '')
const userArr = userId.split("/")
const queryParameters = new URLSearchParams(window.location.search)
const query = queryParameters.get("q") ? queryParameters.get("q") : '';
const page = queryParameters.get("p") ? queryParameters.get("p") : '';

const API = {
    // Auth
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
    currentUser: async () => {
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
            return response
        } catch (error) {
            console.error('error', error);
        }
    },
    // Core
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
    },
    // Article Show
    articleShow: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/' + articleId), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    comment: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/' + articleId + '/comment'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    related: async (cat_id) => {
        try {
            const data = await axios.get(ENV.apiURL('article?random=2&category=' + cat_id), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    trend: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?trending=1&random=4'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    newest: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?skip=0&take=6&orderBy=latest'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    preview: async () => {
        try {
            const data = await axios.post(ENV.apiURL('article/' + articleId + '/view'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    commentPost: async (body) => {
        try {
            const data = await axios.post(ENV.apiURL('article/' + articleId + '/comment'), body, requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    commentDelete: async (commentId) => {
        try {
            const data = await axios.delete(ENV.apiURL('article/' + articleId + '/comment/' + commentId), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    commentReport: async (commentId, body) => {
        try {
            const data = await axios.post(ENV.apiURL('article/' + articleId + '/comment/' + commentId + '/report'), body, requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    // Search
    articleSearch: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?find=' + query + "&page=" + page), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    // Category
    articleCategory: async () => {
        let [category, setCategory] = React.useState([]);
        React.useEffect(() => {
            Category(categoryId).map((cat) => {
                setCategory(cat)
            })
        }, []);
        try {
            const data = await axios.get(ENV.apiURL('article?category=' + category.id + '&page=' + page), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    // Tag
    articleTag: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/tag/' + tagId + '?page=' + page), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    // User
    user: async () => {
        try {
            const data = await axios.get(ENV.apiURL('user/' + userArr[0]), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    articleUser: async () => {
        try {
            const data = await axios.get(ENV.apiURL('user/' + userArr[0] + '?show=articles&page=' + page), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    // Article Index
    firstTrendIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?tending=1&skip=0&take=1'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    secondTrendIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?tending=1&skip=1&take=2'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    latestIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?skip=0&take=6&orderBy=latest'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    popularIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?skip=0&take=6&trending=0'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    trendingIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article/?skip=3&take=6&trending=1'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    firstNewsIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=2&skip=0&take=1'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    secondNewsIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=2&skip=1&take=3'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    etcNewsIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=2&skip=4&take=5'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    firstEntertainmentIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=12&skip=0&take=1'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    secondEntertainmentIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=12&skip=1&take=3'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
    etcEntertainmentIndex: async () => {
        try {
            const data = await axios.get(ENV.apiURL('article?orderBy=mostView&category=12&skip=4&take=5'), requestOptions).catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            return data
        } catch (error) {
            console.error('error', error);
        }
    },
}

export default API