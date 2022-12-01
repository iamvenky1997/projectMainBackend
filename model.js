const mongoose = require("mongoose")
const InterviewData = mongoose.Schema({

    name:{type:String,required:true},
    company :{type:String,required:true},
    questions : []

});
module.exports = mongoose.model('userData',InterviewData )