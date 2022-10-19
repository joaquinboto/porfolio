import React from 'react'
import './css/home.css'
import separador from '../assets/separatorw.png'


function Home() {
  


  return (
    <div className='home' id="homepage">
       <div className='b'>
        <span className='spanHi'>Hi, I am</span>
        <h1>Joaquin Boto
          <span className='subtitle'>Full Stack Developer</span>
        </h1>
        <img className='separadorhome' src={separador} alt="separador" />
        <button className="cssbuttons-io-button">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor"></path></svg>
          <a className='adowload' href="./CVJOAQUIN.pdf" download={' '}><span>Download CV</span></a>
        </button>
       </div>
       <div className="dvProyectsAnimacion">
                 <div className="box1"></div>
                 <div className="box2"></div>
                 <div className="box3"></div>
        </div>
    </div>
  )
}

export default Home