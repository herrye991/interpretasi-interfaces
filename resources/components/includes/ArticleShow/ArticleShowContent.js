import React from 'react';
import ArticleShowContentLeft from '../../contents/ArticleShow/ArticleShowContentLeft';
import ArticleShowContentRight from '../../contents/ArticleShow/ArticleShowContentRight';

export default function ArticleShowContent() {
    
    return (
        <div className="row benqu-sticky-wrap" style={{ transform: "none" }}>
            <div className="col-xl-8 benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleShowContentLeft />
            </div>
            <div className="col-xl-4 col-lg-8 mx-auto benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                <ArticleShowContentRight />
            </div>
        </div>
    );
}