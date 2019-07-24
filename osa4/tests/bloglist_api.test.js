 const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)
const helper = require('./test_helper')

beforeEach(async () => {
  await Blog.deleteMany({})
  
  const BlogBlogs = helper.blogs.map(b => new Blog(b))
  
  const promises = BlogBlogs.map(blog => blog.save())
  await Promise.all(promises)
  
})

test('Blogs have id instead of _id', async() => {
  const response = await api.get('/api/blogs')
  const firstBlog = response.body[0]
  expect(firstBlog.id).toBeDefined()

}) 


test('a valid Blog can be added', async() => {
  const newBlog = {
    title: 'Async on paras, ja await :D',
    author: 'Async Await',
    url: 'www.await.com',
    likes: 5
  }

  await api
    .post('/api/blogs')
    .send(newBlog)

    const response = await api.get('/api/blogs')

    const titles = response.body.map(t => t.title)
    expect(response.body.length).toBe(helper.blogs.length+1)
    expect(titles).toContain('Async on paras, ja await :D')

})


test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})


test('there are five notes', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body.length).toBe(helper.blogs.length)
})

test('the first note is React patterns is best', async () => {
  const response = await api.get('/api/blogs')
  const titles = response.body.map(b => b.title)

  expect(titles).toContain('React patterns')
})


afterAll(() => {
  mongoose.connection.close()
}) 


