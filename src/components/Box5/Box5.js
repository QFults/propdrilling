import React from 'react'

const Box5 = ({ count }) => {
  return (
    <div style={{
      width: '200px',
      height: '200px',
      backgroundColor: 'purple'
    }}>
      <p style={{
        fontSize: '100px',
        color: 'white',
        textAlign: 'center'
      }}>
        {count}
      </p>
    </div>
  )
}

export default Box5
