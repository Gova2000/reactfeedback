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
        <img src={imageUrl} alt="name" className="img" onClick={func} />
        <p>{name}</p>
      </li>
    </>
  )
}

export default Box
