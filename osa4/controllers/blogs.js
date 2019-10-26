const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require("../models/user")


blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', {
    id: 1,
    username: 1,
    name: 1
  })
  response.json(blogs.map(blog => blog.toJSON()))
})


blogsRouter.post('/', async(request, response, next) => {
  const body = new Blog(request.body)


  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: '5db41a88b4788a1da03d2e0b'
  })


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