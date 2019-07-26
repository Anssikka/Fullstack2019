const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan') 
const mongoose = require('mongoose')
const middlware = require('./utils/middleware')

  morgan.token('data', (request) => {
  return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))  

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }).then(result => {
  console.log('connected to MongoDB')
}).catch((error) => (console.log('Couldnt connect to MongoDB:', error.message)))

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use(middlware.errorHandler)

module.exports = app