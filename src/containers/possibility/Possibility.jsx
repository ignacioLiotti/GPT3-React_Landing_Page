import React from 'react'
import './possibility.css'
import posibility2 from '../../assets/posibility2.png'
import btn1 from '../../assets/message.png'
import btn2 from '../../assets/category.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Possibility = () => {

  const loadVars={
    initial:{
      x:'-5vw',
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

  const loadVarsFirst={
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
  
  const loadVarsSecond={
    initial:{
      x:'5vw',
      opacity: 0,
    },
    whileInView:{
      x:0,
      opacity: 1,
      transition: {
        duration: 5
      }
    }
  }

  
  const loadVarsThird={
    initial:{
      x:'5vw',
      opacity: 0,
    },
    whileInView:{
      x:0,
      opacity: 1,
      transition: {
        duration: 8
      }
    }
  }


  const loadVarsParent={
    initial:{
    },
    animate:{
      transition: {
        staggerChildren: 1,
        delayChildren: 0.5,
      }
    }
  }
  const loadVarsChild={
    initial:{opacity: 1, height: 0,width: 0},
    animate:{
      opacity: [1,1,1,0],
      height:500,
      width:500,
      transition: {
        duration: 8,
        repeat:Infinity,
        repeatType:'loop',
        repeatDelay: 0
      }
    }
  }

  const hoverVarsFirst={
    initial:{y:'25'},
    animate:{
      y:0,
      transition: {
        duration: 1.5,
        repeat:Infinity,
        repeatType:'reverse',
      }
    }
  }
  const hoverVarsSecond={
    initial:{y:'-15'},
    animate:{
      y:3,
      transition: {
        duration: 3,
        repeat:Infinity,
        repeatType:'reverse',
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <motion.div className='gpt3__possibility-image' variants={loadVars} initial='initial' whileInView='whileInView'>
        <motion.div variants={loadVarsParent} initial='initial' animate='animate'>
          <motion.div variants={loadVarsChild} className='img__rad'></motion.div>
          <motion.div variants={loadVarsChild} className='img__rad'></motion.div>
          <motion.div variants={loadVarsChild} className='img__rad'></motion.div>
          <motion.div variants={loadVarsChild} className='img__rad'></motion.div>
          <motion.div variants={loadVarsChild} className='img__rad'></motion.div>
        </motion.div>
        <img  src={posibility2} alt="" />
        <motion.div variants={hoverVarsFirst} initial='initial' animate='animate' id='img__btn1' ><img src={btn1} alt="" /></motion.div>
        <motion.div variants={hoverVarsSecond} initial='initial' animate='animate' id='img__btn2' ><img src={btn2} alt="" />My Apps</motion.div>
      </motion.div>

      <div className='gpt3__possibility-content'>
      <Link to='/sign-up'><motion.h4 variants={loadVarsThird} initial='initial' whileInView='whileInView'>Request Early Access to Get Started</motion.h4></Link>
        <motion.h1 className='gradient__text' variants={loadVarsFirst} initial='initial' whileInView='whileInView'>The possibilities are beyond your imagination</motion.h1>
        <motion.p variants={loadVarsSecond} initial='initial' whileInView='whileInView'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</motion.p>
        <Link to='/sign-up'><motion.h4 variants={loadVarsThird} initial='initial' whileInView='whileInView'>Request Early Access to Get Started</motion.h4></Link>
      </div>
    </div>
  )
}

export default Possibility