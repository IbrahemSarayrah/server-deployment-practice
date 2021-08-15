'use strict'

const express = require('express')
const app = express();
const notFoundHandler = require('./handlers/404.js')
const errorHandler = require('./handlers/500')


app.get('/', (req,res)=>{
    res.status(200).send('Working...')
})

app.get('/data' , (req,res)=> {
    let output = {
        10 : 'Number',
        name : 'String',
        time : new Date().toDateString()
    }
    res.status(200).json(output)
})

app.get('/bad',(req, res, next)=> {
    next ('Error Bad End Point')
})



app.use('*' , notFoundHandler)
app.use(errorHandler)

function start (port){
    app.listen(port,()=> console.log(`listen on port ${port}`))
}

module.exports= {
    start,
    app
}