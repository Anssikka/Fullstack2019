import React from 'react'

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addName}>
      <div>name: <input value={props.newName} onChange={props.handleNewName}/></div>
      <div>number: <input value={props.newNumber} onChange={props.handleNewNumber}/></div>
      <div><button type='submit'>Add</button></div>
      </form>
    </div>
  )
}



export default PersonForm