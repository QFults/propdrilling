import React from 'react'
import Box2 from '../Box2'

const Box1 = ({ count }) => {
  return (
    <div style={{
      width: '1000px',
      height: '1000px',
      backgroundColor: 'blue',
    }}>
      <Box2
        count={count}
      />
    </div>
  )
}

export default Box1
