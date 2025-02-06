import './About.css'
import about_img from '../../assets/our-boss.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img' />
            <img src={play_icon} alt='' className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About Soji Empire Foundation</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat?
             g elit. Reprehenderit illo nulla harum, itaque alias doloremque, nihil 
             ut, laboriosam repellat reiciendis beatae consectetur dicta ipsum quaerat
            sint quae minus aperiam suscipit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolore distinctio 
             aut magnam deleniti iusto ratione doloribus doloremque eum animi quo numquam debitis. 
             Expedita provident porro earum nam impedit.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet
                suscipit sit eligendi quisquam ducimus voluptates vitae perferendis
                cupiditate, nesciunt fugit provident! Repellat magnam harum dolorem et
                </p>
        </div>
    </div>
  )
}

export default About