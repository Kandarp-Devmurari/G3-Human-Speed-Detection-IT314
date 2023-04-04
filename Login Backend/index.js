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


app.listen(process.env.PORT, async() => {
    await connectDB();
    console.log('Example app listening on port' + process.env.PORT)
});
