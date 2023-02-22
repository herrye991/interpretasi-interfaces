import React from 'react';
import Category from '../../helpers/Category';
import ENV from '../../helpers/ENV';
import API from './API/API';
import Moment from 'moment';

export default function ArticleCategoryContentLeft() {
    let [article, setArticle] = React.useState([]);

    const getArticle = async () => {
        const response = await API.article();
        setArticle(response.data.data);
    }
    getArticle();
    return (
        <div className="bnq-post-list-item">
            {article.map((row, idx) =>
                <article key={idx} className="pfy-post-item d-flex align-items-center pfy-scale post-741 post type-post status-publish format-video has-post-thumbnail hentry category-food tag-apps tag-asia tag-food post_format-post-format-video">
                    <div className="pfy-post-thumb pfy-img-commn-style">
                        <a href={ ENV.articleURL(row.url) }><img width="1500" height="1000" src={row.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" sizes="(max-width: 1500px) 100vw, 1500px" /></a>
                    </div>
                    <div className="pfy-post-content no_thumb_cat">
                        {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={ENV.categoryURL(cat.unique_name)} style={cat.background_color}><span>{cat.name}</span></a>})}
                        <h3 title={row.title} className="pfy-post-title"><a href={ENV.articleURL(row.url)}>{row.title}</a></h3>
                        {/* <div className="pfy-post-excerpt"></div> */}
                        <ul className="pfy-post-gd-meta">
                            <li>Oleh <a href={ENV.userURL(row.user.id)} title={"Diposting oleh " + row.user.name} rel="author">{row.user.name}</a></li>
                            <li><i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('d, MMM YYYY')}</li>
                            <li><i className="far fa-comments"></i> {row.comments_count} Komentar</li>
                        </ul>
                    </div>
                </article>
            )}
        </div>
    );
}