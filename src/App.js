import React, { useState } from 'react';
import './App.css';
import PostList from './Componenets/PostLists/PostList';
import PostDetails from './Componenets/PostDetails/PostDetails';

const App = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="App">
            <div className="post-list">
                <PostList onSelectPost={setSelectedPost} />
            </div>
            <div className="post-details">
                <PostDetails post={selectedPost} />
            </div>
        </div>
    );
};

export default App;
