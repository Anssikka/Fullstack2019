import React from 'react'

const ReturnNames = (props) => {
  return(
  props.nameArray.filter((p) => p.name.toUpperCase().includes(props.filterw.toUpperCase())).map((p, i) => <p key={i}>{p.name}  {p.number}</p>)
  )
}


export default ReturnNames