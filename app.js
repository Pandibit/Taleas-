const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
app.use(express.json());




//Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute); //Everytime we go to the posts we hit that get or other requests so we don't write the path in posts.js -> This a middleware

//ROUTES



//Connect to DB
mongoose.connect(process.env.DB_CONN, () => {
    console.log('Connected to DB');
});

//How we start listening
app.listen(8000);
