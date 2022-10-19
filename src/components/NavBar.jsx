import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'
import Logo from '../assets/logo.png'


function NavBar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <img src={Logo} alt="Logo"></img>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="#homepage">Home</a>
          <a href="#aboutpage">About me</a>
          <a href="#skillspage">Skills</a>
          <a href="#projectspage">Proyects</a>
          <a href="#contactpage">Contact</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
  img {
    z-index: 1000
  }
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a{
    color: white;
    text-decoration: none;
    margin-right: 3rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1000;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer{
    @media(min-width: 768px){
      display: none;
    }
    z-index: 1000;
  }
`

const BgDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`