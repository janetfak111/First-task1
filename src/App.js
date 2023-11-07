import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Slide from './Components/slide/Slide'
import Footer from './Components/footer/Footer'
import Contact from './Components/contact/Contact'
import About from './Components/about/About'
import Project from './Components/project/Project'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Slide/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App