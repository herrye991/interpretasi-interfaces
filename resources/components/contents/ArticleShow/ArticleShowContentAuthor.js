import React from 'react'
import * as API from './API/Article';
import { useEffect } from 'react';

export default function ArticleShowContentAuthor() {
    let [user, setUser] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await API.getArticle();
            setUser(response.data.data.user);
        }
        fetchData();
    }, []);
    return (
        <div className="benqu__author_bio__Wrapper">
            <div className="author-thumb">
                <img alt="" src={ user.photo } className="avatar avatar-180 photo" height="180" width="180" loading="lazy" decoding="async" />
            </div>
            <div className="theme_author_Info">
                <h4 className="theme_author__Name">{ user.name }</h4>
                <h6 className="theme_author_Title">Tentang Penulis</h6>
                <p className="theme_author__Description">There are many variations of passages of Lorem Ipsum available the majority have suffered alteration in that some form by injected humour or randomised words which of Lorem Ipsum embarrassing.</p>
                <div className="theme_author_socials_icon">
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
                </div>
            </div>
        </div>
    );
}