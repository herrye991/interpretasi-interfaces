import React from "react";
import { useEffect } from 'react';
import ENV from "../../helpers/ENV";
import Moment from 'moment';
import API from "../../helpers/API";
import Text from "../../helpers/Text";

export default function FourthSectionContentLeft() {
    let [first, setFirst] = React.useState([])
    let [firstUser, setFirstUser] = React.useState([])
    let [second, setSecond] = React.useState([])
    
    useEffect(() => {
        const getFirst = async () => {
            const response = await API.firstEntertainmentIndex()
            setFirst(response.data.data[0]);
            setFirstUser(response.data.data[0].user);
        }
        getFirst();
        const getSecond = async () => {
            const response = await API.secondEntertainmentIndex()
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
                                <h1 className="pfy-post-title">
                                    <a href={ ENV.baseURL('article/' + first.url) }>{first.title}</a>
                                </h1>
                                <ul className="pfy-post-gd-meta">
                                    <li>Oleh <a href={ENV.userURL(firstUser.id + '/' + Text.specialRemove(firstUser.name))} title={"Diposting oleh" + firstUser.name} rel="author">{ firstUser.name }</a></li>
                                    <li><i className="fal fa-calendar-alt"></i> { Moment(first.created_at).format('DD MMM YYYY') }</li>
                                    <li><i className="far fa-comments"></i> { first.comments_count } Komentar </li>
                                    <li><i className="far fa-eye"></i> { first.viewers } Dilihat </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-e26b5fe elementor-widget elementor-widget-benqu-post-grid" data-id="e26b5fe" data-element_type="widget" data-widget_type="benqu-post-grid.default">
                <div className="elementor-widget-container">
                    <div className="pfy-post-grid-wrap grid-style-4">
                        {second.length && (
                        <div className="row">
                            {/* Start Map */}
                            {second.map((res, index) =>
                                <div key={index} className="col-lg-4 col-xl-4 col-md-6">
                                    <div className="pfy-post-item pfy-scale">
                                        <div className="pfy-post-thumb pfy-img-commn-style">
                                            <a className="post-thumb" href={ENV.baseURL('article/' + res.url)}><img width="1500" height="1125" src={res.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 1500px) 100vw, 1500px" /></a>
                                        </div>
                                        <div className="pfy-post-content">
                                            <h4 className="pfy-post-title"><a href={ENV.baseURL('article/' + res.url)} title={ res.title }>{res.title.length > 58 ? `${res.title.substring(0, 58)}...` : res.title}</a></h4>
                                            <ul className="pfy-post-gd-meta">
                                                <li><i className="fal fa-calendar-alt"></i> {Moment(res.created_at).format('DD MMM YYYY')} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* End Map */}
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}