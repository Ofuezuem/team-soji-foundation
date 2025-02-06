import './Programs.css'
import program_1 from '../../assets/programs-1.png'
import program_2 from '../../assets/programs-2.png'
import program_3 from '../../assets/programs-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt=''/>
            <div className="caption">
                <p>Our Scholarship programs to secondary schools across the LGA</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=''/>
            <div className="caption">
                <p>Presentation of books Uniforms and other school material to all secondary school in Ndokwa East LGA</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=''/>
            <div className="caption">
                <p>Enrollment programs for senior secondary schools  ss3 waec in Nigeria</p>
            </div>
        </div>
    </div>
  )
}

export default Programs