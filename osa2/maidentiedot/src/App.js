import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Finder = (props) => {
  return(
  <div>
    Find countries: <input value={props.filterBox} onChange={props.handleFilter}/>
  </div>
  )

}


const ShowCountries = (props) => {
  const filteredCountries = props.countries.filter((o) => o.name.toUpperCase().includes(props.filterW.toUpperCase()));
  
  if (filteredCountries.length === 1) {
    return (
      <div>
        <SingleCountry country = {filteredCountries[0]} />
      </div>
    )
  } else if (filteredCountries.length > 1 && filteredCountries.length < 10) {
    return (
      <div>
        <Country countryA={filteredCountries} changeFilter={props.changeFilter} />
      </div>
    )
  } else if (filteredCountries.length === 0) {
    return <p>No matches sorry!</p>
  } 

    return (
      <p>Too many matches, try filtering!</p>
    )
  
}


const Country = (props) => {
  if (props.countryA.length > 1) {
  return (
    props.countryA.map((o, i) => {
      return (<div key={i}><p>{o.name}</p><button onClick={() => props.changeFilter(o.name)}>Show</button></div>)
    })   
  )}

}


  const SingleCountry = (props) => {
    const o = props.country
    const languages = props.country.languages
 
    return (
      <div key={o.name}>
        <h2>{o.name}</h2>
        <p>Capital: {o.capital}</p>
        <p>Population: {o.population}</p>
        <h3>Languages</h3>
        {languages.map(la => <li key={la.name}>{la.name}</li>)}
        <img src={o.flag} alt="flag" width="200" height="150"/>

      </div>
    )
  }


function App() {
  const [ filterBox, setFilterBox] = useState('')
  const [ countries, setCountries] = useState([{ name:'', capital:'', population:''},{ name:'', capital:'', population:''}])

  const handleFilter = (event) => {
    setFilterBox(event.target.value)
  }

  const changeFilter = (n) => {
    setFilterBox(n)
  }

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      const datat = response.data.map(o => {
        return (
          {name: o.name,
          population: o.population,
          capital: o.capital,
          languages: o.languages,
          flag: o.flag}
        )
        
      })
      setCountries(datat)
    })
  }

  useEffect(hook,[])

  return (
    <div>
      <h1>Country finder:</h1>
    <Finder filterBox={filterBox} handleFilter={handleFilter} />
    <ShowCountries countries={countries} filterW={filterBox} changeFilter={changeFilter} />
    </div>
  );
}


export default App;
