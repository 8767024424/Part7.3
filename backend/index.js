const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRouter = require('./controllers/users');

const MONGODB_URI = 'mongodb://localhost:27017/myDB';

mongoose.connect(MONGODB_URI);

app.use(express.json());
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});