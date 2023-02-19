import React from "react";
import Moment from 'moment';
import { useEffect } from 'react';
import Env from "../../helpers/Env";
import Category from "../../helpers/Category";
import API from './API/API';
import ArticleShowContentRelated from "../../contents/ArticleShow/ArticleShowContentRelated"

export default function ArticleShowContentLeft() {
    let [article, setArticle] = React.useState([]);
    let [author, setAuthor] = React.useState([]);
    let [comment, setComment] = React.useState([]);
    let [articleTags, setArticleTags] = React.useState([]);

    useEffect(() => {
        const getArticle = async () => {
            const response = await API.article();
            setArticle(response.data.data);
            setAuthor(response.data.data.user);
            setArticleTags(response.data.data.tags);
        }
        const getComment = async () => {
            const response = await API.comment();
            setComment(response.data.data);
        }
        getArticle();
        getComment();
    }, []);
    return (
        <div className="theiaStickySidebar" style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none" }}>
            <div className="ajax-scroll-post">
                <div className="bnq__post_wap_loop">
                    <article id="post-1" className="post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-fashion tag-feature">
                        <header className="entry-header">
                            {Category(article.category_id).map((cat, index) => { return <a key={index} className="benqu-cate-badge" href={Env.baseURL('category/' + cat.id)} style={cat.background_color}><span>{cat.name}</span></a> })}
                            <h1 className="entry-title">{article.title}</h1>
                            <div className="pfy-single-post-meta d-flex align-items-center">
                                <ul>
                                    <li>
                                        <span className="auth_by">OLEH</span> {author.name}
                                    </li>
                                    <li>
                                        <i className="fal fa-calendar-alt"></i> {Moment(article.created_at).format('d MMM, YYYY')}
                                    </li>
                                    <li>
                                        <i className="far fa-comments"></i> {article.comments_count} Komentar
                                    </li>
                                    <li>
                                        <i className="fal fa-eye"></i> {article.viewers} Dilihat
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
                            <img width="1296" height="700" src={article.image} className="img-fluid wp-post-image" alt="" decoding="async" sizes="(max-width: 1296px) 100vw, 1296px" />
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
                                    {/* { articleTags.map((tags, index) => { return <span key={ index } className="tags-links"><a href={ Env.baseURL('tag/' + tags) }>{ tags }</a></span> })} */}
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
                    <div className="benqu__author_bio__Wrapper">
                        <div className="author-thumb">
                            <a href={Env.baseURL('user/' + author.id)}><img alt="" src={author.photo} className="avatar avatar-180 photo" height="180" width="180" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="theme_author_Info">
                            <a href={Env.baseURL('user/' + author.id)}><h4 className="theme_author__Name">{author.name}</h4></a>
                            <h6 className="theme_author_Title">Tentang Penulis</h6>
                            <p className="theme_author__Description">{author.bio}</p>
                            {/* <div className="theme_author_socials_icon">
                                <a href="#" target="_blank" rel="nofollow" className="fb_aut" title="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank" rel="nofollow" className="twi_aut" title="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank" rel="nofollow" className="inst_aut" title="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" target="_blank" rel="nofollow" className="pint_aut" title="Pinterest">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a href="#" target="_blank" rel="nofollow" className="link_aut" title="linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div id="comments" className="comments-area">
                        <h2 className="comments-title"> {article.comments_count} Komentar </h2>
                        <ol className="comment-list">
                            <li className="comment even thread-even depth-1 comment" id="comment-1">
                                {comment.map((comment, index) =>
                                    <div key={index} className="comment-body">
                                        <div className="author-thumb">
                                            <a href={Env.baseURL('user/' + comment.user.id)}><img alt="" src={comment.user.photo} className="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async" /></a>
                                        </div>
                                        <div className="comment-content">
                                            <h4 className="name">
                                                <a href={Env.baseURL('user/' + comment.user.id)} rel="external nofollow ugc" className="url">{comment.user.name}</a>
                                            </h4>
                                            <span className="comment-date text-end">{Moment(comment.created_at).format('d MMM, YYYY')}</span>
                                            <p>{comment.body}</p>
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ol>
                        <div id="respond" className="comment-respond">
                            <h3 id="reply-title" className="comment-reply-title">Tinggalkan komentar <small>
                                <a rel="nofollow" id="cancel-comment-reply-link" href="/wp/demos/themes/benqu/fasion-trends-and-li-edelkoort-the-culture-shock-special-report/#respond" style={{ display: "none" }}>Cancel reply</a>
                            </small>
                            </h3>
                            <form action="#" method="post" id="commentform" className="comment-form" noValidate="">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-field mb-30">
                                            <textarea id="comment" className="form_control" name="comment" cols="77" rows="3" placeholder="Comment" aria-required="true"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <p className="form-submit">
                                    <input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" />
                                    <input type="hidden" name="comment_post_ID" defaultValue="1" id="comment_post_ID" />
                                    <input type="hidden" name="comment_parent" id="comment_parent" defaultValue="0" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <ArticleShowContentRelated />
                <div className="resize-sensor" style={{ position: "absolute", inset: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
                    <div className="resize-sensor-expand" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
                        <div style={{ position: "absolute", left: "0px", top: "0px", transition: "all 0s ease 0s", width: "1046px", height: "6389px" }}></div>
                    </div>
                    <div className="resize-sensor-shrink" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
                        <div style={{ position: "absolute", left: "0", top: "0, transition: 0s", width: "200%", height: "200%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}