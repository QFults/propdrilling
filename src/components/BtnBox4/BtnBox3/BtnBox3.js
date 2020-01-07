import React from 'react'
import BtnBox4 from '../BtnBox4/BtnBox4'

const BtnBox3 = ({ handleBtnClick }) => {
  return (
    <div style={{
      height: '600px',
      width: '600px',
      backgroundColor: 'yellow'
    }}>
      <BtnBox4
        handleBtnClick={handleBtnClick}
      />
    </div>
  )
}

export default BtnBox3
