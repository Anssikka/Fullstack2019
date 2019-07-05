import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ReturnNames = (props) => {
  return(
  props.nameArray.filter((p) => p.name.toUpperCase().includes(props.filterw.toUpperCase())).map((p, i) => <p key={i}>{p.name}  {p.number}</p>)
  )
}

const App = () => {
  const [ persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-432472341' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterBox, setFilterBox] = useState('')


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
      <div>Filter shown with: <input value={filterBox} onChange={handleFilter}/></div>
      <h3>Add new</h3>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        number: <input value={newNumber} onChange={handleNewNumber}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ReturnNames nameArray={persons} filterw={filterBox}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));