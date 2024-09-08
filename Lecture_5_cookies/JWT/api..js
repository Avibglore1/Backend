const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const util = require('util');
const promisify = util.promisify;

const promisedJWTsign = promisify(jwt.sign);
const promisedJWTverify = promisify(jwt.verify);
app.use(cookieParser());

const secretKey = 'abrakadabra';
//token creation
app.get('/sign', async function(req, res){
    const authToken = await promisedJWTsign({'payload': 'abgf'},secretKey);
    res.cookie('jwt', authToken, {
        maxAge: 1000*60*60*24,
        httpOnly: true
    })

    res.status(200).json({
       message: 'signed the jwt and sending the cookie'     
    })

})

app.get('/verify', async function(req, resp){
    if(req.cookies && req.cookies.jwt){
        const authToken = req.cookies.jwt;
        const unlockedToken = await promisedJWTverify(authToken, secretKey);
        resp.status(200).json({
            message: 'jwt token is verified',
            'unlocked token': unlockedToken
        })
    }else{
        resp.status(400).json({
            message: 'no jwt token found'
        })
    }
})
app.listen(3000, function(){
    console.log('Server is listening at port 3000');
})