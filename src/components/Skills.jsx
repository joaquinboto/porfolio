import React from 'react'
import './css/skills.css'
import html from '../assets/HTML5.png'
import reactLogo from '../assets/React.png'
import Javascript from '../assets/Javascript.png'
import NodeJS from '../assets/Nodejs.png'
import postgres from '../assets/posgres.png'
import css from '../assets/CSS3.png'
import skills from '../assets/skills.png'



function Skills() {

  const tech = [{img: html , h1: "HTML"}, 
  {img: reactLogo , h1: "React"}, 
  {img: Javascript , h1: "JavaScript"},
  {img: NodeJS , h1: "NodeJS"},
  {img: css , h1: "CSS"} ,
  {img: postgres , h1: "PostgreSQL"}]

  return (
    <div className='skills'>
      <img className='imgSkillsBanner' src={skills} alt="skills" />
      <div className='logos'>
        {tech.map(skills => (
          <div className='divskills' key={skills.img}>
            <img className='imglogos' width={"80px"} src={skills.img} alt="skillslogos" />
            <h1 className='h1Skills'>{skills.h1}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills