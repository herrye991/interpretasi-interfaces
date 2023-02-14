import React from 'react';
import ReactDOM from 'react-dom';
import FirstSection from './includes/FirstSection';
import SecondSection from './includes/SecondSection';
import ThirdSection from './includes/ThirdSection';
import FourthSection from './includes/FourthSection';

export default function App() {
    return (
        <div data-elementor-type="wp-page" data-elementor-id="12" className="elementor elementor-12">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    );
}

if (document.getElementById('elementor_page_builder')) {
    ReactDOM.render(<App />, document.getElementById('elementor_page_builder'));
}