import React from 'react';
import ArticleTagContentLeft from '../../contents/ArticleTag/ArticleTagContentLeft';
import ArticleShowContentRight from '../../contents/ArticleShow/ArticleShowContentRight';

export default function ArticleTagContent() {
    var currentURL = window.location.pathname;
    var id = currentURL.replace('/tag/', '')
    return (
        <div className="row benqu-sticky-wrap" style={{ transform: "none" }}>
            <div class="benqu-breadcrumb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <ol class="breadcrumb-item">
                                <li>
                                    <a href="javascript:void(0);">Topik</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">{id}</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleTagContentLeft />
            </div>
            <div className="col-xl-4 col-lg-8 mx-auto benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleShowContentRight />
            </div>
        </div>
    );
}