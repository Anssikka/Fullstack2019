import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
  <div>
    <h1>This course is: {props.coursename}</h1>
  </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.partname}, number of exercises {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partname = {props.palat[0]} exercises = {props.tehtavat[0]}  />
      <Part partname = {props.palat[1]} exercises = {props.tehtavat[1]}  />
      <Part partname = {props.palat[2]} exercises = {props.tehtavat[2]}  />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises: {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header coursename = {course} />
    <Content palat = {[part1, part2, part3]} tehtavat = {[exercises1, exercises2, exercises3]} />
    <Total total = {exercises1 + exercises2 + exercises3 }/>
    </div>
    
    
  
  )
}

ReactDOM.render(<App />, document.getElementById('root'))