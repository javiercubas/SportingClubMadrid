import React, { useState, useEffect } from 'react'
import './FullBlogPost.css'

function FullBlogPost(props) {
    const url = 'https://clever-neumann.82-223-205-248.plesk.page/api/posts/' + props.id + '?populate=%2A'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data.attributes)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    let image=''
    if (todos){
        if (todos.Featured_Image.data!=null){
            image='https://clever-neumann.82-223-205-248.plesk.page'+todos.Featured_Image.data.attributes.url
        }
    }
    return (
        <div class="fullBlogPost">
            <div class="fullBlogPost__card">
                <h3 className='fullBlogPost__card__title'>{!todos ? 'Cargando...' : todos.Title}</h3>
                <hr className='fullBlogPost__card__hr' />
                <div class="fullBlogPost__card__info">
                    <div class="fullBlogPost__tags">
                        {!todos ? 'Cargando...' : todos.categories.data.map((category, index) => {
                            return <h3 class="fullBlogPost__card__info__tag" key={index}>{category.attributes.Name}</h3>
                        })}
                    </div>

                    <div class="fullBlogPost__card__info__right">
                        <h3 className="fullBlogPost__card__info__right__author">{!todos ? 'Cargando...' : "By "+todos+" -"}</h3>
                        <h3 className="fullBlogPost__card__info__right__date">{!todos ? 'Cargando...' : todos.publishedAt.slice(0, 10).replaceAll("-", "/")}</h3>
                    </div>
                </div>
                <div class="fullBlogPost__card__content">
                    <div className='fullPostBlog__card__img'>
                        <img src={image} alt="" className='fullPostBlog__card__img__src' />
                    </div>

                    <p>{!todos ? 'Cargando...' : todos.Content}</p>
                </div>


            </div>
        </div>
    )
}

export default FullBlogPost