const express = require('express');

const app = express();

function beforeFn(request, response, next){
    console.log('Before Post Called');
    const length = Object.keys(request.body).length;
    if (length > 0 && request.body.name && request.body.userId){
        const fullNameArray = request.body.name.split(" ");
        request.body.firstName = fullNameArray[0];
        request.body.lastName = fullNameArray[1];
        next();
    }else{
        response.status(400).json({
            request: "bad request"
        })
    }
}

function afterFn(request, response){
    console.log('After Post Called');
    console.log('request.body', request.body);
    response.status(200).json({
        message: 'response sent',
        body: request.body
    })
}

app.use(express.json());
app.post('/posts', beforeFn);
app.post('/posts', afterFn);


app.use(function(req,res){
    res.status(200).json({
        message: '404 Page Not Found'
    })
})

// app.get('/posts', getAllPostsHandler)
// app.get('/posts/:postId', getPostById);
// app.patch('/posts', updatePost);
// app.delete('/posts/:postId', deletePost)

app.listen(3000, function(){
    console.log('Server running at port 3000');
})