const express = require('express');
const app = express();
const router = express.Router(); 
router.get('/genre', (res,rep)=>{
    rep.send("genre");
})

router.get('/genre/:id', (res,rep)=>{
    rep.send("genre by id");
})


module.exports = router;