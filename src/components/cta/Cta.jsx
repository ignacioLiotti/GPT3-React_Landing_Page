import React from 'react'
import { Link } from 'react-router-dom'
import './cta.css'
import { motion } from 'framer-motion'

const Cta = () => {

  const loadVars={
    initial:{
      x:'5vw',
      opacity: 0,
    },
    whileInView:{
      x:0,
      opacity: 1,
      transition: {
        duration: 3
      }
    }
  }

  return (
    <motion.div className='gpt3__cta' variants={loadVars} initial='initial' whileInView='whileInView' viewport={{once:true}}>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>

      </div>
      <div className='gpt3__cta-btn'>
        <Link to='/sign-up'><button type='button'>Get Started</button></Link>
      </div>
    </motion.div>
  )
}

export default Cta