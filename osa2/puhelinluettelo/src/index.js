import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './Components/Filter.js'
import PersonForm from './Components/PersonForm.js'
import ReturnNames from './Components/ReturnNames.js'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([{ name: '', number: '' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterBox, setFilterBox] = useState('')


  const hook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()
    const tempObj = {name : newName, number: newNumber}
    const array = persons.map((o) => o.name)
    if (array.includes(newName)) {
      alert(`${newName} is already added to the phonebook`)      
    } else {
      setPersons(persons.concat(tempObj))
    }    
    setNewName('')
    setNewNumber('')    
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterBox(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterBox={filterBox} handleFilter={handleFilter}/>
      <h3>Add new</h3>
      <PersonForm addName={addName} 
      newName={newName} handleNewName={handleNewName}
      newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <ReturnNames nameArray={persons} filterw={filterBox}/>
    </div>
  )

}




ReactDOM.render(<App />, document.getElementById('root'));