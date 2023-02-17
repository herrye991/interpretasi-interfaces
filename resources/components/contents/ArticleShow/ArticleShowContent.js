import React from "react";
import { useEffect } from 'react';
import Env from "../../helpers/Env";
import Moment from 'moment';
import Category from "../../helpers/Category";
import * as API from './API/Article';

export default function ArticleShowContent() {
    let [article, setArticle] = React.useState([]);
    let [articleUser, setArticleUser] = React.useState([]);
    let [articleTags, setArticleTags] = React.useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await API.getArticle();
            setArticle(response.data.data);
            setArticleUser(response.data.data.user);
            setArticleTags(response.data.data.tags);
        }
        fetchData();
    }, []);
    return (
        <article id="post-1" className="post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-fashion tag-feature">
            <header className="entry-header">
                { Category(article.category_id).map((cat, index) => { return  <a key={ index } className="benqu-cate-badge" href={ Env.baseURL('category/' + cat.id) } style={ cat.background_color }><span>{ cat.name }</span></a> })}
                <h1 className="entry-title">{ article.title }</h1>
                <div className="pfy-single-post-meta d-flex align-items-center">
                    <ul>
                        <li>
                            <span className="auth_by">OLEH</span> { articleUser.name }
                        </li>
                        <li>
                            <i className="fal fa-calendar-alt"></i> { Moment(article.created_at).format('d MMM, YYYY') }
                        </li>
                        <li>
                            <i className="far fa-comments"></i> { article.comments_count } Komentar
                        </li>
                        <li>
                            <i className="fal fa-eye"></i> { article.viewers } Dilihat
                        </li>
                    </ul>
                    <div className="bnq__social-top">
                        <div className="social-box socila-box-two">
                            <a className="fb" href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="wh" href="#">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a className="tw" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="pfy-single-post-thumb">
                <img width="1296" height="700" src={ article.image } className="img-fluid wp-post-image" alt="" decoding="async" sizes="(max-width: 1296px) 100vw, 1296px" />
            </div>
            <div className="bnq-single-con ">
                {/* <div className="bnq-inner-social">
                    <div className="social-box socila-box-two">
                        <a className="fb" href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="wh" href="#">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a className="pt" href="#">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a className="em" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div> */}
                <div className="entry-content">
                    <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                </div>
            </div>
            <footer className="entry-footer">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-6">
                        { articleTags.map((tags, index) => { return <span key={ index } className="tags-links"><a href={ Env.baseURL('tag/' + tags) }>{ tags }</a></span> })}
                    </div>
                    <div className="col-lg-6 col-6 text-end">
                        <div className="social-box">
                            <a className="fb" href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="wh" href="#">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a className="tw" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </article>
    );
}