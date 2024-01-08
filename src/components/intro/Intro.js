import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
function Intro() {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello' >Hello</span>
        <span className='introText'>I'm <span className='introName'>SaiTeja</span><br/>Fullstack Developer </span>
        <p className='introPara'>I am a skilled web designer with experience in creating<br></br> visual appealing and user friendly websites </p>
        <Link><button className='btn'><img src='./Asserts/hireme.png' alt='hire me'className='btnImg'></img>Hire me</button></Link>
    </div>
    <img src='./Asserts/saiteja.png' alt='profilr' className='bg'></img>
   </section>

  )
}

export default Intro