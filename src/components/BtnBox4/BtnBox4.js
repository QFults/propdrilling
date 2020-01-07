import React from 'react'
import BtnBox5 from '../BtnBox5'

const BtnBox4 = ({ handleBtnClick }) => {
  return (
    <div style={{
      height: '400px',
      width: '400px',
      backgroundColor: 'red'
    }}>
      <BtnBox5
        handleBtnClick={handleBtnClick}
      />
    </div>
  )
}

export default BtnBox4
