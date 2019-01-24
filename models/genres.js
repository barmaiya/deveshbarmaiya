const mongoose = require('mongoose')
const schema = mongoose.Schema();

// define schema for genere

let genre = new schema({
    Name : {
        type : String
    }
})


module.exports = mongoose.model("Genre", genre);