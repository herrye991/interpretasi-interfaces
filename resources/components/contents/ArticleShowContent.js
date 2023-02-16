import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Env from "../helpers/Env";
import Moment from 'moment';
import Category from "../helpers/Category";

export default function ArticleShowContent() {
    let [responseData, setResponseData] = React.useState([]);
    const requestOptions = {
        headers: { 'Accept': 'application/json' },
    };

    useEffect(() => {
        axios.get(Env.apiURL('article/cek-ombak--kapten-63e759a19a754'), requestOptions).then((response) => {
            setResponseData(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
    }, []);
    return (
        ''
    );
}