import React from 'react'
import FourthSectionContentLeft from '../contents/FourthSectionContentLeft';
import FourthSectionContentRight from '../contents/FourthSectionContentRight';

export default function FourthSection() {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-d5e4bac benqu-dark-one elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d5e4bac" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-e86651c" data-id="e86651c" data-element_type="column">
                    <FourthSectionContentLeft />
                </div>
                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c42926a" data-id="c42926a" data-element_type="column">
                    <FourthSectionContentRight />
                </div>
            </div>
        </section>
    );
}