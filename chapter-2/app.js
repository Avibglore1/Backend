const express = require('express');
const app = express();
const fs = require("fs");

const postData = fs.readFileSync("posts.json");
const postJson = JSON.parse(postData);
app.get('/posts',function(req,res){
    
    return res.status(200).json(postJson);
})

app.get('/posts/:postId',function(req,res){
    const postId = req.params.postId;

    const post = postJson.posts.find(p => p.id === postId);

    if (post){
        return res.status(200).json({
            postId,
            data: post
    })}
   
    return res.status(404).json({
        postId:"not found"
    })
    
})
app.listen(3000,()=>{
    console.log('server running at 3000');    
})