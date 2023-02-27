import React from 'react';
import { useEffect, useState } from 'react';
import Category from '../../helpers/Category';
import ENV from '../../helpers/ENV';
import API from './API/API';
import Moment from 'moment';

export default function ArticleUserContentLeft() {
    let [article, setArticle] = useState([]);
    let [paginate, setPaginate] = React.useState([]);
    const currentURL = window.location.href;
    const newURL = currentURL.replace('?p=' + paginate.current_page, '')
    // useEffect(() => {
    const getArticle = async () => {
        const response = await API.article();
        console.log(response);
        // setArticle(response.data.data);
        // setPaginate(response.data.meta);
    }
    getArticle();
    // }, []);
    return (
        ''
        // <div className="bnq-post-list-item">
        //     {article.map((row, idx) =>
        //         <article key={idx} className="pfy-post-item d-flex align-items-center pfy-scale post-741 post type-post status-publish format-video has-post-thumbnail hentry category-food tag-apps tag-asia tag-food post_format-post-format-video">
        //             <div className="pfy-post-thumb pfy-img-commn-style">
        //                 <a href={ENV.articleURL(row.url)}><img width="1500" height="1000" src={row.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" sizes="(max-width: 1500px) 100vw, 1500px" /></a>
        //             </div>
        //             <div className="pfy-post-content no_thumb_cat">
        //                 {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={ENV.categoryURL(cat.unique_name)} style={cat.background_color}><span>{cat.name}</span></a> })}
        //                 <h3 title={row.title} className="pfy-post-title"><a href={ENV.articleURL(row.url)}>{row.title}</a></h3>
        //                 {/* <div className="pfy-post-excerpt"></div> */}
        //                 <ul className="pfy-post-gd-meta">
        //                     <li>Oleh <a href={ENV.userURL(row.user.id)} title={"Diposting oleh " + row.user.name} rel="author">{row.user.name}</a></li>
        //                     <li><i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('d MMM YYYY')}</li>
        //                     <li><i className="far fa-comments"></i> {row.comments_count} Komentar</li>
        //                 </ul>
        //             </div>
        //         </article>
        //     )}
        //     <div className="pfy-pagination">
        //         <ul className="page-numbers">
        //             {(() => {
        //                 if (paginate.last_page > 1) {
        //                     if (paginate.current_page == 1) {
        //                         return (
        //                             <div>
        //                                 <li><span className="page-numbers current">{paginate.current_page}</span></li>
        //                                 <li><span className="page-numbers dots">…</span></li>
        //                                 <li><a className="page-numbers" href={newURL + "?p=" + paginate.last_page}>{paginate.last_page}</a></li>
        //                                 <li><a className="next page-numbers" href={newURL + "?p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
        //                             </div>
        //                         )
        //                     } else {
        //                         if (paginate.current_page !== paginate.last_page) {
        //                             if (paginate.current_page == 2) {
        //                                 return (
        //                                     <div>
        //                                         <li><a className="prev page-numbers" href={newURL + "?p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
        //                                         <li><a className="page-numbers" href={newURL + "?p=" + (paginate.current_page - 1)}>{(paginate.current_page - 1)}</a></li>
        //                                         <li><span className="page-numbers current">{paginate.current_page}</span></li>
        //                                         <li><span className="page-numbers dots">…</span></li>
        //                                         <li><a className="page-numbers" href={newURL + "?p=" + paginate.last_page}>{paginate.last_page}</a></li>
        //                                         <li><a className="next page-numbers" href={newURL + "?p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
        //                                     </div>
        //                                 )
        //                             } else if (paginate.current_page == (paginate.last_page - 1)) {
        //                                 return (
        //                                     <div>
        //                                         <li><a className="prev page-numbers" href={newURL + "?p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
        //                                         <li><a className="page-numbers" href={newURL + "?p=" + 1}>1</a></li>
        //                                         <li><span className="page-numbers dots">…</span></li>
        //                                         <li><span className="page-numbers current">{paginate.current_page}</span></li>
        //                                         <li><a className="page-numbers" href={newURL + "?p=" + paginate.last_page}>{paginate.last_page}</a></li>
        //                                         <li><a className="next page-numbers" href={newURL + "?p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
        //                                     </div>
        //                                 )
        //                             } else {
        //                                 return (
        //                                     <div>
        //                                         <li><a className="prev page-numbers" href={newURL + "?p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
        //                                         <li><a className="page-numbers" href={newURL + "?p=" + 1}>1</a></li>
        //                                         <li><span className="page-numbers dots">…</span></li>
        //                                         <li><span className="page-numbers current">{paginate.current_page}</span></li>
        //                                         <li><span className="page-numbers dots">…</span></li>
        //                                         <li><a className="page-numbers" href={newURL + "?p=" + paginate.last_page}>{paginate.last_page}</a></li>
        //                                         <li><a className="next page-numbers" href={newURL + "?p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
        //                                     </div>
        //                                 )
        //                             }

        //                         } else {
        //                             return (
        //                                 <div>
        //                                     <li><a className="prev page-numbers" href={newURL + "?p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
        //                                     <li><a className="page-numbers" href={newURL + "?p=" + 1}>1</a></li>
        //                                     <li><span className="page-numbers dots">…</span></li>
        //                                     <li><span className="page-numbers current">{paginate.current_page}</span></li>
        //                                 </div>
        //                             )
        //                         }
        //                     }
        //                 }
        //             })()}
        //         </ul>
        //     </div>
        // </div>
    );
}