const express = require('express')
const connectDB = require('./config/db')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

connectDB()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
	const origins = [
			'http://localhost:3000'
	];

	for(let i = 0; i < origins.length; i++){
			const origin = origins[i];

			if(req.headers.origin.indexOf(origin) > -1){
					res.header('Access-Control-Allow-Origin', req.headers.origin);
			}
	}
	
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
});

app.use('/api', require('./routes/news'))


app.listen(process.env.PORT || 5000, () => {
	console.log('App listen on port ' + process.env.PORT || 5000)
})
