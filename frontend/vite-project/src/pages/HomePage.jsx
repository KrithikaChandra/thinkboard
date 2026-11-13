import React, { useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx';

const HomePage = () => {
    const [isRateLimited, setIsRateLimited]= useState(false);
  return (
    <div className='min-h-screen'>
        <NavBar/>
        {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage
