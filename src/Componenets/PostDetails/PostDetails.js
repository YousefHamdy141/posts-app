import React, { useEffect, useState } from 'react';

const PostDetails = ({ post }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (post) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(data => setComments(data));
        }
    }, [post]);

    if (!post) {
        return <div>Select a post to see the details.</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong>: {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetails;
