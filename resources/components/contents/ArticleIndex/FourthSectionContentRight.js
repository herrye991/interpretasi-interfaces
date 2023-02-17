import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Env from "../../helpers/Env";
import Moment from 'moment';
import Category from "../../helpers/Category";

export default function FourthSectionContentRight() {
    let [responseData, setResponseData] = React.useState([]);
    const requestOptions = {
        headers: { 'Accept': 'application/json' },
    };

    useEffect(() => {
        axios.get(Env.apiURL('article?orderBy=mostView&category=2&skip=4&take=5'), requestOptions).then((response) => {
            setResponseData(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
    }, []);
    return (
        <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-46834cb elementor-widget elementor-widget-benqu-post-list" data-id="46834cb" data-element_type="widget" data-widget_type="benqu-post-list.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-list-wrap list-style-1 list-style-6">
                        {/* Start Map */}
                        { responseData.map((res, index) =>
                        <div key={ index } className="pfy-post-item pfy-scale pfy-flex">
                            <div className="pfy-post-thumb pfy-img-commn-style">
                                <a className="pfy-postthumb" href={Env.baseURL('article/' + res.url)}><img width="1500" height="1000" src={ res.image } className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1500px) 100vw, 1500px" /></a>
                            </div>
                            <div className="pfy-post-content">
                                <h4 className="pfy-post-title"><a href={Env.baseURL('article/' + res.url)}>{res.title.length > 58 ? `${res.title.substring(0, 58)}...` : res.title}</a></h4>
                                <span className="pfy-post-date"><i className="fal fa-calendar-alt"></i> {Moment(res.created_at).format('d MMM, YYYY')}</span>
                            </div>
                        </div>
                        )}
                        {/* End Map */}
                   </div>
                </div>
            </div>
        </div>
    );
}