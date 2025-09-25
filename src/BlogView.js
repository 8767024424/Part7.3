import React from 'react';
import { useParams } from 'react-router-dom';

const BlogView = ({ blogs }) => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return <div>Blog not found.</div>;
    }

    return (
        <div>
            <h3>{blog.title}</h3>
            <p>URL: <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a></p>
            <p>Likes: {blog.likes}</p>
            <p>Added by: {blog.author}</p>
            
            <hr />
            <h4>comments</h4>
            <ul>
                {blog.comments.map(comment => (
                    <li key={comment.id}>{comment.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default BlogView;