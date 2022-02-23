const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.x3vxh.mongodb.net/news-portal?retryWrites=true&w=majority',  {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
        if(!err) {
            console.log('Connecting to db is finished')
        } else {
            console.log('Connecting to db error')
            console.log(err)
        }
    })
}

module.exports = connectDB


