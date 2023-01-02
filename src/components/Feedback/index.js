// Write your React code here.

const Feedback = props => {
  const {eachEmoji} = props
  const {name, imageUrl} = eachEmoji

  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} />
        <h1>{name}</h1>
      </div>
    </li>
  )
}
export default Feedback
