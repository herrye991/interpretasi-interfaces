import React from 'react';
import ArticleUserContentLeft from '../../contents/ArticleUser/ArticleUserContentLeft';
import ArticleShowContentRight from '../../contents/ArticleShow/ArticleShowContentRight';
import Category from '../../helpers/Category';
import API from '../../helpers/API';

export default function ArticleUserContent() {
    let [author, setAuthor] = React.useState([]);
    React.useEffect(() => {
        const getAuthor = async () => {
            const response = await API.user();
            setAuthor(response.data.data);
        }
        getAuthor();
    }, [])
    return (
        <div className="row benqu-sticky-wrap" style={{ transform: "none" }}>
            <div className="benqu-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ol className="breadcrumb-item">
                                <li>
                                    <a href="#">Penulis</a>
                                </li>
                                <li>
                                    <a href="#">{author.name}</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pfy-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="authore__bio_wrap">
                                <div className="benqu__author_bio__Wrapper">
                                    <div className="author-thumb">
                                        <img alt="" src={author.photo} className="avatar avatar-230 photo" height="230" width="230" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="theme_author_Info">
                                        <h4 className="theme_author__Name">{author.name}</h4>
                                        <h6 className="theme_author_Title">Tentang Penulis</h6>
                                        <p className="theme_author__Description">{author.bio}</p>
                                        {/* <div className="theme_author_socials_icon">
                                    <a href="#" target="_blank" rel="nofollow" className="fb_aut" title="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="nofollow" className="twi_aut" title="Twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="nofollow" className="inst_aut" title="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="nofollow" className="pint_aut" title="Pinterest">
                                        <i className="fab fa-pinterest-p"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="nofollow" className="link_aut" title="linkedin">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div> */}
                                    </div>
                                    <div className="auth__total_post text-center">
                                        <h1>{author.articles_count}</h1>
                                        <h6>Artikel Dipublikasi</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                            <ArticleUserContentLeft />
                        </div>
                        <div className="col-xl-4 col-lg-8 mx-auto benqu-sticky-item" style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
                            <ArticleShowContentRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}