import React from 'react'
import Box5 from '../Box5'

const Box4 = ({ count }) => {
  return (
    <div style={{
      width: '400px',
      height: '400px',
      backgroundColor: 'yellow'
    }}>
      <Box5
        count={count}
      />
    </div>
  )
}

export default Box4
