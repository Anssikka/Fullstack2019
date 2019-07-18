require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Blog = require('./models/blog')

// MORGAN reporting

morgan.token('data', (request) => {
  return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.use(cors())
app.use(bodyParser.json())

// HTTP REQUESTS

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.get('/api/blogs/:id', (request, response) => {
  Blog.findById(request.params.id).then(blog => {
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  }).catch(error => console.log('error:', error))
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})