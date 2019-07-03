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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
    <Header coursename = {course} />
    <Content palat = {[part1.name, part2.name, part3.name]} tehtavat = {[part1.exercises, part2.exercises, part3.exercises]} />
    <Total total = {part1.exercises + part2.exercises + part3.exercises }/>
    </div>
    
    
  
  )
}

ReactDOM.render(<App />, document.getElementById('root'))