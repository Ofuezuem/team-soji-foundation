import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/compus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='OUR RESENT PROGRAMS' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Foundation Photos'/>
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What People are Saying'/>
        <Testimonials />
        <Title subTitle='Contact' title='Get in Touch '/>
        <Contact/>
        <Footer />
      </div>
    </div>
  )
}

export default App