const express = require('express');

const app = express();

function createPost(request, response){
    console.log('Create Post Called');
    response.status(200).json({
        message: 'response sent'
    })
}



app.use(express.json());

app.post('/posts', createPost);
app.get('/posts', getAllPostsHandler)
app.get('/posts/:postId', getPostById);
app.patch('/posts', updatePost);
app.delete('/posts/:postId', deletePost)

app.listen(3000, function(){
    console.log('Server running at port 3000');
})