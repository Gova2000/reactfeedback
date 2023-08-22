// Write your React code here.
import {Component} from 'react'

import Box from '../feed'

import './index.css'

class Feedback extends Component {
  state = {state: false}

  feedback = () => {
    this.setState(prev => ({state: !prev.state}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {state} = this.state

    const card = (
      <div className="box2">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          we can use your feedback to increase our customer support performance
        </p>
      </div>
    )

    return (
      <div className="main">
        {state ? (
          card
        ) : (
          <div className="box2">
            <div className="box1">
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="box">
                {emojis.map(each => (
                  <Box det={each} key={each.id} click={this.feedback} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
