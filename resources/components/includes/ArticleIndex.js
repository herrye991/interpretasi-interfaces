import React from 'react';
import FirstSection from './ArticleIndex/FirstSection';
import SecondSection from './ArticleIndex/SecondSection';
import ThirdSection from './ArticleIndex/ThirdSection';
import FourthSection from './ArticleIndex/FourthSection';

export default function ArticleIndex() {
    return (
        <div data-elementor-type="wp-page" data-elementor-id="12" className="elementor elementor-12">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    );
}