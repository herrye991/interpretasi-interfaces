import React from "react";
import EigthSectionContentLeft from "../contents/EigthSectionContentLeft";
import EigthSectionContentRight from "../contents/EigthSectionContentRight";

export default function EigthSection() {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-8d208e8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8d208e8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-aca965a" data-id="aca965a" data-element_type="column">
                    <EigthSectionContentLeft />
                </div>
                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1be6921" data-id="1be6921" data-element_type="column">
                    <EigthSectionContentRight />
                </div>
            </div>
        </section>
    );
}