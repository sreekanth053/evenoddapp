// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * (100 - 0) + 0),
    }))
  }

  getNumber = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const displayText = this.getNumber()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="aboutNumber">Count is {displayText}</p>
          <button type="button" className="btn" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="details">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
