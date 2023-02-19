import React from 'react'
import Moment from 'moment';
import Env from '../../helpers/Env';
import API from './API/API';

export default function () {
    let [article, setArticle] = React.useState([]);
    let [comment, setComment] = React.useState([]);

    React.useEffect(() => {
        const getArticle = async () => {
            const response = await API.article();
            setArticle(response.data.data);
        }
        const getComment = async () => {
            const response = await API.comment();
            setComment(response.data.data);
        }
        getArticle();
        getComment();
    }, []);

    return (
        <div id="comments" className="comments-area">
            <h2 className="comments-title"> { article.comments_count } Komentar </h2>
            <ol className="comment-list">
                <li className="comment even thread-even depth-1 comment" id="comment-1">
                    { comment.map((comment, index) => 
                    <div key={ index } className="comment-body">
                        <div className="author-thumb">
                            <a href={ Env.baseURL('user/' + comment.user.id) }><img alt="" src={ comment.user.photo } className="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="comment-content">
                            <h4 className="name">
                                <a href={ Env.baseURL('user/' + comment.user.id) } rel="external nofollow ugc" className="url">{ comment.user.name }</a>
                            </h4>
                            <span className="comment-date text-end">{ Moment(comment.created_at).format('d MMM, YYYY') }</span>
                            <p>{ comment.body }</p>
                        </div>
                    </div>
                    )}
                </li>
            </ol>
            <div id="respond" className="comment-respond">
                <h3 id="reply-title" className="comment-reply-title">Tinggalkan komentar <small>
                    <a rel="nofollow" id="cancel-comment-reply-link" href="/wp/demos/themes/benqu/fasion-trends-and-li-edelkoort-the-culture-shock-special-report/#respond" style={{ display: "none" }}>Cancel reply</a>
                </small>
                </h3>
                <form action="#" method="post" id="commentform" className="comment-form" noValidate="">
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
    );
}