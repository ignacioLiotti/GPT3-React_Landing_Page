import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import Layer1 from '../../assets/Layers1.png'

import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Header = () => {

  const btnVars={
    whileHover:{
      scale: 1.1,
    },
    whileTap:{ scale: 0.9 }
  }

  const loadVars={
    initial:{
      opacity: 0,
      y: '-5vw',
    },
    whileInView:{
      opacity: 1,
      y:0,
      transition: {
        duration: 1,
        ease: [0.250, 0.460, 0.450, 0.940]
      }
    }
  }


  return (
    <div className='gpt3__header' id='home'>
      <motion.div className='gpt3__header-content'
        variants={loadVars}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true }}
      >

        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email'/>
          <Link to='/sign-up'><motion.button variants={btnVars} whileHover='whileHover' whileTap='whileTap' type='button'>Get Started</motion.button></Link>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </motion.div>
      <motion.div className='gpt3__header-image header__bg'
        initial={{ backgroundPositionX:'3px', backgroundPositionY:'-7px'}}
        animate={{backgroundPositionX:'-3px', backgroundPositionY:'4px'}}
        transition={{repeat:Infinity, repeatType:'reverse',duration:2, ease:'easeInOut'}}
      >
          <motion.div className='header__face'
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
    </div>
  )
}

export default Header