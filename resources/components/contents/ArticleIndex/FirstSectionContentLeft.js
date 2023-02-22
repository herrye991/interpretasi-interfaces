import React from "react";
import {useEffect} from 'react';
import ENV from "../../helpers/ENV";
import Moment from 'moment';
import Category from "../../helpers/Category";
import CategoryAPI from "../../helpers/CategoryAPI";
import API from "./API/API";

export default function FirstSectionContentLeft() {
    let [first, setFirst] = React.useState([])
    let [firstUser, setFirstUser] = React.useState([])
    let [second, setSecond] = React.useState([])
    useEffect(() => {
        const getFirst = async () => {
            const response = await API.firstTrend()
            setFirst(response.data.data[0]);
            setFirstUser(response.data.data[0].user);
        }
        getFirst();
        const getSecond = async () => {
            const response = await API.secondTrend()
            setSecond(response.data.data);
        }
        getSecond();
    }, []);
    return (
        <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-c71dec9 elementor-widget elementor-widget-benqu-post-overlay-v2" data-id="c71dec9" data-element_type="widget" data-widget_type="benqu-post-overlay-v2.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-grid-wrap pfy-overlay-style-9">
                        <div className="pfy-post-item pfy-scale">
                            <div className="pfy-post-thumb pfy-img-commn-style">
                                <a title={ first.title } href={ ENV.baseURL('article/' + first.url) }><img loading="lazy" width="1500" height="1000" src={first.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" /></a>
                            </div>
                            <div className="pfy-post-content">
                                { Category(first.category_id).map((cat, idx) => { return <a key={ idx } className="benqu-cate-badge" style={ cat.background_color } href={ ENV.baseURL('category/' + cat.unique_name) }><span>{ cat.name }</span></a> }) }
                                <h1 className="pfy-post-title">
                                    <a href={ ENV.baseURL('article/' + first.url) }>{first.title}</a>
                                </h1>
                                <ul className="pfy-post-gd-meta">
                                    <li>Oleh <a href={ENV.baseURL('user/' + firstUser.id)} title={"Diposting oleh" + firstUser.name} rel="author">{ firstUser.name }</a></li>
                                    <li><i className="fal fa-calendar-alt"></i> { Moment(first.created_at).format('d MMM, YYYY') }</li>
                                    <li><i className="far fa-comments"></i> { first.comments_count } Komentar </li>
                                    <li><i className="far fa-eye"></i> { first.viewers } Dilihat </li>
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
                            { second.map((row, idx) =>
                            <div className="col-lg-6 col-md-6 col-xl-6" key={idx}>
                                <div className="pfy-post-item pfy-scale pfy-ch">
                                    <div className="pfy-post-thumb pfy-img-commn-style">
                                        <a className="post-thumb" href={ ENV.baseURL('article/' + row.url) }><img width="1500" height="1000" src={ row.image } className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" /></a>
                                        { Category(row.category_id).map((cat, idx) => { return <a key={ idx } className="benqu-cate-badge" style={ cat.background_color } href={ ENV.baseURL("category/" + cat.unique_name ) }><span>{ cat.name }</span></a> }) }
                                    </div>
                                    <div className="pfy-post-content">
                                        <h3 className="pfy-post-title"><a href={ ENV.baseURL('article/' + row.url) }>{ row.title }</a></h3>
                                        <ul>
                                            <li><span className="auth_by">Oleh &nbsp;</span><a href={ ENV.baseURL('user/' + row.user.id) } title={"Diposting oleh " + row.user.name} rel="author"> {row.user.name }</a></li>
                                            <li><i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('d MMM, YYYY')}</li>
                                            <li><i className="far fa-comments"></i> { row.comments_count } Komentar </li>
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