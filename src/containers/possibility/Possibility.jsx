import React from 'react'
import './possibility.css'
import posibilityImage from '../../assets/possibility.png'
import { Link } from 'react-router-dom'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={posibilityImage} alt="" />
      </div>
      <div className='gpt3__possibility-content'>
      <Link to='/sign-up'><h4>Request Early Access to Get Started</h4></Link>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <Link to='/sign-up'><h4>Request Early Access to Get Started</h4></Link>
      </div>
    </div>
  )
}

export default Possibility