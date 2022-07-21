const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Post = require('../models/Post');


router.get('/', async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
        } catch(err){
    
            res.send('Error');
        }
    
})

router.post('/', async (req,res) => {
 
    const post = new Post({                     //create a new model with this Post
        title: req.body.title,
        description: req.body.description
    }); 
    
    try {
    const savedPost = await post.save();
    res.json(savedPost);
    } 
    catch(err){

        res.send('Error');
    }
});

/*router.post('/',  (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message : err});
    });
 });*/



module.exports = router; //We are exporting this router

