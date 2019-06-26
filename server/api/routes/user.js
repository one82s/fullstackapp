const User = require('../../models/users')

//router was passed from index.js
module.exports = function(router){
    // /user/ is part of the URL and :id is the parameter
    
    router.get('/user/:id', function(req, res){
        console.log('here in findbyid: '+req.params.id)
        User.findById(req.params.id).exec()
        .then(docs => res.status(200)
            .json(docs))
        .catch(err => res.status(500)
            .json({
                message:'Error finding user',
                error:err
            }))
    })

    router.get('/user/email/:email', function(req, res){
        console.log('here in findbyemail: '+req.params.email)
        User.find({email:req.params.email}).exec()
        .then(docs => res.status(200)
            .json(docs))
        .catch(err => res.status(500)
            .json({
                message:'Error finding user by email',
                error:err
            }))
    })

    router.post('/user', function(req, res){
        let user = new User(req.body)
        user.save(function (err, user){
            if(err) return console.log(err)
            res.status(200).json(user)
        })
    })

    router.put('/user/:id', function(req, res){
        console.log(req.body)
        let qry = {_id:req.params.id}
        let doc = {
            isActive:req.body.isActive
        }
        console.log(doc)
        User.update(qry, doc, function(err, respRaw){
            if(err)return console.log(err)
            res.status(200).json(respRaw)
        })
    })

}