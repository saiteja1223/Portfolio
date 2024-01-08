import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    const[showMenu,setShowMenu]=useState(false)
  return (
    <nav className='navbar'>
    
        <img src='./Asserts/two.jpg' className='logo' alt=''/>
    
    <div className='deskTopMenu'>
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-25} duration={500} className="desktopMenuListItem">About</Link> 
        <Link activeClass="active" to='works' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Client</Link>
    </div>
    
        <button className='dexktopMenuBtn' onClick={()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
            <img src='./Asserts/contact.png' alt="" className='deskTopMenuImg' />Contact Me
        </button>
        <img src='./Asserts/menu.png' className='mobMenu' alt='' onClick={()=>setShowMenu(!showMenu)}/>
    
    <div className='navMenu' style={{display:showMenu?'flex':'none'}} >
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={15} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link> 
        <Link activeClass="active" to='works' spy={true} smooth={true} offset={10} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to='clients' spy={true} smooth={true} offset={10} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Client</Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>contact</Link>
        <button className='dexktopMenuBtn' onClick={()=>document.getElementById('skills').scrollIntoView({behavior:'smooth'})}>info</button>
    </div>
    
</nav>


  )
}

export default Navbar



