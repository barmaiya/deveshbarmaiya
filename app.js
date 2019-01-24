const express = require('express');
const nodemon = require('nodemon');

const app = express();

app.get('/', (res,rep)=>{

    rep.send("hello");

})



const Port = 3000;
app.listen(Port, "localhost", ()=>{
console.log(`Connected to port :  ${Port}`)
})