import React from 'react'

const BtnBox5 = ({ handleBtnClick }) => {
  return (
    <div style={{
      height: '200px',
      width: '200px',
      backgroundColor: 'blue'
    }}>
      <button onClick={handleBtnClick} style={{
        fontSize: '25px',
        textAlign: 'center',
        margin: '10%',
        width: '80%'
      }}>
        Click Me
      </button>
    </div>
  )
}

export default BtnBox5
