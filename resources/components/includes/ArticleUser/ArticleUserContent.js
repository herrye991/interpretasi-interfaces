import React from 'react';
import ArticleUserContentLeft from '../../contents/ArticleUser/ArticleUserContentLeft';
import ArticleShowContentRight from '../../contents/ArticleShow/ArticleShowContentRight';
import Category from '../../helpers/Category';

export default function ArticleUserContent() {
    var pathURL = window.location.pathname;
    var id = pathURL.replace('/category/', '')
    return (
        <div className="row benqu-sticky-wrap" style={{ transform: "none" }}>
            <div className="benqu-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ol className="breadcrumb-item">
                                <li>
                                    <a href="#">Penulis</a>
                                </li>
                                <li>
                                    <a href="#">Hanny Novianty</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleUserContentLeft />
            </div>
            <div className="col-xl-4 col-lg-8 mx-auto benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleShowContentRight />
            </div>
        </div>
    );
}