import React from 'react';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import ENV from '../../helpers/ENV';
import Category from "../../helpers/Category";
import API from '../../helpers/API';
import OwlCarousel from 'react-owl-carousel';

export default function ArticleShowContentRight() {
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
        const getNewest = async () => {
            const response = await API.newest();
            setNewest(response.data.data);
        }
        const getTrend = async () => {
            const response = await API.trend();
            setTrend(response.data.data);
        }
        getNewest(); getTrend();
    }, []);
    return (
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
                                                        <a className="post-thumbnil" href={ENV.baseURL('article/' + row.url)}>
                                                            <img width="1920" height="1200" src={row.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1920px) 100vw, 1920px" />
                                                        </a>
                                                        <div className="pfy-post-content text-center">
                                                            {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={ENV.baseURL('category/' + cat.unique_name)} style={cat.background_color}><span>{cat.name}</span></a> })}
                                                            <h4 className="pfy-post-title">
                                                                <a href={ENV.baseURL('article/' + row.url)}>{row.title}</a>
                                                            </h4>
                                                            <div className="pfy-post-meta">
                                                                <ul className="justify-content-center">
                                                                    <li>
                                                                        <i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('DD MMM YYYY')}
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
                                                <a href={ENV.baseURL('article/' + row.url)}>
                                                    <img width="640" height="408" src={row.image} className="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 640px) 100vw, 640px" />
                                                </a>
                                            </div>
                                            <div className="pfy-post-content">
                                                <div className="pfy-post-meta-tb d-flex">
                                                    {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-name" href={ENV.baseURL('category/' + cat.unique_name)} style={cat.color}><span>{cat.name}</span></a> })}
                                                    <span className="pfy-post-date">
                                                        <i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('DD MMM YYYY')} </span>
                                                </div>
                                                <h4 className="benqu__post-title pfy-post-title hover-title">
                                                    <a href={ENV.baseURL('article/' + row.url)} rel="bookmark" title={row.title}>{row.title.length > 58 ? `${row.title.substring(0, 58)}...` : row.title}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </section>
                {/* <section id="media_image-3" className="widget widget_media_image">
                    <a href="#" style={{ contentAlign: "center" }}>
                        <img width="351" height="545" src="https://interpretasi.id/assets/images/adds.jpg" className="image wp-image-1492  attachment-full size-full" alt="" decoding="async" loading="lazy" style={{ maxWidth: "100%", height: "auto" }} sizes="(max-width: 351px) 100vw, 351px" />
                    </a>
                </section> */}
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
    );
}