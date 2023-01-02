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

  render() {
    const {isGood} = this.state
    const emojis = resources.emojis

    return (
      <div>
        <ul>
          {emojis.map(eachEmoji => (
            <Feedback eachEmoji={eachEmoji} key={eachEmoji.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
