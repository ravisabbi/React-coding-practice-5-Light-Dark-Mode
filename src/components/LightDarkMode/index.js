// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkBg: true, className: 'dark-bg'}

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.isDarkBg) {
        return {isDarkBg: false, className: 'light-bg'}
      }
      return {isDarkBg: true, className: 'dark-bg'}
    })
  }

  renderBgBtn = () => {
    const {isDarkBg} = this.state
    if (isDarkBg) {
      return (
        <button className="button" type="button" onClick={this.changeMode}>
          Light Mode
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.changeMode}>
        Dark Mode
      </button>
    )
  }

  render() {
    const {className} = this.state
    return (
      <div className="bg-container">
        <div className={`${className} card-container`}>
          <h1 className="heading">Click To Change Mode</h1>
          {this.renderBgBtn()}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
