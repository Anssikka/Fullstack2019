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



blogsRouter.post('/', async(request, response, next) => {
  const blog = new Blog(request.body)

  try {
   const savedBlog = await blog.save()
   response.status(201).json(savedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.delete('/:id', async(request, response, next) => {
  const id = request.params.id

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id)
    response.status(200).json(deletedBlog.toJSON())
  } catch (error) {
    next(error)
  }
})

blogsRouter.put('/:id', async(request, response, next) => {
  const id = request.params.id
  const body = request.body

  const newBlog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, newBlog, {new : true})
    response.status(200).json(updateBlog.toJSON())
  } catch (error) {
    next(error)
  }
})

module.exports = blogsRouter