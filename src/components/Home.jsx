import React from 'react'
import './css/home.css'
import separador from '../assets/separatorw.png'

function Home() {

  return (
    <div className='home'>
       <div>
        <span className='spanHi'>Hi, I am</span>
        <h1>Joaquin Boto
          <span className='subtitle'>Full Stack Developer</span>
        </h1>
        <img className='separadorhome' src={separador} alt="separador" />
       </div>
    </div>
  )
}

export default Home