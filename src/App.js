import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogView from './BlogView';

const App = () => {
    // Mock blog and comments data to simulate a backend response
    const blogs = [
        { 
            id: '5c4d7da832383b0663990e9e', 
            title: 'The Single Responsibility Principle Robert C. Martin', 
            url: 'https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleResponsibilityPrinciple.html', 
            likes: 3, 
            author: 'Arto Hellas',
            comments: [
                { id: '1', content: 'awesome article' },
                { id: '2', content: 'a must read for every developer' }
            ]
        },
        { 
            id: 'another-id', 
            title: 'Microservices and the First Law of Distributed Objects Martin Fowler', 
            url: 'https://martinfowler.com/articles/microservices.html', 
            likes: 5, 
            author: 'Matti Luukkainen',
            comments: [
                { id: '3', content: 'Very insightful!' }
            ]
        },
    ];

    return (
        <Router>
            <div>
                <h2>blog app</h2>
                <Routes>
                    <Route path="/" element={<BlogList blogs={blogs} />} />
                    <Route path="/blogs/:id" element={<BlogView blogs={blogs} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;