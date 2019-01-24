const express = require('express');
const app = express();
const router = express.Router(); 

//get model
const model = require('../models/books.js');

router.route('/add').post((req,res)=>{
    if(!req.body.Name){
        res.status(400).send("pleaes provide name" + req.body);
        console.log(res)
    }
   let modelBooks = new model(req.body);
   modelBooks.save().then(game=>{
       res.status(200).send(req.body);
   })
   
   // rep.send("books");
})

router.get('/books', (res,rep)=>{
    model.find(function (err, data){
        if(err)
        {
            console.log('error');
        }
        else 
        {
            rep.json(data);
        }
    });
  
})

router.get('/books/:id', (req , res)=>{
    let id=req.params.id;
    model.findById(id, function(err, data){
        if(err){console.log('error')}
        else {res.status(200).send(data)}
    })
})

router.get('/delete/:id', (req , res)=>{
    let id=req.params.id;
    model.findByIdAndRemove({_id:id}, function(err, data){
        if(err){console.log('error')}
        else {res.status(200).send("deleted.")}
    })
})


module.exports = router;