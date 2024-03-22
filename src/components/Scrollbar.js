import React from 'react'
import { useState,useEffect} from 'react';
function Scrollbar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percentage = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollBarStyles = {
        width: `${scrollPercentage}%`,
        backgroundColor: 'blue', // Change color as per your requirement
        height: '5px',
        position: 'fixed',
        top: 69,
        left: 0,
        zIndex: 9999,
        transition: 'width 0.2s ease' // Smooth transition
    };

  return (
    <div style={scrollBarStyles}></div>
  )
}

export default Scrollbar