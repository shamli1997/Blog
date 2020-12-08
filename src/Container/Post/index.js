import Card from '../../Components/UI/Card'
import React from 'react'
import './style.css'
import BlogPost from '../../Components/BlogPost'
import SideBar from '../../Components/SideBar'
const Post = () => {
    return (
        <section className="container">

            <BlogPost />
            <SideBar />


        </section>
    )
}

export default Post;