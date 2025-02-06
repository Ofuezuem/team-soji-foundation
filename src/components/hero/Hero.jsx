import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'> 
            <h1> Soji Empire Foundation Service To Humanity</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis
               voluptate pariatur ex? Fugiat nam culpa distinctio dolorem! Obcaecati consequuntur
            </p>
            <button className='btn'>Learn More!<img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero