import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Post from './Post';

const Posts = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        getPosts()
    }, [])


    const getPosts = async () => {
        let { data } = await axios.get('http://localhost:5000/api/super-admin/profile')
        setPosts(data)
    }

    return (
    <div className="App">
        <h1>Hello AcadTech Data</h1>
        { posts?.length && 
            posts?.map( (post, i) => 
                <div key={i} >
                    <Post post={post} />
                </div>
            )
        }
    </div>
    );
}

export default Posts;
