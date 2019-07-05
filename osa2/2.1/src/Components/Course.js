import React from 'react'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const total = props.parts.map(a => a.exercises).reduce((a, b) => a + b)

  return <p>yhteensä {total} tehtävää</p>
}
  
const Course = (props) => {
  return (
  props.course.map((cours, i) => {
    return (
      <div key={i}>
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

export default Course