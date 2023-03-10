import React from 'react';
import API from '../../helpers/API';
import ENV from '../../helpers/ENV';
import Category from '../../helpers/Category';
import Moment from 'moment';
import Text from '../../helpers/Text';

export default function ArticleSearchContentLeft() {
    let [article, setArticle] = React.useState([]);
    let [paginate, setPaginate] = React.useState([]);
    const currentURL = window.location.href;
    const newURL = currentURL.replace('&p=' + paginate.current_page, '')

    React.useEffect(() => {
        const getArticle = async () => {
            const response = await API.articleSearch();
            setArticle(response.data.data);
            setPaginate(response.data.meta);
        }
        getArticle();
    }, [])
    return (
        <section>
            {article.length > 0 ?
                <div className="bnq-post-list-item">
                    {article.map((row, idx) =>
                        <article key={idx} className="pfy-post-item d-flex align-items-center pfy-scale post-741 post type-post status-publish format-video has-post-thumbnail hentry category-food tag-apps tag-asia tag-food post_format-post-format-video">
                            <div className="pfy-post-thumb pfy-img-commn-style">
                                <a href={ENV.articleURL(row.url)}><img width="1500" height="1000" src={row.image} className="attachment-full size-full wp-post-image" alt="" decoding="async" sizes="(max-width: 1500px) 100vw, 1500px" /></a>
                            </div>
                            <div className="pfy-post-content no_thumb_cat">
                                {Category(row.category_id).map((cat, idx) => { return <a key={idx} className="benqu-cate-badge" href={ENV.categoryURL(cat.unique_name)} style={cat.background_color}><span>{cat.name}</span></a> })}
                                <h3 title={row.title} className="pfy-post-title"><a href={ENV.articleURL(row.url)}>{row.title}</a></h3>
                                <ul className="pfy-post-gd-meta">
                                    <li>Oleh <a href={ENV.userURL(row.user.id + '/' + Text.specialRemove(row.user.name))} title={"Diposting oleh " + row.user.name} rel="author">{row.user.name}</a></li>
                                    <li><i className="fal fa-calendar-alt"></i> {Moment(row.created_at).format('DD MMM YYYY')}</li>
                                    <li><i className="far fa-comments"></i> {row.comments_count} Komentar</li>
                                </ul>
                            </div>
                        </article>
                    )}
                    <div className="pfy-pagination">
                        <ul className="page-numbers">
                            {(() => {
                                if (paginate.last_page > 1) {
                                    if (paginate.current_page == 1) {
                                        return (
                                            <div>
                                                <li><span className="page-numbers current">{paginate.current_page}</span></li>
                                                <li><span className="page-numbers dots">???</span></li>
                                                <li><a className="page-numbers" href={newURL + "&p=" + paginate.last_page}>{paginate.last_page}</a></li>
                                                <li><a className="next page-numbers" href={newURL + "&p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
                                            </div>
                                        )
                                    } else {
                                        if (paginate.current_page !== paginate.last_page) {
                                            if (paginate.current_page == 2) {
                                                return (
                                                    <div>
                                                        <li><a className="prev page-numbers" href={newURL + "&p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
                                                        <li><a className="page-numbers" href={newURL + "&p=" + (paginate.current_page - 1)}>{(paginate.current_page - 1)}</a></li>
                                                        <li><span className="page-numbers current">{paginate.current_page}</span></li>
                                                        <li><span className="page-numbers dots">???</span></li>
                                                        <li><a className="page-numbers" href={newURL + "&p=" + paginate.last_page}>{paginate.last_page}</a></li>
                                                        <li><a className="next page-numbers" href={newURL + "&p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
                                                    </div>
                                                )
                                            } else if (paginate.current_page == (paginate.last_page - 1)) {
                                                return (
                                                    <div>
                                                        <li><a className="prev page-numbers" href={newURL + "&p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
                                                        <li><a className="page-numbers" href={newURL + "&p=" + 1}>1</a></li>
                                                        <li><span className="page-numbers dots">???</span></li>
                                                        <li><span className="page-numbers current">{paginate.current_page}</span></li>
                                                        <li><a className="page-numbers" href={newURL + "&p=" + paginate.last_page}>{paginate.last_page}</a></li>
                                                        <li><a className="next page-numbers" href={newURL + "&p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div>
                                                        <li><a className="prev page-numbers" href={newURL + "&p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
                                                        <li><a className="page-numbers" href={newURL + "&p=" + 1}>1</a></li>
                                                        <li><span className="page-numbers dots">???</span></li>
                                                        <li><span className="page-numbers current">{paginate.current_page}</span></li>
                                                        <li><span className="page-numbers dots">???</span></li>
                                                        <li><a className="page-numbers" href={newURL + "&p=" + paginate.last_page}>{paginate.last_page}</a></li>
                                                        <li><a className="next page-numbers" href={newURL + "&p=" + (paginate.current_page + 1)}><i className="fal fa-long-arrow-right"></i></a></li>
                                                    </div>
                                                )
                                            }

                                        } else {
                                            return (
                                                <div>
                                                    <li><a className="prev page-numbers" href={newURL + "&p=" + (paginate.current_page - 1)}><i className="fal fa-long-arrow-left"></i></a></li>
                                                    <li><a className="page-numbers" href={newURL + "&p=" + 1}>1</a></li>
                                                    <li><span className="page-numbers dots">???</span></li>
                                                    <li><span className="page-numbers current">{paginate.current_page}</span></li>
                                                </div>
                                            )
                                        }
                                    }
                                }
                            })()}
                        </ul>
                    </div>
                </div>
                :
                <div className="text-center">
                    <i className="fa fa-search"></i>
                    <p>Item yang kamu cari tidak ada.</p>
                </div>
            }
        </section>
    );
}