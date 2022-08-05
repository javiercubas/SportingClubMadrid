import React from "react";
import './Blog.css';
import BlogPost from "../components/BlogPost/BlogPost";
function Blog(){
    return (
        <div class="blog">
            <div class="blog__header">
                <h2 className='div__title'>Featured Posts</h2>
                <hr class="clubStaff__hr"/>
            </div>
            
            <div class="blog__grid">
                <BlogPost  title="Titulo1" author="Mario Gutiérrez" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus ex id nisi vestibulum elementum. Integer interdum dictum mattis. Phasellus erat metus, ultricies et tellus vitae, malesuada convallis ante. Nam congue, sem non tempus aliquam, nunc justo lacinia lectus, at dictum dolor enim posuere eros. Vestibulum sit amet euismod magna."views={3} likes={321}/>
                <BlogPost title="Titulo2" author="Mario Gutiérrez" views={4} likes={21}/>
                <BlogPost title="Titulo3" author="Mario Gutiérrez" views={12} likes={32}/>
                <BlogPost title="Titulo4" author="Mario Gutiérrez" views={212} likes={242}/>
            </div>
        </div>
    );
}

export default Blog;