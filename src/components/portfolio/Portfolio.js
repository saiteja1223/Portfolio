import React from 'react'
import './portfolio.css'
import Navbar from '../navbar/Navbar'
import Intro from '../intro/Intro'
import Skills from '../skills/Skills'
import Works from '../works/Works'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Scrollbar from '../Scrollbar'
function Portfolio() {
  return (
    <div>
        <Navbar></Navbar>
        <Scrollbar></Scrollbar>
        <Intro></Intro>
        <Skills></Skills>
        <Works></Works>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Portfolio