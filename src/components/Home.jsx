import React from 'react'
import './css/home.css'
import separador from '../assets/separatorw.png'

function Home() {

  return (
    <div className='home'>
       <div>
        <span>my name is Joaquin</span>
        <h1>I’M A DEVELOPER</h1>
        <img src={separador} alt="separador" />
       </div>
    </div>
  )
}

export default Home