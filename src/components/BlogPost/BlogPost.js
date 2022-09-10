import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './BlogPost.css';

function BlogPost(props) {
    return (
        <Fragment>
            <Link to={"/" + props.title.toLowerCase().replaceAll(" ", "-")} class="blogPost">
                <div class="blogPost__picture" style={{ backgroundImage: 'url(http://localhost:1337' + props.image + ')' }} />
                <div class="blogPost__text">
                    <div class="blogPost__title">
                        <h4 class="blogPost__title__h4">{props.title}</h4>
                        <hr class="blogPost__hr" />
                    </div>
                    <div class="blogPost__content">
                        <p class="blogPost__content__p">{props.content}</p>
                    </div>
                    <div class="blogPost__info">
                        <div class="blogPost__info__author">
                            <img class="blogPost__info__author__img" src="https://this-person-does-not-exist.com/img/avatar-0b0e7b0971a662505ccfb5f541ebfe40.jpg" alt="Foto" /> {props.author}
                        </div>
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