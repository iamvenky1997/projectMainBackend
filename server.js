const express = require('express')
const mongoose = require("mongoose")
const InterviewData = require('./model')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3030

try{
    mongoose.connect("mongodb+srv://venkatesh:venkatesh@cluster0.epav24e.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("db connected..."))
    
    app.listen(port ,() => console.log("server created..."))
}catch(err){
    console.log(err)
}


app.get('/',(req,res) => {
    res.send('<h1>hello world </h1>')
  })

  app.post('/add', async(req,res) => {
    console.log("function triggered..")
    console.log(req.body)
    const {name,company,questions} = req.body
    try{
      const newData = new InterviewData({company,name,questions})
      console.log(newData)
     await newData.save();
      
      return res.send("success")
    }catch(err){
   console.log(err)
    }
  })
  

  app.get('/get',async(req,res) => {
    try{
      const allData = await InterviewData.find()
      return res.json(allData)
    }catch(err){
      console.log(err)
    }
  })
  