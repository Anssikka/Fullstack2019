const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async(request, response, next) => {
  try {
    const blogs = await Blog.find({})
    response.json(blogs.map(b => b.toJSON()))
  } catch(error) {
    next(error)
  }

})

/* blogsRouter.get('/:id', (request, response) => {
  Blog.findById(request.params.id).then(blog => {
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  }).catch(error => console.log('error:', error))
}) */

blogsRouter.post('/', async(request, response, next) => {
  const blog = new Blog(request.body)

  /* blog
    .save()
    .then(result => {
      response.status(201).json(result)
    }) */
  try {
   const savedBlog = await blog.save()
   response.status(201).json(savedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

module.exports = blogsRouter