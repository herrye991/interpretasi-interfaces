import React from "react";
import ThirdSectionContentLeft from "../contents/ThirdSectionContentLeft";
import ThirdSectionContentRight from "../contents/ThirdSectionContentRight";

function ThirdSection() {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-20f2fe5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="20f2fe5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-73dfef1" data-id="73dfef1" data-element_type="column">
                    <ThirdSectionContentLeft />
                </div>
                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b140c56" data-id="b140c56" data-element_type="column">
                    <ThirdSectionContentRight />
                </div>
            </div>
        </section>
    );
}

export default ThirdSection