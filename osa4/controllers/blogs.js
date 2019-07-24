const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async(request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    }).catch(error => {console.log(error)})
})

blogsRouter.get('/:id', (request, response) => {
  Blog.findById(request.params.id).then(blog => {
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  }).catch(error => console.log('error:', error))
})

blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogsRouter