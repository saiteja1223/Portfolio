import React from 'react'
import './skillset.css'
function Skillset({close}) {
  return (
    <>
    <div className='popup'>
      <button className='btn1' onClick={close}>✂</button>
    <div className='imageContainer'>
      
      <div id='one1' className='singleImage'><img src='./Asserts/javaLogo.png' alt=''></img><h2>Java</h2></div>
      <div id='two2' className='singleImage'><img src='./Asserts/Logo192.png' alt='hbj'></img><h2>React</h2></div>
      <div id='three' className='singleImage'><img src='./Asserts/html.png' alt=''></img><h2>Html</h2></div>
      <div id='four' className='singleImage'><img src='./Asserts/cssLogo.jpg' alt=''></img><h2>Css</h2></div>
      <div id='five' className='singleImage'><img src='./Asserts/javascriptLogo.jpg' alt=''></img><h2>JavaScript</h2></div>
      <div id='six' className='singleImage'><img src='./Asserts/sqlLogo.png' alt=''></img><h2>SQL</h2></div>
      <div id='six' className='singleImage'><img src='./Asserts/angular.png' alt=''></img><h2>Angular</h2></div>
      <div id='seven' className='singleImage'><img src='./Asserts/postgresLogo.png' alt=''></img><h2>Postgres</h2></div>
      <div id='eight' className='singleImage'><img src='./Asserts/spring1.jpg' alt=''></img><h2>SpringBoot</h2></div>
    </div>
    </div>
    </>
  )
}

export default Skillset