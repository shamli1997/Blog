import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './style.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import ContactUs from '../../Container/ContactUs';
const Navbar = (props) => {

    const [search, setSearch] = useState(false);
    const submitSearch = (e) => {
        e.preventDefault();

    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                <li><NavLink to="post">Blogs</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" placeholder="search.." className={searchClass} />
                    <SearchIcon className="searchIcon" onClick={openSearch} />
                </form>

            </div>
        </div>
    )
}
export default Navbar;