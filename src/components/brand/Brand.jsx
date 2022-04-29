import React from 'react'
import './brand.css'
import { google,slack, atlassian,dropbox,shopify } from './import'
import { motion } from 'framer-motion'

const Brand = () => {

  const loadVarsParent={
    initial:{
      opacity: 0,
    },
    whileInView:{
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        
      }
    }
  }
  const loadVarsChild={
    initial:{y:'-2vw',opacity: 0},
    whileInView:{
      y:0,
      opacity: 1,
      transition: {
      duration: 4, 
      }
    }
  }

  return (
    <motion.div className='gpt3__brand section__padding' variants={loadVarsParent} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
      <motion.div variants={loadVarsChild}>
        <img src={google} alt='google' />
      </motion.div>
      <motion.div variants={loadVarsChild}>
        <img src={slack} alt='slack' />
      </motion.div>
      <motion.div variants={loadVarsChild}>
        <img src={atlassian} alt='atlassian' />
      </motion.div>
      <motion.div variants={loadVarsChild}>
        <img src={dropbox} alt='dropbox' />
      </motion.div>
      <motion.div variants={loadVarsChild}>
        <img src={shopify} alt='shopify' />
      </motion.div>
    </motion.div>
  )
}

export default Brand