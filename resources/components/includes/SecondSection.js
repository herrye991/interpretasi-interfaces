import React from "react";
import SecondSectionContent from "../contents/SecondSectionContent";

function SecondSection() {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-59a47fd elementor-section-full_width benqu-dark-one elementor-section-height-default elementor-section-height-default" data-id="59a47fd" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-53487e5" data-id="53487e5" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-2fa23fd elementor-widget elementor-widget-benqu-post-grid-carousel" data-id="2fa23fd" data-element_type="widget" data-widget_type="benqu-post-grid-carousel.default">
                            <div className="elementor-widget-container">
                                <div className="pfy-post-grid-carousel-wrap carousel-style-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="benqu-section-title-wrap text-left">
                                                    <h2>Trending Stories</h2>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-fluid">
                                        <SecondSectionContent></SecondSectionContent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecondSection