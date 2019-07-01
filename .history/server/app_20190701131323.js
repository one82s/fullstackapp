const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const index = require('./api/index')
const cors = require('cors')

app.set('port', (process.env.PORT || 8081))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(cors())
app.use('./api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

// app.use(function(req, res, next){
//     console.log('dito ba?')
//     const err = new Error('Not Found')
//     err.status = 404
//     res.json(err)
// })


app.use('/api', index)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/globalmantics')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: Can not connect'))
db.once('open', function (){
    console.log('Connected to MongoDB')

    app.listen(app.get('port'),function(){
        console.log('API  Server Listening on port '+app.get('port'))
    })
})