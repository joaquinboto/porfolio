import React from 'react'
import './css/contact.css'
import contact from '../assets/contact.png'

function Contact() {
  return (
    <div className='contact' id='contactpage'>
      <div><img className='imgContactBanner' src={contact} alt="" /></div>
      <div className='formulario'>
        <input placeholder='ENTER YOUR NAME*'  type="text" />
        <input placeholder='ENTER YOUR EMAIL*' type="text" />
        <input placeholder='PHONE NUMBER' type="text" />
        <textarea name="" id="" cols="50" rows="10">
        </textarea>
        <button className='inputSubmit'>SUBMIT</button>
      </div>
    </div>
  )
}

export default Contact