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
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
                {blog.url}
            </a>
            <p>{blog.likes} likes</p>
            <p>added by {blog.author}</p>
        </div>
    );
};

export default BlogView;