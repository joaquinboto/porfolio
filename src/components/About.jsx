import React from 'react'
import abou from '../assets/about.png'
import separador from '../assets/separatorBlack 7.png'
import './css/about.css'



function About() {
  return (
    <div className='about'>
      <div className='header'>
        <img className='imgabout' src={abou} alt="about" />
        <p className='parrafoAbout'>My name is Joaquín Boto, I am a graduate of Henry. I have been learning Front-End and Back-End technologies for a year and this time was enough to make sure that this is my place in the industry.</p>
        <span>EXPLORE</span>
        <img className='separatorabout' src={separador} alt="separadorblack" />
      </div>
      <div className='main' >
        <div className='topmain'>
          <h3>
          <i className="lni lni-brush-alt"></i>
          DESIGN
          </h3>
          <p>I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work</p>
        </div>
        <div className='topmain2'>
          <h3>
          <i className="lni lni-code"></i>
          DEVELOPMENT
          </h3>
          <p>
          Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
          </p>
        </div>
        <div className='buttonmain'>
          <h3>
          <i className="lni lni-graph"></i>
          MAINTENANCE
          </h3>
          <p>
          In case of any problems or the need for changes, I can introduce new functionalities and solutions.
          </p>
        </div>
      </div>
        <img src={separador} alt="separador" />
    </div>
  )
}

export default About