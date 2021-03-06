import React, { useState, useEffect } from 'react'
import Card from '../UI/Card';
import './style.css'
import blogPost from '../../Data/blog.json'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const posts = blogPost.data
        setPosts(posts)

    }, [posts]);

    return (

        <div className="sideBarContainer">
            <Card style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}>
                <div className="cardHeader">
                    <span>About Us</span>

                </div>
                <div className="profileImageContainer">
                    <img src="https://images.unsplash.com/photo-1459184113209-08daa5161363?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Shamli.I am software Developer at Cybage Softeare Pvt. Ltd.</p>
                </div>

            </Card>
            <Card style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                    <img />
                </div>
            </Card>

            <Card style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}>
                <div className="cardHeader">

                    <span>Recent Post</span>
                    <img />
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>

            </Card>
        </div >
    )
}

export default SideBar;
