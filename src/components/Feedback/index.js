// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedback: true}

  isClicked = () => {
    this.setState({isFeedback: false})
  }

  render() {
    const {isFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {isFeedback ? (
          <div className="emoji-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="list-container">
              {emojis.map(each => (
                <li key={each.id} className="emoji-list">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.isClicked}
                  >
                    <img
                      src={each.imageUrl}
                      className="image"
                      alt={each.name}
                    />

                    <span className="card-name">{each.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-container">
            <div className="emoji-container">
              <img src={loveEmojiUrl} className="image" alt="love emoji" />
              <h1 className="love-head">Thank You!</h1>
              <p className="love-para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
