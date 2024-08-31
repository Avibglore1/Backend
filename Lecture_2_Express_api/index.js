const express = require('express');
const app = express();

function getHandler(request, response){
    console.log('Received get requests');
    const postData = 
        {
            "id": 1,
            "title": "His mother had always taught him",
            "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
            "tags": [
                "history",
                "american",
                "crime"
            ],
            "reactions": {
                "likes": 192,
                "dislikes": 25
            },
            "views": 305,
            "userId": 121
        }
    response.status(200).json(postData);
}
app.get('/posts', getHandler)
app.listen(3000, function(){
    console.log('server is running at 3000');
})