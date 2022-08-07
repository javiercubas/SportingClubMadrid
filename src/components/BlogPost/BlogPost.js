import React, { Fragment } from "react";
import './BlogPost.css';

function BlogPost(props){
    return(
        <Fragment>
            <div class="blogPost">
                <div class="blogPost__picture" style={{backgroundImage: 'url(http://localhost:1337'+props.image+')'}}>

                </div>
                <div class="blogPost__text">
                    <div class="blogPost__title">
                        <h4 class="blogPost__title__h4">{props.title}</h4>
                        <hr class="blogPost__hr"/>
                    </div>
                    <div class="blogPost__content">
                        <p class="blogPost__content__p">{props.content}</p>
                    </div>
                    <div class="blogPost__info">
                        <div class="blogPost__info__author">
                            <img class="blogPost__info__author__img" src="https://this-person-does-not-exist.com/img/avatar-1bb70cbee0c34b64e902950f1c502da4.jpg" alt="Foto" /> {props.author}
                        </div>
                        <div class="blogPost__info__data">
                            <i class="fa-solid fa-eye"></i>{props.views} <i class="fa-solid fa-heart"></i> {props.likes}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BlogPost;