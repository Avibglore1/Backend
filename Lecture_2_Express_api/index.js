const express = require('express');
const fs = require('fs');  
const { request } = require('http');
const app = express();

console.log('before');

const content = fs.readFileSync('posts.json', 'utf-8');
const jsonPosts = JSON.parse(content);
function getAllPostsHandler(request, response){
    console.log('Received get requests');
    response.status(200).json(jsonPosts);
}

function getPostById(request, response){
    try{
        const postId = request.params.postId;
    console.log('postId', postId);
    const postsArr = jsonPosts.posts;
    for(let i=0; i< postsArr.length; i++){
        if(postsArr[i].id == postId){
            return response.status(200).json({
                post: postsArr[i]
            })
        }   
    }
    response.status(200).json({
        post: 'post not found'
    })
    }
    catch(err){
        response.status(500).json({
            response: 'Something went wrong'
        })}
    
}   

function createPost(request, response){
    try{
        console.log('request.body', request.body);
        const postsArr = jsonPosts.posts;
        postsArr.push(request.body);
        response.status(201).json({
            message: 'post created'
        })
    }catch(err){
        response.status(500).json({
            response: 'Something went wrong'
        })
    }
}

app.listen(3000, function(){
    console.log('server is running at 3000');
})

app.use(express.json());
app.post('/posts', createPost);

app.get('/posts', getAllPostsHandler)

app.get('/posts/:postId', getPostById);
console.log('after');


