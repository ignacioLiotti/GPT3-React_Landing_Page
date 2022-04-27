import React from 'react'
import { motion } from 'framer-motion'
import Layer1 from '../../assets/Layers1.png'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from '../../containers'
import './notFound.css'

const NotFound = () => {
  return (
    <div className='gpt3__404'>
    <div className='gpt3__404-container gradient__bg'>
    <motion.div className='gpt3__404-container_bg'
        initial={{ backgroundPositionX:'3px', backgroundPositionY:'-7px' }}
        animate={{backgroundPositionX:'-3px', backgroundPositionY:'4px'}}
        transition={{repeat:Infinity, repeatType:'reverse',duration:2, ease:'easeInOut'}}
      >
          <motion.div className='gpt3__404-container_face'
            initial={{backgroundPositionY:'-3px'}}
            animate={{backgroundPositionY:'4px'}}
            transition={{repeat:Infinity, repeatType:'reverse',duration:2, ease:'easeInOut'}}
          >
            <motion.img src={Layer1} alt="" 
              initial={{x:'1px',y:'4px' }}
              animate={{x:'-3px',y:'-2px'}}
              transition={{repeat:Infinity, repeatType:'reverse',duration:1.5, ease:'easeInOut'}}
            />
          </motion.div>
    </motion.div>
      <div className='gpt3__404-content'>
        <h1 className='gradient__text'>Page not found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href='/'>Go to Homepage</a>
        <p>(pst, in reality there is nothing else here, its just a project for fun)</p>
      </div>
    </div>
    <Footer showHeading={false}/>
    </div>
  )
}

export default NotFound