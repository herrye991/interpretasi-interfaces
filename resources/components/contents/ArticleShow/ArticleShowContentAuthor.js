import React from 'react'
import API from './API/API';
import { useEffect } from 'react';
import Env from '../../helpers/Env';

export default function ArticleShowContentAuthor() {
    let [user, setUser] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await API.article();
            setUser(response.data.data.user);
        }
        fetchData();
    }, []);
    return (
        <div className="benqu__author_bio__Wrapper">
            <div className="author-thumb">
                <a href={ Env.baseURL('user/' + user.id) }><img alt="" src={ user.photo } className="avatar avatar-180 photo" height="180" width="180" loading="lazy" decoding="async" /></a>
            </div>
            <div className="theme_author_Info">
                <a href={ Env.baseURL('user/' + user.id) }><h4 className="theme_author__Name">{ user.name }</h4></a>
                <h6 className="theme_author_Title">Tentang Penulis</h6>
                <p className="theme_author__Description">{ user.bio }</p>
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
        </div>
    );
}