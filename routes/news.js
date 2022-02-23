const express = require('express')
const router = express.Router()

const News = require('./../models/News')

router.get('/news', async (req, res) => {
  const news = await News.find().sort([['date', -1]]).exec()
  res.json(news)
})

router.post('/admin/news', async (req, res) => {
  const news = new News({
    title: req.body.title,
    body: req.body.body
  })  

  await news.save()

  res.json(news)
})

router.delete('/admin/news', async (req, res) => {
  await News.deleteOne({_id: req.query.id})
  res.json("OK")
})

router.put('/admin/news', async (req, res) => {
  await News.findOneAndUpdate({_id: req.body.id}, {title: req.body.title, body: req.body.body})
  res.json("OK")
})

module.exports = router