import React from 'react'
import BtnBox3 from '../BtnBox3'

const BtnBox2 = ({ handleBtnClick }) => {
  return (
    <div style={{
      height: '800px',
      width: '800px',
      backgroundColor: 'yellow'
    }}>
      <BtnBox3
        handleBtnClick={handleBtnClick}
      />
    </div>
  )
}

export default BtnBox2
