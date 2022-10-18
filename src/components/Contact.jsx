import React from 'react'
import './css/contact.css'
import contact from '../assets/contact.png'

function Contact() {
  return (
    <div className='contact'>
      <div><img src={contact} alt="" /></div>
      <div className='formulario'>
        <input placeholder='ENTER YOUR NAME*'  type="text" />
        <input placeholder='ENTER YOUR EMAIL*' type="text" />
        <input placeholder='PHONE NUMBER' type="text" />
        <textarea name="" id="" cols="50" rows="10">
        </textarea>
        <input className='inputSubmit' type="submit" value="SUBMIT" />
      </div>
    </div>
  )
}

export default Contact