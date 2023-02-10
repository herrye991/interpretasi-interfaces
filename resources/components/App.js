import React from 'react';
import ReactDOM from 'react-dom';
import TopSection from './includes/TopSection';
import TrendingSection from './includes/TrendingSection';

function App() {
    return (
        <div data-elementor-type="wp-page" data-elementor-id="12" className="elementor elementor-12">
            <TopSection></TopSection>
            <TrendingSection></TrendingSection>
        </div>
    );
}

export default App;

if (document.getElementById('elementor_page_builder')) {
    ReactDOM.render(<App />, document.getElementById('elementor_page_builder'));
}