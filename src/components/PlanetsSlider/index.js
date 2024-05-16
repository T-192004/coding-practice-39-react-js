// Write your code here
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {planetsList} = this.props
    return (
      <div className="app-container" data-testid="planet">
        <h1 className="main-heading">PLANET</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {planetsList.map(planet => (
              <PlanetItem planet={planet} key={planet.id} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
export default PlanetsSlider
