import Card from '../../Components/UI/Card'
import React from 'react'
import './style.css'
import BlogPost from '../../Components/BlogPost'
import SideBar from '../../Components/SideBar'
const Post = (props) => {
    console.log(props);
    return (
        <section className="container">

            <BlogPost{...props} />
            <SideBar />


        </section>
    )
}

export default Post;