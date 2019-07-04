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



  return (
    <div>
      <Header header='Give feedback'/>
      <Button clickHandler={() => clickHandler(good, setGood)} text='Good'/>
      <Button clickHandler={() => clickHandler(neutral, setNeutral)} text='Neutral' />
      <Button clickhandler={() => clickHandler(bad, setBad)} text='Bad'/>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>

      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)