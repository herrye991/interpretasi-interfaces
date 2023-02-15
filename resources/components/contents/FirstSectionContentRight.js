import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Env from "../helpers/Env";
import Moment from 'moment';
import Category from "../helpers/Category";

export default function FirstSectionContentRight() {

    let [latestData, setLatestData] = React.useState([]);
    let [popularData, setPopularData] = React.useState([]);
    let [trendingData, setTrendingData] = React.useState([])
    const requestOptions = {
        headers: { 'Accept': 'application/json' },
    };

    useEffect(() => {
        axios.get(Env.apiURL('article/?skip=0&take=6&orderBy=latest'), requestOptions).then((response) => {
            setLatestData(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
        axios.get(Env.apiURL('article/?skip=0&take=6&trending=0'), requestOptions).then((response) => {
            setPopularData(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
        axios.get(Env.apiURL('article/?skip=3&take=6&trending=1'), requestOptions).then((response) => {
            setTrendingData(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    return (
        <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-79fbbd6 elementor-widget elementor-widget-benqu-post-tabs-list" data-id="79fbbd6" data-element_type="widget" data-widget_type="benqu-post-tabs-list.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-tab-list">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ justifyContent: "center" }}>
                            <li className="nav-item" role="presentation"> <button className="nav-link active elementor-repeater-item-e0e8d79" id="pfy-post-item-tb-1" data-bs-toggle="pill" data-bs-target="#pfy-post-item-lp-1" type="button" role="tab" aria-controls="pfy-post-item-lp-1" aria-selected="true">Baru</button> </li>
                            <li className="nav-item" role="presentation"> <button className="nav-link elementor-repeater-item-b38a744" id="pfy-post-item-tb-2" data-bs-toggle="pill" data-bs-target="#pfy-post-item-lp-2" type="button" role="tab" aria-controls="pfy-post-item-lp-2" aria-selected="true">Populer</button> </li>
                            <li className="nav-item" role="presentation"> <button className="nav-link elementor-repeater-item-94e3a18" id="pfy-post-item-tb-3" data-bs-toggle="pill" data-bs-target="#pfy-post-item-lp-3" type="button" role="tab" aria-controls="pfy-post-item-lp-3" aria-selected="true">Tren</button> </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane animated fadeInUp show active" id="pfy-post-item-lp-1" role="tabpanel" aria-labelledby="pfy-post-item-tb-1">
                                <div className="pfy-post-grid-wrap grid-style-tb">
                                    {/* Start Map */}
                                    {latestData.map((res, index) =>
                                        <div key={index} className="pfy-post-item pfy-scale pfy-img-commn-style">
                                            <div className="pfy-post-thumb"> <a href={Env.baseURL('article/' + res.url)}><img width="2500" height="1593" src={res.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" /></a> </div>
                                            <div className="pfy-post-content">
                                                <div className="pfy-post-meta-tb d-flex"> {Category(res.category_id).map((cat, index) => <a key={index} className="benqu-cate-name" href={Env.baseURL('category/' + cat.id)} style={cat.color}> <span>{cat.name}</span> </a>)} <span className="pfy-post-date"><i className="fal fa-calendar-alt"></i> {Moment(res.created_at).format('d MMM, YYYY')}</span> </div>
                                                <h4 className="pfy-post-title"><a href={Env.baseURL('article/' + res.url)}>{res.title.length > 58 ? `${res.title.substring(0, 58)}...` : res.title}</a></h4>
                                            </div>
                                        </div>
                                    )}
                                    {/* End map */}
                                </div>
                            </div>
                            <div className="tab-pane animated fadeInUp" id="pfy-post-item-lp-2" role="tabpanel" aria-labelledby="pfy-post-item-tb-2">
                                <div className="pfy-post-grid-wrap grid-style-tb">
                                    {/* Start Map */}
                                    {popularData.map((res, index) =>
                                        <div key={index} className="pfy-post-item pfy-scale pfy-img-commn-style">
                                            <div className="pfy-post-thumb"> <a href={Env.baseURL('article/' + res.url)}><img width="2500" height="1593" src={res.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" /></a> </div>
                                            <div className="pfy-post-content">
                                                <div className="pfy-post-meta-tb d-flex"> {Category(res.category_id).map((cat, index) => <a key={index} className="benqu-cate-name" href={Env.baseURL('category/' + cat.id)} style={cat.color}> <span>{cat.name}</span> </a>)} <span className="pfy-post-date"><i className="fal fa-calendar-alt"></i> {Moment(res.created_at).format('d MMM, YYYY')}</span> </div>
                                                <h4 className="pfy-post-title"><a href={Env.baseURL('article/' + res.url)}>{res.title.length > 58 ? `${res.title.substring(0, 58)}...` : res.title}</a></h4>
                                            </div>
                                        </div>
                                    )}
                                    {/* End Map */}
                                </div>
                            </div>
                            <div className="tab-pane animated fadeInUp " id="pfy-post-item-lp-3" role="tabpanel" aria-labelledby="pfy-post-item-tb-3">
                                <div className="pfy-post-grid-wrap grid-style-tb">
                                    {/* Start Map */}
                                    {trendingData.map((res, index) =>
                                        <div key={index} className="pfy-post-item pfy-scale pfy-img-commn-style">
                                            <div className="pfy-post-thumb"> <a href={Env.baseURL('article/' + res.url)}><img width="2500" height="1593" src={res.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" /></a> </div>
                                            <div className="pfy-post-content">
                                                <div className="pfy-post-meta-tb d-flex"> {Category(res.category_id).map((cat, index) => <a key={index} className="benqu-cate-name" href={Env.baseURL('category/' + cat.id)} style={cat.color}> <span>{cat.name}</span> </a>)} <span className="pfy-post-date"><i className="fal fa-calendar-alt"></i> {Moment(res.created_at).format('d MMM, YYYY')}</span> </div>
                                                <h4 className="pfy-post-title"><a href={Env.baseURL('article/' + res.url)}>{res.title.length > 58 ? `${res.title.substring(0, 58)}...` : res.title}</a></h4>
                                            </div>
                                        </div>
                                    )}
                                    {/* End Map */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-227ee9d elementor-widget elementor-widget-benqu-section-title" data-id="227ee9d" data-element_type="widget" data-widget_type="benqu-section-title.default">
                <div className="elementor-widget-container">
                    <div className="benqu-section-title-wrap text-left">
                        <h2>Ikuti Kami</h2>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-a2d460d elementor-widget elementor-widget-benqu-social-counter" data-id="a2d460d" data-element_type="widget" data-widget_type="benqu-social-counter.default">
                <div className="elementor-widget-container">
                    <div className="social-counter-wrap style-1">
                        <div className="pfy-social-counter">
                            <div className="pfy-social-counter-item elementor-repeater-item-3f426f9">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    <span className="flower-count">30 k+</span>
                                    <span className="flower">Like</span>
                                </a>
                            </div>
                            <div className="pfy-social-counter-item elementor-repeater-item-6e925bd">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-youtube"></i>
                                    <span className="flower-count">25 k+</span>
                                    <span className="flower">Subscrib</span>
                                </a>
                            </div>
                            <div className="pfy-social-counter-item elementor-repeater-item-f022cf1">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-twitter"></i>
                                    <span className="flower-count">25 k+</span>
                                    <span className="flower">Followers</span>
                                </a>
                            </div>
                            <div className="pfy-social-counter-item elementor-repeater-item-a057005">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                                    <span className="flower-count">25 k+</span>
                                    <span className="flower">Followers</span>
                                </a>
                            </div>
                            <div className="pfy-social-counter-item elementor-repeater-item-7764937">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-instagram"></i>
                                    <span className="flower-count">25 k+</span>
                                    <span className="flower">Followers</span>
                                </a>
                            </div>
                            <div className="pfy-social-counter-item elementor-repeater-item-d027cf9">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    <span className="flower-count">17 k+</span>
                                    <span className="flower">Followers</span>
                                </a>
                            </div>
                            <div className="pfy-social-counter-item elementor-repeater-item-e58436b">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-behance"></i>
                                    <span className="flower-count">30 k+</span>
                                    <span className="flower">Followers</span>
                                </a>
                            </div>
                            <div className="pfy-social-counter-item elementor-repeater-item-366d600">
                                <a href="##">
                                    <i aria-hidden="true" className="fab fa-dribbble"></i>
                                    <span className="flower-count">30 k+</span>
                                    <span className="flower">Like</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}