import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './Components/Filter.js'
import PersonForm from './Components/PersonForm.js'
import ReturnNames from './Components/ReturnNames.js'
import personService from './Services/persons'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([{ name: '', number: '' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterBox, setFilterBox] = useState('')


  useEffect(() => {
    personService.getAll()
    .then(persons => {
      setPersons(persons)
    })
  },[])


  // todo
  const addName = (event) => {
    event.preventDefault()
    const personObj = {name : newName, number: newNumber}
    const array = persons.map((o) => o.name)
    if (array.includes(newName)) {
      const result = window.confirm(`${newName} is already added to the phonebook, do you want to replace the number with a new one?`)
      if (result) {
        const personToUpdate = persons.find(o => o.name === newName)
        personToUpdate.number = newNumber
        personService.update(personToUpdate).then(result => {
          setPersons(persons.map(p => p.id !== personToUpdate.id ? p : result))
        })

      }      
    } else {
      /* setPersons(persons.concat(personObj)) */
      personService.create(personObj)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
      })
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

  const deletePerson = id => {
    console.log(`Delete ${id}`)
    personService.deletePerson(id).then(() => {
      const updatedList = persons.filter(p => p.id !== id)
      setPersons(updatedList)
    })
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
      <ReturnNames nameArray={persons} filterw={filterBox} handleDelete={deletePerson}/>
    </div>
  )

}




ReactDOM.render(<App />, document.getElementById('root'));