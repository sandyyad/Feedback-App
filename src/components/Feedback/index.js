// Write your React code here.
import './index.css'

const Feedback = props => {
  const {eachEmoji, getUpdate} = props
  const {name, imageUrl} = eachEmoji

  return (
    <li className="list-element">
      <div>
        <button onClick={getUpdate} type="button" className="button">
          <img className="Image" src={imageUrl} alt={name} />
        </button>
        <p>{name}</p>
      </div>
    </li>
  )
}
export default Feedback
