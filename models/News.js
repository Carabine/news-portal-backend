const mongoose = require('mongoose')

const newsSchema = {
    title: {
      type: String
    },
    body: {
      type: String,
    },
    date: { 
      type: Date, 
      default: Date.now 
    },
}

const news = mongoose.model('News', newsSchema)
news.createIndexes()

module.exports = news