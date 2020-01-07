import React from 'react'
import Box3 from '../Box3'

const Box2 = ({ count }) => {
  return (
    <div style={{
      width: '800px',
      height: '800px',
      backgroundColor: 'red'
    }}>
      <Box3
        count={count}
      />
    </div>
  )
}

export default Box2
