import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <div><h1>{props.header}</h1></div>

const Button = ({clickHandler, text}) => {
return (
<button onClick={clickHandler} >{text}</button>
)}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  const clickHandler = (value, updater) => updater(value + 1)
  let total = good + neutral + bad
  let average = (good+(bad*-1))/total
  let positiveVotes = good/total



  return (
    <div>
      <Header header='Give feedback'/>
      <Button clickHandler={() => clickHandler(good, setGood)} text='Good'/> 
      <Button clickHandler={() => clickHandler(neutral, setNeutral)} text='Neutral' />
      <Button clickHandler={() => clickHandler(bad, setBad)} text='bad'/>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad:{bad}</p>
      <p>all: {total}</p>
      <p>average: {average}</p>
      <p>positive: {positiveVotes}</p>

      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)