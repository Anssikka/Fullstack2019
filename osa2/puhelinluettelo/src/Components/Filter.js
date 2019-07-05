import React from 'react'

const Filter = (props) => {
  return (
    <div>
      Filter names with: <input value={props.filterBox} onChange={props.handleFilter}/>
    </div>
  )
}

export default Filter