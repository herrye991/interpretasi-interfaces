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
        <article id="post-53" className="post-53 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-fashion">
            <header className="entry-header">
                { Category(responseData.category_id).map((cat, index) => { return <a key={ index } className="benqu-cate-badge" href={ Env.baseURL('category/' + cat.id) } style={ cat.background_color }><span>{ cat.name }</span></a> })}
                <h1 className="entry-title">{ responseData.title }</h1>
                <div className="pfy-single-post-meta d-flex align-items-center">
                    <ul>
                        <li>
                            <span className="auth_by">OLEH</span> 
                        </li>
                        <li>
                            <i className="fal fa-calendar-alt"></i> { Moment(responseData.created_at).format('d MMM, YYYY') }
                        </li>
                        <li>
                            <i className="far fa-comments"></i> { responseData.comments_count } Komentar
                        </li>
                        <li>
                            <i className="fal fa-eye"></i> { responseData.viewers } Views
                        </li>
                    </ul>
                    {/* <div className="bnq__social-top">
                        <div className="social-box socila-box-two">
                            <a className="fb">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="wh">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a className="pt">
                                <i className="fab fa-pinterest"></i>
                            </a>
                            <a className="em">
                                <i className="fal fa-envelope"></i>
                            </a>
                        </div>
                    </div> */}
                </div>
            </header>
            <div className="pfy-single-post-thumb">
                <img width="1296" height="700" src={ responseData.image } className="img-fluid wp-post-image" alt="" decoding="async" sizes="(max-width: 1296px) 100vw, 1296px" />
            </div>
            <div className="bnq-single-con ">
                {/* <div className="bnq-inner-social">
                    <div className="social-box socila-box-two">
                        <a className="fb">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="wh">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a className="pt">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a className="em">
                            <i className="fal fa-envelope"></i>
                        </a>
                    </div>
                </div> */}
                <div className="entry-content" dangerouslySetInnerHTML={ {__html: responseData.content} } />
            </div>
            <footer className="entry-footer">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-6">
                        <span className="tags-links">
                            <a href="#" rel="tag">Fashion</a>
                        </span>
                    </div>
                    {/* <div className="col-lg-6 col-6 text-end">
                        <div className="social-box">
                            <a className="fb">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="wh">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a className="pt">
                                <i className="fab fa-pinterest"></i>
                            </a>
                            <a className="em">
                                <i className="fal fa-envelope"></i>
                            </a>
                        </div>
                    </div> */}
                </div>
            </footer>
        </article>
    );
}