import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Env from "../helpers/Env";
import Moment from 'moment';
import Category from "../helpers/Category";

export default function FourthSectionContentLeft() {
    let [firstData, setFirstData] = React.useState([])
    let [firstDataUser, setFirstDataUser] = React.useState([])
    let [secondData, setSecondData] = React.useState([])
    const requestOptions = {
        headers: { 'Accept': 'application/json' },
    };
    useEffect(() => {
        axios.get(Env.apiURL('article?orderBy=mostView&category=2&skip=0&take=1'), requestOptions).then((response) => {
            setFirstData(response.data.data[0])
            setFirstDataUser(response.data.data[0].user)
        }).catch((error) => {
            console.log(error)
        });
        axios.get(Env.apiURL('article?orderBy=mostView&category=2&skip=0&take=3'), requestOptions).then((response) => {
            setSecondData(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
    }, []);
    return (
        <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-5d3934d elementor-widget elementor-widget-benqu-post-overlay-v3" data-id="5d3934d" data-element_type="widget" data-widget_type="benqu-post-overlay-v3.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-grid-wrap pfy-overlay-style-10">
                        <div className="pfy-post-item pfy-scale">
                            <div className="pfy-post-thumb pfy-img-commn-style"> <a title={firstData.title} href={Env.baseURL('article/' + firstData.url)}><img width="1500" height="1001" src={firstData.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1500px) 100vw, 1500px" /></a> </div>
                            <div className="pfy-post-content">
                                <h2 className="pfy-post-title"><a href={Env.baseURL('article/' + firstData.url)}>{firstData.title}</a></h2>
                                <ul className="pfy-post-gd-meta">
                                    <li>OLEH <a href={Env.baseURL('user' + firstDataUser.id)} title={"Posts by " + firstDataUser.name} rel="author">{firstDataUser.name}</a></li>
                                    <li><i className="fal fa-calendar-alt"></i> {Moment(firstData.created_at).format('d MMM, YYYY')}</li>
                                    <li><i className="far fa-comments"></i> {firstData.comments_count} Komentar </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-e26b5fe elementor-widget elementor-widget-benqu-post-grid" data-id="e26b5fe" data-element_type="widget" data-widget_type="benqu-post-grid.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-grid-wrap grid-style-4">
                        <div className="row">
                            {/* Start Map */}
                            {secondData.map((res, index) =>
                                <div key={index} className="col-lg-4 col-xl-4 col-md-6">
                                    <div className="pfy-post-item pfy-scale">
                                        <div className="pfy-post-thumb pfy-img-commn-style">
                                            <a className="post-thumb" href={Env.baseURL('article/' + res.url)}><img width="1500" height="1125" src={res.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1500px) 100vw, 1500px" /></a>
                                        </div>
                                        <div className="pfy-post-content">
                                            <h4 className="pfy-post-title"><a href={Env.baseURL('article/' + res.url)} title={ res.title }>{res.title.length > 58 ? `${res.title.substring(0, 58)}...` : res.title}</a></h4>
                                            <ul className="pfy-post-gd-meta">
                                                <li><i className="fal fa-calendar-alt"></i> {Moment(res.created_at).format('d MMM, YYYY')} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* End Map */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}