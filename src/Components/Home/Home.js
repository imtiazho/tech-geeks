import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../App';
import Blogs from '../Blogs/Blogs';
import './Home.css'

const Home = () => {
    const  [blogs, setBlogs] = useContext(BlogContext)
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className='blogs-container'>
            {blogs.map((blog, index) => (
                <Blogs key={index} blog={blog} />
            ))}
        </div>
    );
};

export default Home;