const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://202001007:VlmlkqsxewVowsKH@cluster0.un8ahgl.mongodb.net/?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.listen(9000, () => {
    console.log('Server started')
})