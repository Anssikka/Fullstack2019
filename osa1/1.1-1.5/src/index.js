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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    <Header coursename = {course.name} />
    <Content palat = {[course.parts[0].name, course.parts[1].name, course.parts[2].name]} tehtavat = {[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
    <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises }/>
    </div>
    
    
  
  )
}

ReactDOM.render(<App />, document.getElementById('root'))