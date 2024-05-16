// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div className="planet-item-container">
      <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planet-title">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
