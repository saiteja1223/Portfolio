import React, { useState } from 'react'
import './works.css'
function Works() {
  const [currentIndex,setCurrentIndex]=useState(0);
  const ar = [
    {img: './Asserts/Hiskills.jpg',title: "Skill Traccer",info:"A website has been developed to facilitate employee skill evaluation and feedback by managers. Employees can log in to the website to access their certificates and view feedback provided by their managers"}, 
    { img: './Asserts/hotel.jpg', title: "Hotel Booking",info:"This hotel booking website allows users to easily find and book rooms on their preference. Users can filter seearch results by cost,rating and place, providing a tailored booking experience"},
    { img: './Asserts/music.jpg', title: "My Sportify",info:"This music listening website provides users with a seamless and interactive experience. Users can control audio playback, skip to the next or previous track, and search for specific songs." },
    { img: './Asserts/todo.png', title: "Todo List",info:"This to-do list application enables users to efficiently track their daily tasks. Users can easily add, manage, and delete tasks as they are completed. ensuring a focused and organized approach to their daily responsibilities." },
    { img: './Asserts/voting.jpg', title: "Election voting" ,info:"This voting system is a comprehensive platform designed for efficient and secure elections. It allows eligible users to cast their votes electronically, providing a convenient and accessible voting experience."},
  ]
  function forward(){
    if(currentIndex<ar.length-1)
    setCurrentIndex(currentIndex+1)
    else
    setCurrentIndex(0)
  }
  function backword(){
    if(currentIndex<=0){
    setCurrentIndex(ar.length-1)
    }
  else
  setCurrentIndex(currentIndex-1)
  
  }
 
  return (
    <section id='works'>
      <h2 className='worksTitle'> My Portfolio</h2>
      <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect ,I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence </span>
      <div className='worksImgs'>

     <div><button className='bt1' id='one' onClick={()=>backword()}>👈</button></div> 

        {ar.map((items, id) => {
          return (
            <div className='Images' style={{display:id===currentIndex?'block':'none'}}>
              <img src={items.img} alt='image' width={300} height={300} style={{marginTop:10}}></img>
              <h1>{items.title}</h1>
              <p>{items.info}</p>

            </div>
          )
        })}
       <div> <button className='bt1' id='two' onClick={()=>forward()}>👉</button></div> 


      </div>
       <button className='workBtn'><a href='./Asserts/SaitejaResume.pdf' download='saiteja.pdf'>Download Resume</a></button>
    </section>
  )
}

export default Works