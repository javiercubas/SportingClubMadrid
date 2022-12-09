import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './BlogPost.css';

function BlogPost(props) {
    return (
        <Fragment>
            <Link to={"/" + props.title.toLowerCase().replaceAll(" ", "-").replaceAll(",", "")} class="blogPost">
                <div class="blogPost__picture" style={{ backgroundImage: 'url(https://clever-neumann.82-223-205-248.plesk.page' + props.image + ')' }} />
                <div class="blogPost__text">
                    <div class="blogPost__title">
                        <h4 class="blogPost__title__h4">{props.title}</h4>
                        <hr class="blogPost__hr" />
                    </div>
                    <div class="blogPost__content">
                        <p class="blogPost__content__p">{props.content}</p>
                    </div>
                    <div class="blogPost__info">
                        <div class="blogPost__info__data">
                            <i class="fa-solid fa-people-group"></i>{props.teams}
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}

export default BlogPost;