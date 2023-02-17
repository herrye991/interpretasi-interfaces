import React from "react";
import ArticleShowContent from "../contents/ArticleShow/ArticleShowContent";
import OwlCarousel from 'react-owl-carousel';
import ArticleShowContentAuthor from "../contents/ArticleShow/ArticleShowContentAuthor";

export default function () {
    const options = {
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
    };
    return (
        <div className="pfy_single_post_wrapper pfy-inter-wraap" style={{ transform: "none"  }}>
            <div className="container" style={{ transform: "none"  }}>
                <div className="row benqu-sticky-wrap" style={{ transform: "none"  }}>
                    <div className="col-xl-8 benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                        <div className="theiaStickySidebar" style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none" }}>
                            <div className="ajax-scroll-post">
                                <div className="bnq__post_wap_loop">
                                    <ArticleShowContent />
                                    <ArticleShowContentAuthor />
                                    <div id="comments" className="comments-area">
                                        <h2 className="comments-title"> 1 Comment </h2>
                                        <ol className="comment-list">
                                            <li className="comment even thread-even depth-1 comment" id="comment-1">
                                                <div className="comment-body">
                                                    <div className="author-thumb">
                                                        <img alt="" src="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=60&amp;d=mm&amp;r=g" srcSet="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <h4 className="name">
                                                            <a href="https://wordpress.org/" rel="external nofollow ugc" className="url">A WordPress Commenter</a>
                                                        </h4>
                                                        <span className="comment-date">July 13, 2022</span>
                                                        <p>Hi, this is a comment. <br /> To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard. <br /> Commenter avatars come from <a href="https://en.gravatar.com/">Gravatar</a>. </p>
                                                            <div className="comment-footer">
                                                                <a rel="nofollow" className="comment-reply-link" href="https://itcroctheme.com/wp/demos/themes/benqu/fasion-trends-and-li-edelkoort-the-culture-shock-special-report/?replytocom=1#respond" data-commentid="1" data-postid="1" data-belowelement="comment-1" data-respondelement="respond" data-replyto="Reply to A WordPress Commenter" aria-label="Reply to A WordPress Commenter">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </li>
                                        </ol>
                                        <div id="respond" className="comment-respond">
                                            <h3 id="reply-title" className="comment-reply-title">Leave a comment <small>
                                                <a rel="nofollow" id="cancel-comment-reply-link" href="/wp/demos/themes/benqu/fasion-trends-and-li-edelkoort-the-culture-shock-special-report/#respond" style= {{ display:"none" }}>Cancel reply</a>
                                            </small>
                                            </h3>
                                            <form action="https://itcroctheme.com/wp/demos/themes/benqu/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate="">
                                                <p className="comment-notes">
                                                    <span id="email-notes">Your email address will not be published.</span>
                                                    <span className="required-field-message">Required fields are marked <span className="required">*</span>
                                                    </span>
                                                </p>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="input-field mb-30">
                                                            <input type="text" name="author" id="author" defaultValue="" placeholder="Name" size="22" tabIndex="1" aria-required="true" className="form_control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-field mb-30">
                                                            <input type="email" name="email" id="email" defaultValue="" placeholder="Email" size="22" tabIndex="2" aria-required="true" className="form_control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="input-field mb-30">
                                                            <input type="url" name="url" id="url" defaultValue="" placeholder="Website" size="22" tabIndex="2" aria-required="false" className="form_control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="comment-form-cookies-consent">
                                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
                                                        <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                                </p>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="input-field mb-30">
                                                            <textarea id="comment" className="form_control" name="comment" cols="77" rows="3" placeholder="Comment" aria-required="true"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="form-submit">
                                                    <input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" />
                                                        <input type="hidden" name="comment_post_ID" defaultValue="1" id="comment_post_ID" />
                                                            <input type="hidden" name="comment_parent" id="comment_parent" defaultValue="0" />
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="pfy-post-grid-wrap releted-post-wrap grid-style-6">
                                        <div className="row pfy-loadmore-info">
                                            <div className="col-lg-12">
                                                <h2 className="releted-title">You may also like</h2>
                                            </div>
                                            <div className="col-lg-6 pfy-grid-item">
                                                <div className="pfy-post-item item-act pfy-scale">
                                                    <div className="pfy-post-thumb pfy-img-commn-style">
                                                        <a className="post-thumb" href="https://itcroctheme.com/wp/demos/themes/benqu/trip-iqaluit-nunavut-a-canadian-arctic-city/">
                                                            <img width="1500" height="1000" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-2.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-2.jpg 1500w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-2-300x200.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-2-1024x683.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-2-768x512.jpg 768w" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                        </a>
                                                    </div>
                                                    <div className="pfy-post-content">
                                                        <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/fashion/" style={{ backgroundColor:"#fc16a8" }}>
                                                            <span>Fashion</span>
                                                        </a>
                                                        <h4 className="pfy-post-title">
                                                            <a href="https://itcroctheme.com/wp/demos/themes/benqu/trip-iqaluit-nunavut-a-canadian-arctic-city/">Trip Iqaluit Nunavut A Canadian Arctic City</a>
                                                        </h4>
                                                        <ul className="pfy-post-gd-meta">
                                                            <li>
                                                                <i className="far fa-user"></i>
                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/author/bnque/" title="Posts by David" rel="author">David</a>
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-calendar-alt"></i> Jul 07, 2022
                                                            </li>
                                                        </ul>
                                                        <div className="pfy-post-excerpt"> Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. a Vesti at bulum nec odio aea the dumm </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pfy-grid-item">
                                                <div className="pfy-post-item item-act pfy-scale">
                                                    <div className="pfy-post-thumb pfy-img-commn-style">
                                                        <a className="post-thumb" href="https://itcroctheme.com/wp/demos/themes/benqu/overcome-the-feeling-of-being-overwhelmed/">
                                                            <img width="1500" height="1000" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-3.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-3.jpg 1500w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-3-300x200.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-3-1024x683.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/07/fashion-3-768x512.jpg 768w" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                        </a>
                                                    </div>
                                                    <div className="pfy-post-content">
                                                        <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/fashion/" style={{ backgroundColor:"#fc16a8" }}>
                                                            <span>Fashion</span>
                                                        </a>
                                                        <h4 className="pfy-post-title">
                                                            <a href="https://itcroctheme.com/wp/demos/themes/benqu/overcome-the-feeling-of-being-overwhelmed/">Overcome The Feeling Of Being Overwhelmed</a>
                                                        </h4>
                                                        <ul className="pfy-post-gd-meta">
                                                            <li>
                                                                <i className="far fa-user"></i>
                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/author/bnque/" title="Posts by David" rel="author">David</a>
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-calendar-alt"></i> Jul 07, 2022
                                                            </li>
                                                        </ul>
                                                        <div className="pfy-post-excerpt"> Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. a Vesti at bulum nec odio aea the dumm </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="resize-sensor" style={{ position: "absolute", inset: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden"  }}>
                                        <div className="resize-sensor-expand" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden"  }}>
                                            <div style={{ position: "absolute", left: "0px", top: "0px", transition: "all 0s ease 0s", width: "1046px", height: "6389px"  }}></div>
                                        </div>
                                        <div className="resize-sensor-shrink" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden"  }}>
                                            <div style={{ position: "absolute", left: "0", top: "0, transition: 0s", width: "200%", height: "200%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-8 mx-auto benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px"  }}>
                                <div className="theiaStickySidebar" style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none"  }}>
                                    <aside id="secondary" className="widget-area">
                                        <section id="benqu_post_slider-2" className="widget widget_benqu_post_slider">
                                            <div className="recent-post">
                                                <div className="recent-news-widget">
                                                    <div className="benqu-section-title-wrap text-left">
                                                        <h2 className="widget-title">Trending</h2>
                                                        <span></span>
                                                    </div>
                                                    <OwlCarousel className="widget-post-slider-wrap owl-carousel owl-loaded owl-drag owl-theme" {...options}>
                                                        <div className="owl-stage-outer">
                                                            <div className="owl-stage" style={{ transform: "translate3d(-1333px, 0px, 0px)", transition: "all 0s ease 0s", width: "4667px" }}>
                                                                <div className="owl-item cloned" style={{ width: "666.656px" }}>
                                                                    <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                        <a className="post-thumbnil" href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/">
                                                                            <img width="1920" height="1200" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last.jpg 1920w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-300x188.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1024x640.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-768x480.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1536x960.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-600x375.jpg 600w" sizes="(max-width: 1920px) 100vw, 1920px" />
                                                                        </a>
                                                                        <div className="pfy-post-content text-center">
                                                                            <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/heroes/" style={{ backgroundColor:"#7fc61b" }}>
                                                                                <span>HEROES</span>
                                                                            </a>
                                                                            <h4 className="pfy-post-title">
                                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/">Assassin’s Creed Clip Swiss as State Secretart for</a>
                                                                            </h4>
                                                                            <div className="pfy-post-meta">
                                                                                <ul className="justify-content-center">
                                                                                    <li>
                                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item cloned" style={{ width: "666.656px" }}>
                                                                    <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                        <a className="post-thumbnil" href="https://itcroctheme.com/wp/demos/themes/benqu/monster-jam-titans-success-farms-their-efforts/">
                                                                            <img width="2500" height="1563" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1.jpg 2500w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-300x188.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-1024x640.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-768x480.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-1536x960.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-2048x1280.jpg 2048w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-600x375.jpg 600w" sizes="(max-width: 2500px) 100vw, 2500px" />
                                                                        </a>
                                                                        <div className="pfy-post-content text-center">
                                                                            <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/fantasy/" style={{ backgroundColor:"#ff002a" }}>
                                                                                <span>FANTASY</span>
                                                                            </a>
                                                                            <h4 className="pfy-post-title">
                                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/monster-jam-titans-success-farms-their-efforts/">Monster Jam Titans success farms their efforts</a>
                                                                            </h4>
                                                                            <div className="pfy-post-meta">
                                                                                <ul className="justify-content-center">
                                                                                    <li>
                                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item active" style={{ width: "666.656px" }}>
                                                                    <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                        <a className="post-thumbnil" href="https://itcroctheme.com/wp/demos/themes/benqu/we-believe-announce-will-the-iphone-this-day-3/">
                                                                            <img width="2500" height="1593" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img.jpg 2500w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-300x191.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-1024x652.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-768x489.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-1536x979.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-2048x1305.jpg 2048w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-600x382.jpg 600w" sizes="(max-width: 2500px) 100vw, 2500px" />
                                                                        </a>
                                                                        <div className="pfy-post-content text-center">
                                                                            <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/heroes/" style={{ backgroundColor:"#7fc61b" }}>
                                                                                <span>HEROES</span>
                                                                            </a>
                                                                            <h4 className="pfy-post-title">
                                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/we-believe-announce-will-the-iphone-this-day-3/">We Believe Announce Will the iPhone this Day By Kinds Game Play History</a>
                                                                            </h4>
                                                                            <div className="pfy-post-meta">
                                                                                <ul className="justify-content-center">
                                                                                    <li>
                                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item" style={{ width: "666.656px" }}>
                                                                    <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                        <a className="post-thumbnil" href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/">
                                                                            <img width="1920" height="1200" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last.jpg 1920w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-300x188.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1024x640.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-768x480.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1536x960.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-600x375.jpg 600w" sizes="(max-width: 1920px) 100vw, 1920px" />
                                                                        </a>
                                                                        <div className="pfy-post-content text-center">
                                                                            <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/heroes/" style={{ backgroundColor:"#7fc61b" }}>
                                                                                <span>HEROES</span>
                                                                            </a>
                                                                            <h4 className="pfy-post-title">
                                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/">Assassin’s Creed Clip Swiss as State Secretart for</a>
                                                                            </h4>
                                                                            <div className="pfy-post-meta">
                                                                                <ul className="justify-content-center">
                                                                                    <li>
                                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item" style={{ width: "666.656px" }}>
                                                                    <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                        <a className="post-thumbnil" href="https://itcroctheme.com/wp/demos/themes/benqu/monster-jam-titans-success-farms-their-efforts/">
                                                                            <img width="2500" height="1563" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1.jpg 2500w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-300x188.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-1024x640.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-768x480.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-1536x960.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-2048x1280.jpg 2048w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-600x375.jpg 600w" sizes="(max-width: 2500px) 100vw, 2500px" />
                                                                        </a>
                                                                        <div className="pfy-post-content text-center">
                                                                            <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/fantasy/" style={{ backgroundColor:"#ff002a" }}>
                                                                                <span>FANTASY</span>
                                                                            </a>
                                                                            <h4 className="pfy-post-title">
                                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/monster-jam-titans-success-farms-their-efforts/">Monster Jam Titans success farms their efforts</a>
                                                                            </h4>
                                                                            <div className="pfy-post-meta">
                                                                                <ul className="justify-content-center">
                                                                                    <li>
                                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item cloned" style={{ width: "666.656px" }}>
                                                                    <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                        <a className="post-thumbnil" href="https://itcroctheme.com/wp/demos/themes/benqu/we-believe-announce-will-the-iphone-this-day-3/">
                                                                            <img width="2500" height="1593" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img.jpg 2500w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-300x191.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-1024x652.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-768x489.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-1536x979.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-2048x1305.jpg 2048w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-600x382.jpg 600w" sizes="(max-width: 2500px) 100vw, 2500px" />
                                                                        </a>
                                                                        <div className="pfy-post-content text-center">
                                                                            <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/heroes/" style={{ backgroundColor:"#7fc61b" }}>
                                                                                <span>HEROES</span>
                                                                            </a>
                                                                            <h4 className="pfy-post-title">
                                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/we-believe-announce-will-the-iphone-this-day-3/">We Believe Announce Will the iPhone this Day By Kinds Game Play History</a>
                                                                            </h4>
                                                                            <div className="pfy-post-meta">
                                                                                <ul className="justify-content-center">
                                                                                    <li>
                                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item cloned" style={{ width: "666.656px" }}>
                                                                    <div className="pfy-post-slider-item pfy-img-commn-style">
                                                                        <a className="post-thumbnil" href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/">
                                                                            <img width="1920" height="1200" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last.jpg" className="attachment-full size-full wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last.jpg 1920w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-300x188.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1024x640.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-768x480.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1536x960.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-600x375.jpg 600w" sizes="(max-width: 1920px) 100vw, 1920px" />
                                                                        </a>
                                                                        <div className="pfy-post-content text-center">
                                                                            <a className="benqu-cate-badge" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/heroes/" style={{ backgroundColor:"#7fc61b" }}>
                                                                                <span>HEROES</span>
                                                                            </a>
                                                                            <h4 className="pfy-post-title">
                                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/">Assassin’s Creed Clip Swiss as State Secretart for</a>
                                                                            </h4>
                                                                            <div className="pfy-post-meta">
                                                                                <ul className="justify-content-center">
                                                                                    <li>
                                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="owl-nav disabled">
                                                            <button type="button" role="presentation" className="owl-prev">
                                                                <span aria-label="Previous">‹</span>
                                                            </button>
                                                            <button type="button" role="presentation" className="owl-next">
                                                                <span aria-label="Next">›</span>
                                                            </button>
                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </div>
                                        </section>
                                        <section id="benqu_latest_news_widget-3" className="widget benqu_latest_news_widget">
                                            <div className="benqu-section-title-wrap text-left">
                                                <h2 className="widget-title">Terbaru</h2>
                                                <span></span>
                                            </div>
                                            <div className="recent-posts-widget">
                                                <div className="pfy-post-grid-wrap grid-style-tb">
                                                    <div className="pfy-post-item pfy-scale pfy-img-commn-style">
                                                        <div className="benqu__post-content pfy-scale d-flex">
                                                            <div className="pfy-post-thumb">
                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/we-believe-announce-will-the-iphone-this-day-3/">
                                                                    <img width="640" height="408" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-1024x652.jpg" className="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-1024x652.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-300x191.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-768x489.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-1536x979.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-2048x1305.jpg 2048w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/heros-img-600x382.jpg 600w" sizes="(max-width: 640px) 100vw, 640px" />
                                                                </a>
                                                            </div>
                                                            <div className="pfy-post-content">
                                                                <div className="pfy-post-meta-tb d-flex">
                                                                    <a className="benqu-cate-name" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/heroes/" style={{ color:"#7fc61b" }}>
                                                                        <span>HEROES</span>
                                                                    </a>
                                                                    <span className="pfy-post-date">
                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022 </span>
                                                                </div>
                                                                <h4 className="benqu__post-title pfy-post-title hover-title">
                                                                    <a href="https://itcroctheme.com/wp/demos/themes/benqu/we-believe-announce-will-the-iphone-this-day-3/" rel="bookmark" title="We Believe Announce Will the iPhone this Day By Kinds Game Play History">We Believe Announce Will the iPhone this Day By Kinds</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pfy-post-item pfy-scale pfy-img-commn-style">
                                                        <div className="benqu__post-content pfy-scale d-flex">
                                                            <div className="pfy-post-thumb">
                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/">
                                                                    <img width="640" height="400" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1024x640.jpg" className="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1024x640.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-300x188.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-768x480.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-1536x960.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last-600x375.jpg 600w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/action-last.jpg 1920w" sizes="(max-width: 640px) 100vw, 640px" />
                                                                </a>
                                                            </div>
                                                            <div className="pfy-post-content">
                                                                <div className="pfy-post-meta-tb d-flex">
                                                                    <a className="benqu-cate-name" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/heroes/" style={{ color:"#7fc61b" }}>
                                                                        <span>HEROES</span>
                                                                    </a>
                                                                    <span className="pfy-post-date">
                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022 </span>
                                                                </div>
                                                                <h4 className="benqu__post-title pfy-post-title hover-title">
                                                                    <a href="https://itcroctheme.com/wp/demos/themes/benqu/assassins-creed-clip-swiss-as-state-secretart-for/" rel="bookmark" title="Assassin’s Creed Clip Swiss as State Secretart for">Assassin’s Creed Clip Swiss as State Secretart for</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pfy-post-item pfy-scale pfy-img-commn-style">
                                                        <div className="benqu__post-content pfy-scale d-flex">
                                                            <div className="pfy-post-thumb">
                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/monster-jam-titans-success-farms-their-efforts/">
                                                                    <img width="640" height="400" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-1024x640.jpg" className="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-1024x640.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-300x188.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-768x480.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-1536x960.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-2048x1280.jpg 2048w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/fantacy-1-600x375.jpg 600w" sizes="(max-width: 640px) 100vw, 640px" />
                                                                </a>
                                                            </div>
                                                            <div className="pfy-post-content">
                                                                <div className="pfy-post-meta-tb d-flex">
                                                                    <a className="benqu-cate-name" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/fantasy/" style={{ color:"#ff002a" }}>
                                                                        <span>FANTASY</span>
                                                                    </a>
                                                                    <span className="pfy-post-date">
                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022 </span>
                                                                </div>
                                                                <h4 className="benqu__post-title pfy-post-title hover-title">
                                                                    <a href="https://itcroctheme.com/wp/demos/themes/benqu/monster-jam-titans-success-farms-their-efforts/" rel="bookmark" title="Monster Jam Titans success farms their efforts">Monster Jam Titans success farms their efforts</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pfy-post-item pfy-scale pfy-img-commn-style">
                                                        <div className="benqu__post-content pfy-scale d-flex">
                                                            <div className="pfy-post-thumb">
                                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/emirates-palace-spends-that-a-hefty-sum-for/">
                                                                    <img width="640" height="360" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/racing-new-1024x576.jpg" className="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/racing-new-1024x576.jpg 1024w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/racing-new-300x169.jpg 300w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/racing-new-768x432.jpg 768w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/racing-new-1536x864.jpg 1536w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/racing-new-600x338.jpg 600w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/racing-new.jpg 1920w" sizes="(max-width: 640px) 100vw, 640px" />
                                                                </a>
                                                            </div>
                                                            <div className="pfy-post-content">
                                                                <div className="pfy-post-meta-tb d-flex">
                                                                    <a className="benqu-cate-name" href="https://itcroctheme.com/wp/demos/themes/benqu/category/gaming/racing/" style={{ color:"#cc5b06" }}>
                                                                        <span>Racing</span>
                                                                    </a>
                                                                    <span className="pfy-post-date">
                                                                        <i className="fal fa-calendar-alt"></i> Aug 08, 2022 </span>
                                                                </div>
                                                                <h4 className="benqu__post-title pfy-post-title hover-title">
                                                                    <a href="https://itcroctheme.com/wp/demos/themes/benqu/emirates-palace-spends-that-a-hefty-sum-for/" rel="bookmark" title="Emirates Palace Spends that a Hefty Sum For…">Emirates Palace Spends that a Hefty Sum For…</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section id="tag_cloud-3" className="widget widget_tag_cloud">
                                            <div className="benqu-section-title-wrap text-left">
                                                <h2 className="widget-title">Popular Tag</h2>
                                                <span></span>
                                            </div>
                                            <div className="tagcloud">
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/apps/" className="tag-cloud-link tag-link-21 tag-link-position-1" style={{ fontSize: "13.833333333333pt" }} aria-label="Apps (4 items)">Apps <span className="tag-link-count"> (4)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/article/" className="tag-cloud-link tag-link-35 tag-link-position-2" style={{ fontSize: "20.395833333333pt" }} aria-label="article (13 items)">article <span className="tag-link-count"> (13)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/asia/" className="tag-cloud-link tag-link-18 tag-link-position-3" style={{ fontSize: "8pt" }} aria-label="Asia (1 item)">Asia <span className="tag-link-count"> (1)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/covid-19/" className="tag-cloud-link tag-link-16 tag-link-position-4" style={{ fontSize: "16.75pt" }} aria-label="Covid-19 (7 items)">Covid-19 <span className="tag-link-count"> (7)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/creative/" className="tag-cloud-link tag-link-12 tag-link-position-5" style={{ fontSize: "18.791666666667pt" }} aria-label="Creative (10 items)">Creative <span className="tag-link-count"> (10)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/design/" className="tag-cloud-link tag-link-23 tag-link-position-6" style={{ fontSize: "8pt" }} aria-label="Design (1 item)">Design <span className="tag-link-count"> (1)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/fashion/" className="tag-cloud-link tag-link-10 tag-link-position-7" style={{ fontSize: "22pt" }} aria-label="Fashion (17 items)">Fashion <span className="tag-link-count"> (17)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/feature/" className="tag-cloud-link tag-link-11 tag-link-position-8" style={{ fontSize: "10.625pt" }} aria-label="Feature (2 items)">Feature <span className="tag-link-count"> (2)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/food/" className="tag-cloud-link tag-link-13 tag-link-position-9" style={{ fontSize: "20.395833333333pt" }} aria-label="Food (13 items)">Food <span className="tag-link-count"> (13)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/game/" className="tag-cloud-link tag-link-75 tag-link-position-10" style={{ fontSize: "13.833333333333pt" }} aria-label="game (4 items)">game <span className="tag-link-count"> (4)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/helth/" className="tag-cloud-link tag-link-22 tag-link-position-11" style={{ fontSize: "8pt" }} aria-label="Helth (1 item)">Helth <span className="tag-link-count"> (1)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/maldives/" className="tag-cloud-link tag-link-32 tag-link-position-12" style={{ fontSize: "8pt" }} aria-label="Maldives (1 item)">Maldives <span className="tag-link-count"> (1)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/melting/" className="tag-cloud-link tag-link-19 tag-link-position-13" style={{ fontSize: "8pt" }} aria-label="Melting (1 item)">Melting <span className="tag-link-count"> (1)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/movies/" className="tag-cloud-link tag-link-31 tag-link-position-14" style={{ fontSize: "8pt" }} aria-label="Movies (1 item)">Movies <span className="tag-link-count"> (1)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/music/" className="tag-cloud-link tag-link-29 tag-link-position-15" style={{ fontSize: "15pt" }} aria-label="music (5 items)">music <span className="tag-link-count"> (5)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/news/" className="tag-cloud-link tag-link-17 tag-link-position-16" style={{ fontSize: "15pt" }} aria-label="News (5 items)">News <span className="tag-link-count"> (5)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/populer/" className="tag-cloud-link tag-link-28 tag-link-position-17" style={{ fontSize: "10.625pt" }} aria-label="Populer (2 items)">Populer <span className="tag-link-count"> (2)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/sports/" className="tag-cloud-link tag-link-14 tag-link-position-18" style={{ fontSize: "18.208333333333pt" }} aria-label="Sports (9 items)">Sports <span className="tag-link-count"> (9)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/tech/" className="tag-cloud-link tag-link-15 tag-link-position-19" style={{ fontSize: "16.75pt" }} aria-label="Tech (7 items)">Tech <span className="tag-link-count"> (7)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/travel/" className="tag-cloud-link tag-link-9 tag-link-position-20" style={{ fontSize: "18.208333333333pt" }} aria-label="Travel (9 items)">Travel <span className="tag-link-count"> (9)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/trend/" className="tag-cloud-link tag-link-34 tag-link-position-21" style={{ fontSize: "12.375pt" }} aria-label="trend (3 items)">trend <span className="tag-link-count"> (3)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/trending/" className="tag-cloud-link tag-link-24 tag-link-position-22" style={{ fontSize: "8pt" }} aria-label="Trending (1 item)">Trending <span className="tag-link-count"> (1)</span>
                                                </a>
                                                <a href="https://itcroctheme.com/wp/demos/themes/benqu/tag/world/" className="tag-cloud-link tag-link-20 tag-link-position-23" style={{ fontSize: "8pt" }} aria-label="World (1 item)">World <span className="tag-link-count"> (1)</span>
                                                </a>
                                            </div>
                                        </section>
                                        <section id="media_image-3" className="widget widget_media_image">
                                            <a href="#" style={{ contentAlign: "center" }}>
                                                <img width="351" height="545" src="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/adds.jpg" className="image wp-image-1492  attachment-full size-full" alt="" decoding="async" loading="lazy" style={{ maxWidth: "100%", height: "auto" }} srcSet="https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/adds.jpg 351w, https://itcroctheme.com/wp/demos/themes/benqu/wp-content/uploads/2022/08/adds-193x300.jpg 193w" sizes="(max-width: 351px) 100vw, 351px" />
                                            </a>
                                        </section>
                                    </aside>
                                    <div className="resize-sensor" style={{ position: "absolute", inset: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
                                        <div className="resize-sensor-expand" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden"  }}>
                                            <div style={{ position: "absolute", left: "0px", top: "0px", transition: "all 0s ease 0s", width: "701px", height: "2603px" }}></div>
                                        </div>
                                        <div className="resize-sensor-shrink" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden"  }}>
                                            <div style={{ position: "absolute", left: "0", top: "0", transition: "0s", width: "200%", height: "200%"  }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
}