import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({clickHandler, text}) => (
  <div><button onClick={clickHandler}>{text}</button></div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, addVote] = useState(new Array(anecdotes.length).fill(0))




  const clickHandler = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const voteHandler = (index) => {
    const temp = [...vote]
    temp[index] = temp[index] + 1
    addVote(temp)
  } 

  
  return (
    <div>
      {props.anecdotes[selected]}
      <Button clickHandler={clickHandler} text='Next anecdote' />
      <Button clickHandler={() => voteHandler(selected)} text='Vote anecdote' />
      <p>has: {vote[selected]} votes </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)