import React from 'react'
import personService from '../Services/persons'
import axios from 'axios'


const ReturnNames = (props) => {
   
  return(
  props.nameArray.filter((p) => p.name.toUpperCase().includes(props.filterw.toUpperCase())).map((p, i) => <div key={i}><p >{p.name}  {p.number}</p><button onClick={() => props.handleDelete(p.id)}>Delete</button></div>)
  )
}


export default ReturnNames