import React from 'react'
import Box4 from '../Box4'

const Box3 = ({ count }) => {
  return (
    <div style={{
      width: '600px',
      height: '600px',
      backgroundColor: 'green'
    }}>
      <Box4
        count={count}
      />
    </div>
  )
}

export default Box3
