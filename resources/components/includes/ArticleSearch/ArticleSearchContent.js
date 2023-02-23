import React from 'react';
import ArticleSearchContentLeft from '../../contents/ArticleSearch/ArticleSearchContentLeft';
import ArticleShowContentRight from '../../contents/ArticleShow/ArticleShowContentRight';

export default function ArticleSearchContent() {
    return (
        <div className="row benqu-sticky-wrap" style={{ transform: "none" }}>
            <div className="col-xl-8 benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleSearchContentLeft />
            </div>
            <div className="col-xl-4 col-lg-8 mx-auto benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleShowContentRight />
            </div>
        </div>
    );
}