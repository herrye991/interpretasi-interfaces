import React from 'react';
import ReactDOM from 'react-dom';
import TopSection from './includes/TopSection';

function App() {
    return (
        <div data-elementor-type="wp-page" data-elementor-id="12" className="elementor elementor-12">
            <TopSection></TopSection>
        </div>
    );
}

export default App;

if (document.getElementById('elementor_page_builder')) {
    ReactDOM.render(<App />, document.getElementById('elementor_page_builder'));
}