import React from 'react';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import ENV from '../../helpers/ENV';
import Category from "../../helpers/Category";
import API from '../../helpers/API';
import Text from '../../helpers/Text';
import Base64 from 'crypto-js/enc-base64';

export default function ArticleShowContentLeft() {
    let [session, setSession] = useState(0);
    let [currentUser, setCurrentUser] = useState([]);
    let [article, setArticle] = useState([]);
    let [author, setAuthor] = useState([]);
    let [comment, setComment] = useState([]);
    let [tags, setTags] = useState([]);
    let [related, setRelated] = useState([]);

    const queryParameters = new URLSearchParams(window.location.search)
    const commentParameter = queryParameters.get("comment") ? decodeURI(queryParameters.get("comment")) : '';

    useEffect(() => {
        const getSession = async () => {
            const response = await API.session();
            setSession(response);
        }
        const getCurrentUser = async () => {
            const response = await API.currentUser();
            setCurrentUser(response.data.data);
        }
        const getArticle = async () => {
            const response = await API.articleShow();
            const cat_id = response.data.data.category_id;
            setArticle(response.data.data);
            setAuthor(response.data.data.user);
            setTags(response.data.data.tags);
            const getRelated = async () => {
                const response = await API.related(cat_id);
                setRelated(response.data.data);
            }
            getRelated();
        }
        const getComment = async () => {
            const response = await API.comment();
            setComment(response.data.data);
        }
        const postPreview = async () => {
            await API.preview();
        }
        getCurrentUser(); getSession(); getArticle(); getComment();
        setTimeout(() => {
            postPreview();
        }, 30000);
        return () => clearTimeout(timeout);
    }, []);

    const commentSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = { body: data.get('body') };
        if (session == 200) {
            try {
                await API.commentPost(body);
                window.location.href = ENV.currentURL();
            } catch (error) {
                console.error('error', error);
            }
        } else {
            const next = window.location.href
            window.location.href = ENV.baseURL('account/signin' + '?next=' + next + '&comment=' + data.get('body'));
        }
    }

    const deleteComment = async (commentId) => {
        if (session == 200) {
            try {
                await API.commentDelete(commentId);
                window.location.href = ENV.currentURL();
            } catch (error) {
                console.error('error', error);
            }
        } else {
            const next = window.location.href
            window.location.href = ENV.baseURL('account/signin' + '?next=' + next);
        }
    }

    const showPopup = (commentId) => {
        const reportPopup = document.getElementById('report-popup');
        if (session == 200) {
            reportPopup.classList.add('active-newsletter-popup');
            reportPopup.setAttribute('data-id', commentId);
        } else {
            const next = window.location.href
            window.location.href = ENV.baseURL('account/signin' + '?next=' + next);
        }
    }

    const closePopup = () => {
        const reportPopup = document.getElementById('report-popup');
        reportPopup.classList.remove('active-newsletter-popup')
        reportPopup.setAttribute('data-id', 0);
    }

    const reportComment = async (event) => {
        event.preventDefault();
        const reportPopup = document.getElementById('report-popup');
        const commentId = reportPopup.getAttribute('data-id');
        const data = new FormData(event.currentTarget);
        const body = { reason: data.get('reason') };
        if (session == 200) {
            try {
                const response = await API.commentReport(commentId, body)
                window.location.href = ENV.currentURL();
            } catch (error) {
                console.error('error', error);
            }
        } else {
            const next = window.location.href
            window.location.href = ENV.baseURL('account/signin' + '?next=' + next);
        }
    }

    return (
        <div className="theiaStickySidebar" style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none" }}>
            <div className="ajax-scroll-post">
                <div className="bnq__post_wap_loop">
                    <article id="post-1" className="post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-fashion tag-feature">
                        <header className="entry-header">
                            {Category(article.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={ENV.baseURL('category/' + cat.unique_name)} style={cat.background_color}><span>{cat.name}</span></a> })}
                            <h1 className="entry-title">{article.title}</h1>
                            <div className="pfy-single-post-meta d-flex">
                                <ul>
                                    <li>
                                        <i className="fal fa-calendar-alt"></i> {Moment(article.created_at).format('DD MMM YYYY')}
                                    </li>
                                    <li>
                                        <i className="fal fa-thumbs-up"></i> {article.likes_count} Suka
                                    </li>
                                    <li>
                                        <i className="far fa-comments"></i> {article.comments_count} Komentar
                                    </li>
                                    <li>
                                        <i className="fal fa-eye"></i> {article.viewers} Dilihat
                                    </li>
                                </ul>
                                <div className="bnq__social-top">
                                    <div className="social-box socila-box-two" style={{ textAlign: "left" }}>
                                        <div className="dropdown" style={{ float: "right" }}>
                                            <a href="#" className="fb" id="dropdownMenuButtonShare" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonShare" data-popper-placement="bottom-end">
                                                <button className="dropdown-item">Bagikan ke Facebook</button>
                                                <button className="dropdown-item" onClick={() => { window.open("https://api.whatsapp.com/send?text=" + article.title + "%0a" + ENV.articleURL(article.url), '_blank') }}>Bagikan ke Whatsapp</button>
                                                <button className="dropdown-item">Bagikan ke Twitter</button>
                                                <button className="dropdown-item" onClick={() => {navigator.clipboard.writeText(ENV.currentURL())}}>Salin Tautan</button>
                                                <button className="dropdown-item">Laporkan Artikel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="pfy-single-post-thumb">
                            <img width="1296" height="700" src={article.image} className="img-fluid wp-post-image" alt="" decoding="async" sizes="(max-width: 1296px) 100vw, 1296px" />
                        </div>
                        <div className="bnq-single-con ">
                            <div className="entry-content">
                                <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                            </div>
                        </div>
                        <footer className="entry-footer">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-6">
                                    {tags.map((tags, idx) => { return <span key={idx} className="tags-links"><a href={ENV.baseURL('tag/' + tags)}>{tags}</a></span> })}
                                </div>
                                <div className="col-lg-6 col-6 text-end">
                                    <div className="social-box">
                                        <a className="fb" href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="wh" href={article.title + "\n" + "https://api.whatsapp.com/send?text=" + ENV.articleURL(article.url)}>
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
                            <a href={ENV.userURL(author.id + '/' + Text.specialRemove(author.name))}><img alt="" src={author.photo} className="avatar avatar-180 photo" height="180" width="180" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="theme_author_Info">
                            <a href={ENV.userURL(author.id + '/' + Text.specialRemove(author.name))}><h4 className="theme_author__Name">{author.name}</h4></a>
                            <h6 className="theme_author_Title">Tentang Penulis</h6>
                            <p className="theme_author__Description">{author.bio}</p>
                        </div>
                    </div>
                    <div id="comments" className="comments-area">
                        <h2 className="comments-title"> {article.comments_count} Komentar </h2>
                        <ol className="comment-list">
                            {comment.map((comment, idx) => {
                                if (currentUser.id == comment.user.id) {
                                    return (
                                        <li key={idx} className="comment even thread-even depth-1 comment">
                                            <div className="comment-body" style={{ textAlign: "left" }}>
                                                <div className="author-thumb">
                                                    <a href={ENV.userURL(comment.user.id + '/' + Text.specialRemove(comment.user.name))}><img alt="" src={comment.user.photo} className="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async" /></a>
                                                </div>
                                                <div className="comment-content">
                                                    <h4 className="name"><a href={ENV.userURL(comment.user.id + '/' + Text.specialRemove(comment.user.name))} rel="external nofollow ugc" className="url">{comment.user.name}</a></h4>
                                                    <button onClick={() => { window.confirm('Kamu yakin ingin menghapus komentar ini?',) && deleteComment(comment.id) }} title="Hapus" className="btn" style={{ float: "right", border: "1px solid #e3e3e3" }}><i className="fa fa-trash" style={{ color: "#666", fontSize: "12px" }}></i></button>
                                                    <span className="comment-date text-end">{Moment(comment.created_at).format('DD MMM YYYY (HH:mm)')}</span>
                                                    <p>{comment.body}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={idx} className="comment even thread-even depth-1 comment">
                                            <div className="comment-body" style={{ textAlign: "left" }}>
                                                <div className="author-thumb">
                                                    <a href={ENV.userURL(comment.user.id + '/' + Text.specialRemove(comment.user.name))}><img alt="" src={comment.user.photo} className="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async" /></a>
                                                </div>
                                                <div className="comment-content">
                                                    <h4 className="name"><a href={ENV.userURL(comment.user.id + '/' + Text.specialRemove(comment.user.name))} rel="external nofollow ugc" className="url">{comment.user.name}</a></h4>
                                                    <button onClick={() => { showPopup(comment.id) }} title="Laporkan" className="btn" style={{ float: "right", border: "1px solid #e3e3e3" }}><i className="fa fa-exclamation-triangle" style={{ color: "#666", fontSize: "12px" }}></i></button>
                                                    <span className="comment-date text-end">{Moment(comment.created_at).format('DD MMM YYYY (HH:mm)')}</span>
                                                    <p>{comment.body}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                            <div data-id="0" id="report-popup" className="bnqu__popup_wrap">
                                <div className="bnqu__popup_sec">
                                    <div className="bnqu__popup_ineer">
                                        <button className="btn newsletter-close-btn" onClick={closePopup}><i className="fal fa-times"></i></button>
                                        <div className="details">
                                            <h1>Laporkan Komentar ini.</h1>
                                            <form className="mc4wp-form mc4wp-form-448" onSubmit={reportComment} style={{ textAlign: "center" }}>
                                                <div className="mc4wp-form-fields" style={{ marginBottom: "20px" }}>
                                                    <textarea name="reason" className="form-control" placeholder="Alasan anda melaporkan komentar ini..." required=""></textarea>
                                                </div>
                                                <button className="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ol>
                        <div id="respond" className="comment-respond">
                            <h3 id="reply-title" className="comment-reply-title">Tinggalkan komentar <small>
                                <a rel="nofollow" id="cancel-comment-reply-link" href="#" style={{ display: "none" }}>Cancel reply</a>
                            </small>
                            </h3>
                            <form onSubmit={commentSubmit} className="comment-form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-field mb-30">
                                            <textarea className="form_control" name="body" cols="77" rows="3" placeholder="Tulis komentar..." aria-required="true" required defaultValue={commentParameter}></textarea>
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
                <div className="pfy-post-grid-wrap releted-post-wrap grid-style-6">
                    <div className="row pfy-loadmore-info">
                        <div className="col-lg-12">
                            <h2 className="releted-title">Artikel Terkait</h2>
                        </div>
                        {related.map((row, idx) =>
                            <div key={idx} className="col-lg-6 pfy-grid-item">
                                <div className="pfy-post-item item-act pfy-scale">
                                    <div className="pfy-post-thumb pfy-img-commn-style">
                                        <a className="post-thumb" href={ENV.baseURL('article/' + row.id)}>
                                            <img width="1500" height="1000" src={row.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1500px) 100vw, 1500px" />
                                        </a>
                                    </div>
                                    <div className="pfy-post-content">
                                        {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={ENV.baseURL('category/' + cat.unique_name)} style={cat.background_color}><span>{cat.name}</span></a> })}
                                        <h4 className="pfy-post-title">
                                            <a href={ENV.baseURL('article/' + row.url)}>{row.title}</a>
                                        </h4>
                                        <ul className="pfy-post-gd-meta">
                                            <li>
                                                <i className="far fa-user"></i>
                                                <a href={ENV.userURL(row.user.id + '/' + Text.specialRemove(row.user.name))} title={"Diposting oleh" + row.user.name} rel="author">{row.user.name}</a>
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('DD MMM YYYY')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
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