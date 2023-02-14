import React from "react";
import {useEffect} from 'react';
import axios from 'axios';
import Env from "../helpers/Env";
import Moment from 'moment';
import Category from "../helpers/Category";

export default function FirstSectionContentLeft() {
    let [categoryData, setCategoryData] = React.useState([])
    let [firstData, setFirstData] = React.useState([])
    let [firstDataUser, setFirstDataUser] = React.useState([])
    let [secondData, setSecondData] = React.useState([])
    let [secondDataUser, setSecondDataUser] = React.useState([])
    let [thirdData, setThirdData] = React.useState([])
    let [thirdDataUser, setThirdDataUser] = React.useState([])
    useEffect(() => {
        async function fetchData() { 
            const requestOptions = {
                headers: { 'Accept': 'application/json' },
            };
            axios.get(Env.apiURL('article/?tending=1&limit=3'), requestOptions).then((response) => {
                setFirstData(response.data.data[0])
                setFirstDataUser(response.data.data[0].user)
                setSecondData(response.data.data[1])
                setSecondDataUser(response.data.data[1].user)
                setThirdData(response.data.data[2])
                setThirdDataUser(response.data.data[2].user)
            }).catch((error) => {
                console.log(error)
            });
        }
        fetchData();
    }, []);
    return (
        <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-c71dec9 elementor-widget elementor-widget-benqu-post-overlay-v2" data-id="c71dec9" data-element_type="widget" data-widget_type="benqu-post-overlay-v2.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-grid-wrap pfy-overlay-style-9">
                        <div className="pfy-post-item pfy-scale">
                            <div className="pfy-post-thumb pfy-img-commn-style">
                                <a title="Fasion Trends and Li Edelkoort the Culture Shock Special Report" href="#"><img loading="lazy" width="1500" height="1000" src={firstData.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" /></a>
                            </div>
                            <div className="pfy-post-content">
                                <a className="benqu-cate-badge" href="#">
                                    { Category(firstData.category_id).map((res, index) => { return <span key={ index }>{ res.name }</span> }) }
                                </a>
                                <h1 className="pfy-post-title">
                                    <a href={ Env.baseURL('article/' + firstData.url) }>{firstData.title}</a>
                                </h1>
                                <ul className="pfy-post-gd-meta">
                                    <li>Oleh <a href={Env.baseURL('user/' + firstDataUser.id)} title={"Diposting oleh" + firstDataUser.name} rel="author">{ firstDataUser.name }</a></li>
                                    <li><i className="fal fa-calendar-alt"></i> {Moment(firstData.created_at).format('d MMM, YYYY')}</li>
                                    <li><i className="far fa-comments"></i> { firstData.comments_count } Komentar </li>
                                    <li><i className="far fa-eye"></i> { firstData.viewers } Dilihat </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-7b6e4ad elementor-widget elementor-widget-benqu-post-grid"
                data-id="7b6e4ad" data-element_type="widget"
                data-widget_type="benqu-post-grid.default">
                <div className="elementor-widget-container">

                    <div className="pfy-post-grid-wrap grid-style-2 grid-style-9">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-xl-6">
                                <div className="pfy-post-item pfy-scale pfy-ch">
                                    <div className="pfy-post-thumb pfy-img-commn-style">
                                        <a className="post-thumb"
                                            href="trip-to-iqaluit-in-nunavut-a-canadian-arctic-nice-city/index.html"><img
                                                width="1500" height="1000"
                                                src="https://interpretasi.id/assets/images/articles/default.png"
                                                className="attachment-full size-full wp-post-image"
                                                alt="" decoding="async" loading="lazy"
                                                srcSet="https://interpretasi.id/assets/images/articles/default.png 1500w, https://interpretasi.id/assets/images/articles/default.png 300w, https://interpretasi.id/assets/images/articles/default.png 1024w, https://interpretasi.id/assets/images/articles/default.png 768w"
                                                sizes="(max-width: 1500px) 100vw, 1500px" /></a>
                                        <a className="benqu-cate-badge" href="category/travel/index.html">
                                            <span>Travel</span>
                                        </a>
                                    </div>
                                    <div className="pfy-post-content">

                                        <h3 className="pfy-post-title"><a
                                            href="trip-to-iqaluit-in-nunavut-a-canadian-arctic-nice-city/index.html">Trip
                                            To Iqaluit In Nunavut A Canadian Arctic Nice
                                            City..</a></h3>

                                        <ul>
                                            <li><span className="auth_by">BY</span> <a
                                                href="author/bnque/index.html"
                                                title="Posts by David" rel="author">David</a>
                                            </li>

                                            <li><i className="fal fa-calendar-alt"></i> Jul 07, 2022
                                            </li>

                                            <li><i className="far fa-comments"></i>
                                                0 Comments </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-xl-6">
                                <div className="pfy-post-item pfy-scale pfy-ch">
                                    <div className="pfy-post-thumb pfy-img-commn-style">
                                        <a className="post-thumb"
                                            href="smarter-food-choices-101-tips-for-the-busy-women/index.html"><img width="1500" height="1000" src="https://interpretasi.id/assets/images/articles/default.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://interpretasi.id/assets/images/articles/default.png 1500w, https://interpretasi.id/assets/images/articles/default.png 300w, https://interpretasi.id/assets/images/articles/default.png 1024w, https://interpretasi.id/assets/images/articles/default.png 768w" sizes="(max-width: 1500px) 100vw, 1500px" /></a>
                                        <a className="benqu-cate-badge" href="category/food/index.html"><span>Food</span></a>
                                    </div>
                                    <div className="pfy-post-content">
                                        <h3 className="pfy-post-title"><a href="smarter-food-choices-101-tips-for-the-busy-women/index.html">Smarter Food Choices 101 Tips For The Busy Women</a></h3>
                                        <ul>
                                            <li><span className="auth_by">BY</span><a href="author/bnque/index.html" title="Posts by David" rel="author">David</a></li>
                                            <li><i className="fal fa-calendar-alt"></i> Jul 07, 2022</li>
                                            <li><i className="far fa-comments"></i> 0 Comments </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}