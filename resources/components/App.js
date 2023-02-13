import React from 'react';
import ReactDOM from 'react-dom';
import FirstSection from './includes/FirstSection';
import SecondSection from './includes/SecondSection';
import ThirdSection from './includes/ThirdSection';
import FourthSection from './includes/FourthSection';
import FifthSection from './includes/FifthSection';
import SixthSection from './includes/SixthSection';
import SeventhSection from './includes/SeventhSection';

export default function App() {
    return (
        <div data-elementor-type="wp-page" data-elementor-id="12" className="elementor elementor-12">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
        </div>
    );
}

if (document.getElementById('elementor_page_builder')) {
    ReactDOM.render(<App />, document.getElementById('elementor_page_builder'));
}