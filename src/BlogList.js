import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
    return (
        <div>
            {blogs.map(blog => (
                <div key={blog.id} style={{ padding: '10px', border: '1px solid black', margin: '5px' }}>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;