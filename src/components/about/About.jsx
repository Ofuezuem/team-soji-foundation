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
            <h3>Meet Our Principal</h3>
            <h2>Comrade Solomon Ejiemili (Soji)</h2>
            <p>Soji Empire Foundation is a non-governmental organization dedicated to 
              driving positive change in communities by promoting education, healthcare,
               and sustainable development. We believe that every individual deserves
                equal opportunities to thrive, and our mission is to uplift the 
                underprivileged through impactful initiatives.</p>
            <p>Our mission is to empower individuals and communities by providing
               resources, support, and programs that foster sustainable growth and 
               development.</p>
             <p>To create a society where every person has access to quality education,
               healthcare, and opportunities for a better life
              </p>
        </div>
    </div>
  )
}

export default About