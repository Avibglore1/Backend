const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.get('/', function(req, res){
    res.cookie('prevpage', 'home',{
        maxAge: 1000 * 60 * 60 * 24,
    })
    res.status(200).json({
        message: 'received request on homepage'
    })
})

app.get('/product', function(req, res){
   let messageStr = '';
   if(req.cookies && req.cookies.prevpage){
        messageStr = `You visited ${req.cookies.prevpage} page before`
   }
   else{
    messageStr = 'No previous page found'
   }
    res.status(200).json({
        message: messageStr
    })
})

app.get('/clearCookies', function(req,res){
    res.clearCookie('prevpage', {path: '/'});
    res.status(200).json({
        message: 'I have cleared your cookies'
    })
})


app.listen(3000, function(){
    console.log('Server is listening at port 3000');
})