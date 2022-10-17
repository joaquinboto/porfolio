import React from 'react'
import './css/skills.css'
import html from '../assets/HTML5.png'
import reactLogo from '../assets/React.png'
import Javascript from '../assets/Javascript.png'
import NodeJS from '../assets/Nodejs.png'
import postgres from '../assets/PostgreSQL.jpg'
import css from '../assets/CSS3.png'
import skills from '../assets/skills.png'



function Skills() {

  const tech = [html , reactLogo , Javascript , NodeJS , css , postgres]

  return (
    <div className='skills'>
      <img src={skills} alt="skills" />
      <div className='logos'>
        {tech.map(skills => (
          <div key={skills}>
            <img width={"50px"} src={skills} alt="skillslogos" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills