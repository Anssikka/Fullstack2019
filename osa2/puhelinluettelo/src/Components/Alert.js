import React from 'react'

const Notification = ({ message }) => {
  if (message === null || message === '') {
    return null
  }

const inlineStyle = {  
  
  color: 'blue',
  background: 'orange',
  fontSize: 25,
  borderStyle: 'dotted',
  borderRadius: 15,
  width: 500,
  padding: 10,
  marginBottom: 10
}

return (
  <div style={inlineStyle}>
    {message}
  </div>
)

}

export default Notification