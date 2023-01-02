import {Component} from 'react'
import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {isGood: false}

  getResults = () => {
    this.setState(prevState => ({isGood: !prevState.isGood}))
  }

  render() {
    const {isGood} = this.state
    const emoji = resources.emojis

    return (
      <div className="main-div">
        <div className="sub-div">
          <h1 className="heading">
            How satisfied are you with our
            <br /> Customer support performance
          </h1>
          <ul className="emojiContainer">
            {emoji.map(eachEmoji => (
              <Feedback
                getUpdate={this.getResults}
                eachEmoji={eachEmoji}
                key={eachEmoji.id}
              />
            ))}
          </ul>
          {isGood && (
            <div>
              <img src={resources.loveEmojiUrl} />
              <h1>Thank you</h1>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
