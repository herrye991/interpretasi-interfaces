import React from 'react';
import ReactDOM from 'react-dom';
import FirstSection from './includes/FirstSection';
import SecondSection from './includes/SecondSection';
import ThirdSection from './includes/ThirdSection';
import FourthSection from './includes/FourthSection';
import ArticleShow from './includes/ArticleShow';

function Index() {
    return (
        <div data-elementor-type="wp-page" data-elementor-id="12" className="elementor elementor-12">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    );
}

function Show() {
    return (
        <ArticleShow />
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

if (document.getElementById('show')) {
    ReactDOM.render(<Show />, document.getElementById('show'));
}