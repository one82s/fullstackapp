const express = require('express')
const router = express.Router()

// console.log('dito sa index.js')
//lines 5 and 6 will passs router object to transaction and user routes

// router.get('/user', function (req, res) {
//     console.log('testing here')
//     res.send('user home page')
//   })

require('./routes/transaction')(router)
require('./routes/user')(router)

module.exports =  router