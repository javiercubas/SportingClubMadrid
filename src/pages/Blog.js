import React, { useEffect, useState } from "react";
import './Blog.css';
import BlogPost from "../components/BlogPost/BlogPost";
function Blog() {
    const url = 'http://127.0.0.1:1337/api/posts?populate=%2A'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data)
        console.log(responseJSON.data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div class="blog">
            <div class="blog__header">
                <h2 className='div__title'>Featured Posts</h2>
                <hr class="clubStaff__hr" />
            </div>

            <div class="blog__grid">
                {!todos ? 'Cargando...' :
                    todos.map((post, index) => {
                        return <BlogPost title={post.attributes.Title} author="Mario Gutiérrez" image={post.attributes.Featured_Image.data.attributes.url} content={post.attributes.Content.slice(0, 300)+'...'} views={post.attributes.categories.data[0].attributes.Name} likes={321} />
                    })}
            </div>
        </div>
    );
}

export default Blog;