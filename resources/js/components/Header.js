import React from 'react';
import Logo from '../../images/logo.svg';
import LogoWhite from '../../images/logo-white.svg';
import MainAdd from '../../images/main-add.jpg';

function Header() {
    return (
        <header className="benqu-main-header">
            <div className="pfy-top-bar" id="pfytopbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="pfy-top-left">
                                <div className="topbar-date">
                                    <span><i className="fal fa-calendar-alt"></i> January 31, 2023</span>
                                </div>
                                <div className="tp-news-ticker">
                                    <div className="breaking-heading"><i className="far fa-fire-alt"></i> Trending News:</div>
                                    <div className="pfy-breakingnews">
                                        <ul className="breaking-headline-active owl-carousel">
                                            <li><a href="we-believe-announce-will-the-iphone-this-day-3/index.html">We
                                                Believe Announce Will the iPhone this Day...</a></li>
                                            <li><a href="assassins-creed-clip-swiss-as-state-secretart-for/index.html">Assassin’s
                                                Creed Clip Swiss as State Secretart for</a></li>
                                            <li><a href="monster-jam-titans-success-farms-their-efforts/index.html">Monster
                                                Jam Titans success farms their efforts</a></li>
                                            <li><a href="emirates-palace-spends-that-a-hefty-sum-for/index.html">Emirates
                                                Palace Spends that a Hefty Sum For…</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 col-12 text-end">
                            <div className="pfy-top-right">
                                <div className="user-login">
                                    <a href="contact-us/index.html"><i className="fas fa-user-alt"></i></a>
                                </div>
                                <div className="socila-title">
                                    <h5>Follow Us</h5>
                                </div>
                                <div className="social-info">
                                    <a href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://linkedin.com/"><i className="fab fa-instagram"></i></a>
                                    <a href="https://youtube.com/"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pfy-logo-wrap">
                <div className="container">
                    <div className="pfy-logo--box d-flex justify-content-between align-items-center">
                        <div className="pfy-logo d-flex  align-items-center">
                            <a className="site-logo" href="index.html">
                                <img src={Logo} alt="Logo" />
                            </a>
                            <a className="site-logo light-logo" href="index.html">
                                <img src={LogoWhite} alt="Logo" />
                            </a>
                        </div>
                        <div className="pfy-ad">
                            <a href="#">
                                <img src={MainAdd} alt="ads" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="stickyHeader" className="header-menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8 col-md-7">
                            <div className="mainmenu">
                                <div className="site-navigation">
                                    <ul id="menu-primary-menu" className="navigation clearfix">
                                        <li id="menu-item-1726"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-1726">
                                            <a href="index.html" aria-current="page">Home</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1721"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12 current_page_item menu-item-1721">
                                                    <a href="index.html" aria-current="page">Home 01 &#8211; Main</a>
                                                </li>
                                                <li id="menu-item-1725"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1725">
                                                    <a href="home-two/index.html">Home 02 &#8211; Magazine</a>
                                                </li>
                                                <li id="menu-item-1724"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1724">
                                                    <a href="home-three/index.html">Home 03 &#8211; Gaming</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1727"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1727">
                                            <a href="#">Features</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1728"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1728">
                                                    <a href="author/christopher-adnan/index.html">Author Details</a>
                                                </li>
                                                <li id="menu-item-1736"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1736">
                                                    <a href="category/food/index.html">Blog Style – 01</a>
                                                </li>
                                                <li id="menu-item-1737"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1737">
                                                    <a href="category/tech/index.html">Blog Style – 02</a>
                                                </li>
                                                <li id="menu-item-1748"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1748">
                                                    <a href="category/travel/index.html">Blog Style – 03</a>
                                                </li>
                                                <li id="menu-item-1749"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1749">
                                                    <a href="category/gaming/index.html">Blog Style – 04</a>
                                                </li>
                                                <li id="menu-item-1722"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1722">
                                                    <a href="blog/index.html">Blog Default</a>
                                                </li>
                                                <li id="menu-item-1752"
                                                    className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1752">
                                                    <a
                                                        href="smarter-food-choices-101-tips-for-the-busy-women/index.html">Post
                                                        Single – 01</a>
                                                </li>
                                                <li id="menu-item-1750"
                                                    className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1750">
                                                    <a href="we-believe-announce-will-the-iphone-this-day-3/index.html">Post
                                                        Single – 02</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1729"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1729">
                                            <a href="#">Categorys</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1739"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1739">
                                                    <a href="category/food/index.html">Food</a>
                                                </li>
                                                <li id="menu-item-1742"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1742">
                                                    <a href="category/sports/index.html">Sports</a>
                                                </li>
                                                <li id="menu-item-1744"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1744">
                                                    <a href="category/creative/index.html">Creative</a>
                                                </li>
                                                <li id="menu-item-1740"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1740">
                                                    <a href="category/travel/index.html">Travel</a>
                                                </li>
                                                <li id="menu-item-1746"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1746">
                                                    <a href="category/gaming/fantasy/index.html">FANTASY</a>
                                                </li>
                                                <li id="menu-item-1743"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1743">
                                                    <a href="category/music/index.html">Music</a>
                                                </li>
                                                <li id="menu-item-1738"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1738">
                                                    <a href="category/tech/index.html">Tech</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1731"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1731">
                                            <a href="shop/index.html">Shop</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1735"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735">
                                                    <a href="shop/index.html">Shop</a>
                                                </li>
                                                <li id="menu-item-1734"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1734">
                                                    <a href="my-account/index.html">My account</a>
                                                </li>
                                                <li id="menu-item-1732"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1732">
                                                    <a href="cart/index.html">Cart</a>
                                                </li>
                                                <li id="menu-item-1733"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1733">
                                                    <a href="checkout/index.html">Checkout</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1730"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1730">
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1723"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1723">
                                                    <a href="about-us/index.html">About Us</a>
                                                </li>
                                                <li id="menu-item-1764"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1764">
                                                    <a href="team/index.html">Team</a>
                                                </li>
                                                <li id="menu-item-1765"
                                                    className="menu-item menu-item-type-post_type menu-item-object-benqu_team menu-item-1765">
                                                    <a href="benqu_team/joseph-mackey-2/index.html">Team Single</a>
                                                </li>
                                                <li id="menu-item-1766"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1766">
                                                    <a href="404.html">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1753"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1753">
                                            <a href="#">Tags</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1754"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1754">
                                                    <a href="tag/fashion/index.html">Fashion</a>
                                                </li>
                                                <li id="menu-item-1755"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1755">
                                                    <a href="tag/article/index.html">article</a>
                                                </li>
                                                <li id="menu-item-1756"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1756">
                                                    <a href="tag/food/index.html">Food</a>
                                                </li>
                                                <li id="menu-item-1757"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1757">
                                                    <a href="tag/creative/index.html">Creative</a>
                                                </li>
                                                <li id="menu-item-1758"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1758">
                                                    <a href="tag/travel/index.html">Travel</a>
                                                </li>
                                                <li id="menu-item-1759"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1759">
                                                    <a href="tag/sports/index.html">Sports</a>
                                                </li>
                                                <li id="menu-item-1760"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1760">
                                                    <a href="tag/tech/index.html">Tech</a>
                                                </li>
                                                <li id="menu-item-1761"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-1761">
                                                    <a href="tag/covid-19/index.html">Covid-19</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1767"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767">
                                            <a href="contact-us/index.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hamburger_menu d-lg-none">
                                    <a href="javascript:void(0);" className="active">
                                        <div className="icon bar">
                                            <span><i className="far fa-bars"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="bnq-search">
                                    <form method="get"
                                        action="#">
                                        <input type="search" name="s" id="search" defaultValue="" placeholder="Search ..." />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="menu-right">
                                    <a href="my-account/index.html" className="pfy-btn pfy-btn-primery login-btn">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;