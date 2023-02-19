import React from 'react';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import Env from "../../helpers/Env";
import Category from "../../helpers/Category";
import API from './API/API';
import OwlCarousel from 'react-owl-carousel';

export default function ArticleShowContent() {
    let [article, setArticle] = useState([]);
    let [author, setAuthor] = useState([]);
    let [comment, setComment] = useState([]);
    let [tags, setTags] = useState([]);
    let [related, setRelated] = useState([]);
    let [newest, setNewest] = useState([]);
    let [trend, setTrend] = useState([]);
    const owl_options = {
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
    };

    useEffect(() => {
        const getArticle = async () => {
            const response = await API.article();
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
        const getNewest = async () => {
            const response = await API.newest();
            setNewest(response.data.data);
        }
        const getTrend = async () => {
            const response = await API.trend();
            setTrend(response.data.data);
        }
        getArticle(); getComment(); getNewest(); getTrend();
    }, []);
    return (
        <div className="row benqu-sticky-wrap" style={{ transform: "none" }}>
            <div className="col-xl-8 benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <div className="theiaStickySidebar" style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none" }}>
                    <div className="ajax-scroll-post">
                        <div className="bnq__post_wap_loop">
                            <article id="post-1" className="post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-fashion tag-feature">
                                <header className="entry-header">
                                    {Category(article.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={Env.baseURL('category/' + cat.id)} style={cat.background_color}><span>{cat.name}</span></a> })}
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
                                            {/* { tags.map((tags, idx) => { return <span key={ idx } className="tags-links"><a href={ Env.baseURL('tag/' + tags) }>{ tags }</a></span> })} */}
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
                                        {comment.map((comment, idx) =>
                                            <div key={idx} className="comment-body">
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
                                        <a rel="nofollow" id="cancel-comment-reply-link" href="#" style={{ display: "none" }}>Cancel reply</a>
                                    </small>
                                    </h3>
                                    <form action="#" method="post" id="commentform" className="comment-form">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="input-field mb-30">
                                                    <textarea id="comment" className="form_control" name="comment" cols="77" rows="3" placeholder="Comment" aria-required="true" required></textarea>
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
                                                <a className="post-thumb" href={Env.baseURL('article/' + row.id)}>
                                                    <img width="1500" height="1000" src={row.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                </a>
                                            </div>
                                            <div className="pfy-post-content">
                                                {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={Env.baseURL('category/' + cat.id)} style={cat.background_color}><span>{cat.name}</span></a> })}
                                                <h4 className="pfy-post-title">
                                                    <a href={Env.baseURL('article/' + row.url)}>{row.title}</a>
                                                </h4>
                                                <ul className="pfy-post-gd-meta">
                                                    <li>
                                                        <i className="far fa-user"></i>
                                                        <a href={ Env.baseURL('user/' + row.user.id) } title={"Diposting oleh" + row.user.name} rel="author">{row.user.name}</a>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('d MMM, YYYY')}
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
            </div>
            <div className="col-xl-4 col-lg-8 mx-auto benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <div className="theiaStickySidebar" style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none" }}>
                    <aside id="secondary" className="widget-area">
                        <section id="benqu_post_slider-2" className="widget widget_benqu_post_slider">
                            <div className="recent-post">
                                <div className="recent-news-widget">
                                    <div className="benqu-section-title-wrap text-left">
                                        <h2 className="widget-title">Sedang Tren</h2>
                                        <span></span>
                                    </div>
                                    {trend.length && (
                                        <OwlCarousel className="widget-post-slider-wrap owl-carousel owl-loaded owl-drag owl-theme" {...owl_options}>
                                            <div className="owl-stage-outer">
                                                <div className="owl-stage" style={{ transform: "translate3d(-1333px, 0px, 0px)", transition: "all 0s ease 0s", width: "4667px" }}>
                                                    {trend.map((row, idx) =>
                                                        <div key={idx} className="owl-item" style={{ width: "666.656px" }}>
                                                            <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                <a className="post-thumbnil" href={Env.baseURL('article/' + row.url)}>
                                                                    <img width="1920" height="1200" src={row.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1920px) 100vw, 1920px" />
                                                                </a>
                                                                <div className="pfy-post-content text-center">
                                                                    {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={Env.baseURL('category/' + cat.id)} style={cat.background_color}><span>{cat.name}</span></a> })}
                                                                    <h4 className="pfy-post-title">
                                                                        <a href={Env.baseURL('article/' + row.url)}>{row.title}</a>
                                                                    </h4>
                                                                    <div className="pfy-post-meta">
                                                                        <ul className="justify-content-center">
                                                                            <li>
                                                                                <i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('d MMM, YYYY')}
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    )}
                                </div>
                            </div>
                        </section>
                        <section id="benqu_latest_news_widget-3" className="widget benqu_latest_news_widget">
                            <div className="benqu-section-title-wrap text-left">
                                <h2 className="widget-title">Terbaru</h2>
                                <span></span>
                            </div>
                            {newest.length && (
                                <div className="recent-posts-widget">
                                    <div className="pfy-post-grid-wrap grid-style-tb">
                                        {newest.map((row, idx) =>
                                            <div key={idx} className="pfy-post-item pfy-scale pfy-img-commn-style">
                                                <div className="benqu__post-content pfy-scale d-flex">
                                                    <div className="pfy-post-thumb">
                                                        <a href={Env.baseURL('article/' + row.url)}>
                                                            <img width="640" height="408" src={row.image} className="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 640px) 100vw, 640px" />
                                                        </a>
                                                    </div>
                                                    <div className="pfy-post-content">
                                                        <div className="pfy-post-meta-tb d-flex">
                                                            {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-name" href={Env.baseURL('category/' + cat.id)} style={cat.color}><span>{cat.name}</span></a> })}
                                                            <span className="pfy-post-date">
                                                                <i className="fal fa-calendar-alt"></i> Aug 08, 2022 </span>
                                                        </div>
                                                        <h4 className="benqu__post-title pfy-post-title hover-title">
                                                            <a href={Env.baseURL('article/' + row.url)} rel="bookmark" title={row.title}>{row.title.length > 58 ? `${row.title.substring(0, 58)}...` : row.title}</a>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>
                        <section id="tag_cloud-3" className="widget widget_tag_cloud">
                            <div className="benqu-section-title-wrap text-left">
                                <h2 className="widget-title">Tag</h2>
                                <span></span>
                            </div>
                            <div className="tagcloud">
                                {tags.map((tags, idx) => { return <a key={idx} href={Env.baseURL('tag/' + tags)} className="tag-cloud-link tag-link-21 tag-link-position-1" style={{ fontSize: "13.833333333333pt" }} aria-label={tags}>{tags}</a> })}
                            </div>
                        </section>
                        <section id="media_image-3" className="widget widget_media_image">
                            <a href="#" style={{ contentAlign: "center" }}>
                                <img width="351" height="545" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/adds.jpg" className="image wp-image-1492  attachment-full size-full" alt="" decoding="async" loading="lazy" style={{ maxWidth: "100%", height: "auto" }} srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/adds.jpg 351w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/adds-193x300.jpg 193w" sizes="(max-width: 351px) 100vw, 351px" />
                            </a>
                        </section>
                    </aside>
                    <div className="resize-sensor" style={{ position: "absolute", inset: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
                        <div className="resize-sensor-expand" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
                            <div style={{ position: "absolute", left: "0px", top: "0px", transition: "all 0s ease 0s", width: "701px", height: "2603px" }}></div>
                        </div>
                        <div className="resize-sensor-shrink" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
                            <div style={{ position: "absolute", left: "0", top: "0", transition: "0s", width: "200%", height: "200%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}