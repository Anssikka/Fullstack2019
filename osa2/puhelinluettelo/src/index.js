import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ReturnNames = (props) => {
  return (
    props.nameArray.map((p, i) => <p key={i}>{p.name}</p>)
  )

}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const tempObj = {name : newName}
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ReturnNames nameArray={persons}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));