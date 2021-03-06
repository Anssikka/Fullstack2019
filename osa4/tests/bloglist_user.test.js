const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const api = supertest(app)
const helper = require('./test_helper')


describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const user = new User({username: 'Anssi', password: 'backendonparas' })
    await user.save()
  })


  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.UsersDB()

    const newUser = {
      username: 'Pekka',
      name: 'Pekka pellervo',
      password: 'akuankka'
    }

    await api.post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      const usersAtEnd = await helper.UsersDB()
      expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

      const usernames = await usersAtEnd.map(u => u.username)
      expect(usernames).toContain(newUser.username)
  })

  test('creation fails with proper statuscode and message if username already taken', async() => {
    const usersAtStart = await helper.UsersDB()

    const newUser = {
      username: 'Anssi',
      name: 'Mestari',
      password: 'fronttipas'
    }

    const result = await api.post('/api/users').send(newUser).expect(400).expect('Content-Type', /application\/json/);


    //expect(result.body.error).toContain('`username` to be unique')

    const usersAtEnd = await helper.UsersDB()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })

})