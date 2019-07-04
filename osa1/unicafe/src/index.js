import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <div><h1>{props.header}</h1></div>

const Button = ({clickHandler, text}) => {
return (
<button onClick={clickHandler} >{text}</button>
)}

const Statistics = ({header, good, neutral, bad}) => {
  let total = good + neutral + bad
  let average = (good+(bad*-1))/total
  let positiveVotes = good/total
  

  
  if (total > 0) {
    return (
    <div>
      <table>
        <tbody>
          <Statistic text='good' value={good} /> 
          <Statistic text='neutral' value={neutral} />  
          <Statistic text='bad' value={bad} />  
          <Statistic text='all' value={total} />  
          <Statistic text='average' value={average} />  
          <Statistic text='positive' value={positiveVotes} />  
        </tbody>
      </table>
    </div>
  )}

  return (
    <div>
    <p>No feedback given</p>
    </div>
  )
} 

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

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
      <Button clickHandler={() => clickHandler(bad, setBad)} text='bad'/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)