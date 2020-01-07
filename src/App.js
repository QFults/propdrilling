import React, { Component } from 'react'
import Box1 from './components/Box1'
import BtnBox1 from './components/BtnBox1'

class App extends Component {
  state = {
    count: 0
  }

  handleBtnClick = () => {
    let count = this.state.count
    this.setState({ count: count + 1 })
  }

  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <Box1
          count={this.state.count}
        />
        <BtnBox1
          handleBtnClick={this.handleBtnClick}
        />
      </div>
    )
  }
}

export default App
