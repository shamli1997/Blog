import React from 'react'
import Card from '../UI/Card'
import './style.css'
const BlogPost = () => {
    return (

        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful</h1>
                    <span className="postedBy">posted on 25th jan 2020 by shamli </span>
                </div>

                <div className="postImageContainer">
                    <img src="https://images.unsplash.com/photo-1445052693476-5134dfe40f70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="post img" />
                </div>

            </Card>
        </div>

    )
}
export default BlogPost;