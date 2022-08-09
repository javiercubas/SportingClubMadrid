import React from 'react'
import './FullBlogPost.css'

function FullBlogPost(props) {
  return (
    <div class="fullBlogPost">
        <div class="fullBlogPost__card">
            <h3 className='fullBlogPost__card__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <hr className='fullBlogPost__card__hr'/>
            <div class="fullBlogPost__card__info">
                <div class="fullBlogPost__tags">
                    <h3 class="fullBlogPost__card__info__tag">Etiqueta 1</h3>
                    <h3 class="fullBlogPost__card__info__tag">Etiqueta 2</h3>
                    <h3 class="fullBlogPost__card__info__tag">Etiqueta 3</h3>
                </div>
                
                <h3 class="fullBlogPost__card__info__date">09/09/2022</h3>
            </div>
            <div className='fullPostBlog__card__img'>
                <img src="https://pbs.twimg.com/media/FPb0dHrWQAM4RDd?format=jpg&name=4096x4096" alt="" className='fullPostBlog__card__img__src'/>
                <div className='fullPostBlog__card__img__text'>
                    <p class="fullPostBlog__card__img__text__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem!</p>
                </div>
            </div>
            <hr className='fullBlogPost__card__hr2'/>
            <div class="fullBlogPost__card__content">
                <p>Posdata: Dale Alt + Z para que todo el texto se pase a la siguiente linea <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure odit laboriosam, et esse magni ut libero, sed suscipit, sunt ex sequi in. Doloremque minima maiores eos quidem rerum quisquam saepe reiciendis, fugit laudantium quod perspiciatis suscipit assumenda ut architecto voluptate enim in vitae illo reprehenderit non tenetur? Totam, cupiditate.
                </p><p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias, perspiciatis autem ratione deleniti accusantium itaque doloremque incidunt cumque pariatur officiis vitae molestiae optio beatae dolorum similique, tempora quod dolores quas sint vero ex illo iusto quidem. Officia, facere facilis!
                </p><p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at ab consectetur aspernatur exercitationem enim dolore, voluptatem dolorum minus animi nesciunt totam cumque accusantium quia expedita, assumenda commodi nulla voluptas tempora! Ab iste odio sed quis? Repellendus dignissimos nulla voluptatum laboriosam corporis illum sunt amet quibusdam magnam numquam ratione suscipit quae, tenetur sapiente minus dolor sit nemo nam nesciunt. Quaerat placeat ipsum labore repellendus repudiandae dolore dolores esse exercitationem iure maxime laborum, reprehenderit quos, animi rem perspiciatis beatae debitis quas eius inventore officia asperiores error optio mollitia atque! Enim dignissimos laboriosam rerum nesciunt a ex minima! Delectus voluptas enim excepturi?
                </p><p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.
                </p>
            </div>
            
            
        </div>
    </div>
  )
}

export default FullBlogPost