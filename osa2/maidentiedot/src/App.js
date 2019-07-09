import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Finder = (props) => {
  return(
  <div>
    Find countries: <input value={props.filterBox} onChange={props.handleFilter}/>
  </div>
  )

}


function App() {
  const [ filterBox, setFilterBox] = useState('')
  const [ countries, setCountries] = useState([{ name:'', capital:'', population:''}])

  const handleFilter = (event) => {
    setFilterBox(event.target.value)
  }

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      const datat = response.data.map(o => {
        return (
          {name: o.name,
          population: o.population}
        )
        
      })
      setCountries(datat)
    })
  }

  
  
  useEffect(hook,[])
  console.log(countries)

  return (
    <div>
      <h1>Country finder:</h1>
    <Finder filterBox={filterBox} handleFilter={handleFilter} />
    </div>
  );
}

export default App;
