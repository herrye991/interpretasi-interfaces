import React from "react";
import {useEffect} from 'react';
import axios from 'axios';
import Env from "../helpers/Env";
import Moment from 'moment';
import Category from "../helpers/Category";

export default function FirstSectionContentLeft() {
    let [firstData, setFirstData] = React.useState([])
    let [firstDataUser, setFirstDataUser] = React.useState([])
    let [secondData, setSecondData] = React.useState([])
    useEffect(() => {
        const requestOptions = {
            headers: { 'Accept': 'application/json' },
        };
        async function firstData() { 
            axios.get(Env.apiURL('article/?tending=1&skip=0&take=1'), requestOptions).then((response) => {
                setFirstData(response.data.data[0])
                setFirstDataUser(response.data.data[0].user)
            }).catch((error) => {
                console.log(error)
            });
        }
        async function secondData() { 
            axios.get(Env.apiURL('article/?tending=1&skip=1&take=2'), requestOptions).then((response) => {
                setSecondData(response.data.data)
            }).catch((error) => {
                console.log(error)
            });
        }
        firstData();
        secondData();
    }, []);
    return (
        <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-c71dec9 elementor-widget elementor-widget-benqu-post-overlay-v2" data-id="c71dec9" data-element_type="widget" data-widget_type="benqu-post-overlay-v2.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-grid-wrap pfy-overlay-style-9">
                        <div className="pfy-post-item pfy-scale">
                            <div className="pfy-post-thumb pfy-img-commn-style">
                                <a title={ firstData.title } href={ Env.baseURL('article/' + firstData.url) }><img loading="lazy" width="1500" height="1000" src={firstData.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" /></a>
                            </div>
                            <div className="pfy-post-content">
                                { Category(firstData.category_id).map((cat, index) => { return <a key={ index } className="benqu-cate-badge" style={ cat.color } href={ Env.apiURL('category/' + cat.id) }><span>{ cat.name }</span></a> }) }
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
                            { secondData.map((res, index) =>
                            <div className="col-lg-6 col-md-6 col-xl-6" key={index}>
                                <div className="pfy-post-item pfy-scale pfy-ch">
                                    <div className="pfy-post-thumb pfy-img-commn-style">
                                        <a className="post-thumb" href={ Env.baseURL('article/' + res.url) }><img width="1500" height="1000" src="https://interpretasi.id/assets/images/articles/default.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" /></a>
                                        { Category(res.category_id).map((cat, index) => { return <a key={ index } className="benqu-cate-badge" style={ cat.color } href={ Env.baseURL("category/" + cat.id ) }><span>{ cat.name }</span></a> }) }
                                    </div>
                                    <div className="pfy-post-content">
                                        <h3 className="pfy-post-title"><a href={ Env.baseURL('article/' + res.url) }>{ res.title }</a></h3>
                                        <ul>
                                            <li><span className="auth_by">Oleh &nbsp;</span><a href={ Env.baseURL('user/' + res.user.id) } title={"Diposting oleh " + res.user.name} rel="author"> {res.user.name }</a></li>
                                            <li><i className="fal fa-calendar-alt"></i> {Moment(res.created_at).format('d MMM, YYYY')}</li>
                                            <li><i className="far fa-comments"></i> { res.comments_count } Komentar </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}