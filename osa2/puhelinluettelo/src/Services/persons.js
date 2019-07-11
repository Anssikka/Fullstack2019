import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`)
}

const update = (person) => {
  const request = `${baseUrl}/${person.id}`
  return axios.put(request, person).then(response => response.data)
}


export default { getAll, create, deletePerson, update }