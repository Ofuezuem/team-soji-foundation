import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-linus-1.png'
import user_2 from '../../assets/user-vinc-1.png'
import user_3 from '../../assets/user-principle-1.png'
import user_4 from '../../assets/user-osamuta-1.png'
import { useRef } from 'react'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translatex(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translatex(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt='' />
                            <div>
                                <h3>Ofuezuem Linus</h3>
                                <span>PDP Chairman, Ward Two</span>
                            </div>
                        </div>
                        <p>Soji Empire Foundation is not just about words—they take real action.
                            Their initiatives in education and healthcare have transformed many
                            lives. I admire their passion for making a lasting impact.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt='' />
                            <div>
                                <h3>Hon. Vencent Osilonya</h3>
                                <span>Executive Chairman, Ndokwa East</span>
                            </div>
                        </div>
                        <p>Soji Empire Foundation is truly making a difference! Their commitment
                             to education and community development is inspiring. I’ve seen firsthand 
                             how their programs uplift underprivileged children and provide them with
                             opportunities for a brighter future.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt='' />
                            <div>
                                <h3>Paul Maduka</h3>
                                <span>Principle, Ashaka Seccondary School</span>
                            </div>
                        </div>
                        <p>Soji Empire Foundation has set a high standard for humanitarian work.
                             Their programs bring hope and opportunities to people who might
                              otherwise be overlooked. It’s inspiring to see how much they’ve 
                              accomplished.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt='' />
                            <div>
                                <h3>Prince Emeke Osamuta</h3>
                                <span>State House Of Assembly</span>
                            </div>
                        </div>
                        <p>One of the things I love about Soji Empire Foundation is their
                            focus on real, measurable impact. They are improving lives
                            in meaningful ways, from education to healthcare and beyond.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials