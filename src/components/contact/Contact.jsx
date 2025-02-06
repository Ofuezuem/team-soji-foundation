import  './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5a1bbeaa-b45a-4fa6-b6f8-721e43aa7a59");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt=''/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quam distinctio quibusdam esse fuga, atque nam ipsum 
                laudantium voluptatum veritatis maiores impedit ratione
                labore excepturi hic neque aliquid culpa inventore
            </p>
            <ul> 
                <li><img src={mail_icon} alt='' />info@sojiempire.com </li>
                <li><img src={phone_icon} alt=''/> +2348066930366</li>
                <li><img src={location_icon}  alt=''/>block 13, 234. kwale delta state</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Your Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Mesage Here</label>
                <textarea name='message' rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow}  alt=''/> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact