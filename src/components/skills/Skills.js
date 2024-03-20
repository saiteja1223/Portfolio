import React, { useState } from 'react'
import './skills.css'
import Skillset from '../skillSet/Skillset'

function Skills() {
    const[visible,setVisible]=useState(false)
    function open(){
        setVisible(!visible)

    }
    function close(){
        setVisible(!visible)

    }
    
    
  return (
    <section className='skills'>
        <span className='skillTitle'>My Work Encompasses</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating virtually appealing and user-friendly websites.I have a stron understanding of design and a keen eye for detail, I am proficient in Html,css,javaScript and Reactjs as well as good with creating restfull API's with springboot</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src='./Asserts/frontend.jpg' alt='' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Frontend Development</h2>
                    <p>It involves creating the user interface and user experience of a website or application </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='./Asserts/website-design.png' alt='' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Website design</h2>
                    <p>Website design encompasses the visual and structural elements of a website </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='./Asserts/images.png' alt='' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Backend Development </h2>
                    <p> It involves building the server-side of a website or application.It includes managing database and handeling server logic. </p>
                </div>
            </div>
        </div>
        <button className='skillSet' onClick={()=>open()}>View Skills</button>
        {visible&&<Skillset close={close}></Skillset>}
    </section>
  )
}

export default Skills