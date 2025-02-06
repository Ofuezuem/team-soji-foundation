import './Campus.css'
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import white_arrow from '../../assets/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallery1} alt=''/>
            <img src={gallery2} alt=''/>
            <img src={gallery1} alt=''/>
            <img src={gallery2} alt=''/>
        </div>
        <button className='btn dark-btn'>See More Here <img  src={white_arrow} alt=''/></button>
    </div>
  )
}

export default Campus