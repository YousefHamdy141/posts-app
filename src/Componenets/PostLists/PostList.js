import React, { useEffect, useState } from 'react';
import './PostList.css';

const PostList = ({ onSelectPost }) => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Posts</h1>
            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.id} onClick={() => onSelectPost(post)}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
