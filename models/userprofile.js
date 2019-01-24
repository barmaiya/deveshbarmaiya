const mongoose = require("mongoose");

const friendSchema = mongoose.schema({
    firstname :{
        type : String
    },
    lastname :{
        type : String
    },
    image :{
        type : Buffer
    },
    city:{
        type : String
    }
    

})