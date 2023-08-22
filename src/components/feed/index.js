import './index.css'

const Box = props => {
  const {det, click} = props
  const {name, imageUrl} = det

  const func = () => {
    click()
  }

  return (
    <>
      <li>
        <button type="button" onClick={func}>
          <img src={imageUrl} alt={name} />
        </button>
        <p>{name}</p>
      </li>
    </>
  )
}

export default Box
