import React from 'react';
import FirstSectionContentLeft from '../contents/FirstSectionContentLeft';
import FirstSectionContentRight from '../contents/FirstSectionContentRight';

export default function FirstSection() {
    return (
        <section id="first-section" className="elementor-section elementor-top-section elementor-element elementor-element-a32e7b8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a32e7b8" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-344d8f9" data-id="344d8f9" data-element_type="column">
                    <FirstSectionContentLeft />
                </div>
                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d69ce08" data-id="d69ce08" data-element_type="column">
                    <FirstSectionContentRight />
                </div>
            </div>
        </section>
    );
}