const express=require('express')
const News=require("../models/news2")
const router=new express.Router()


router.post('/news',(req,res)=>{
    const news=new News(req.body)
    news.save().then(()=>{
        res.status(200).send(news)
    }).catch((e)=>
    res.status(400).send(e)
)
})




router.get('/news',(req,res)=>{
    News.find({}).then((news)=>{
        res.status(200).send(news)
    }).catch((e)=>{
        res.status(500).send('internal server error')
    })
})






module.exports= router