const Transaction = require('../../models/transactions')


//router was passed from index.js
module.exports = function (router){
    router.get('/transaction/:productid', function(req, res){
        const userId = req.get('userId');
        const productId = req.params.productid
        
        const qry = {
            userId:userId,
            productId:productId
        }

        Transaction.find(qry)
        .sort('productid', 1)
        .exec()
        .then(docs => res.status(200)
            .json(docs))
        .catch(err=>res.status(500)
            .json({
                message: 'Error finding transaction for user',
                error:err
            }))    
    })

    //create new transaction document
    router.post('/transaction', function(rew, res){
        let transaction = new Transaction(req.body)
        transaction.save(function(err, transaction){
            if(err) return console.log(err)
            res.status(200).json(transaction)
        })
    })
}