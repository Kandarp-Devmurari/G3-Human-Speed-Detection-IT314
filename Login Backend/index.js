const express = require('express')
const app = express()
const connectDB = require('./MongoConnect.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require('./Model/User.js');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/login',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.send('Please enter email and password');
    }

    const userexist = await User.findOne({email: email});
    if(!userexist){
        return res.send('User does not exist');
    }

    if(userexist.password != password){
        return res.send('Password is incorrect');
    }

    res.send({
        "message":'Login successful',
        "user":userexist
    });


});

app.listen(process.env.PORT, async() => {
    await connectDB();
    console.log('Example app listening on port' + process.env.PORT)
});
