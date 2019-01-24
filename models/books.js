const mongoose = require('mongoose')


// define schema for genere
const books = mongoose.Schema({
    Name: String,
    Price : Number,
    Author :String
}, {
    timestamps: true
});
// let books = mongoose.Schema({
//     Name: {
//         type: String
//     },
//     Price: {
//         type: Number
//     },
//     Author: {
//         type: String
//     }
    

// },
// {
//     timestamps: true
// })
module.exports = mongoose.model("books", books);