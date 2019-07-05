import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const total = props.parts.map(a => a.exercises).reduce((a, b) => a + b)

  return <p>yhteensä {total} tehtävää</p>
}
  
const Course = (props) => {
  return (
  props.course.map((cours) => {
    return (
      <div>
      <Header course={cours.name} />
      <Content parts={cours.parts} />
      <Total parts={cours.parts} />
    </div>
    )
  })
  )
}

const Part = ({name, exercises}) =>
  <p>{name} {exercises}</p>

const Content = (props) => {
  return (
    <div>
      {props.parts.map((v, i) => <Part key={i} name={v.name} exercises={v.exercises} />)}
    </div>
  )
} 

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)