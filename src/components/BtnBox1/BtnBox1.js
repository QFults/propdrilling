import React from 'react'
import BtnBox2 from '../BtnBox2'

const BtnBox1 = ({ handleBtnClick }) => {
  return (
    <div style={{
      height: '1000px',
      width: '1000px',
      backgroundColor: 'purple',
    }}>
      <BtnBox2
        handleBtnClick={handleBtnClick}
      />
    </div>
  )
}

export default BtnBox1
