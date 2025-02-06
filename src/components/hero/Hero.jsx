import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'> 
            <h1> Soji Empire Foundation Service To Humanity</h1>
            <p>Our mission is to empower individuals and communities by providing
              resources, support, and programs that foster sustainable growth and development.
            </p>
            <button className='btn'>Learn More!<img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero