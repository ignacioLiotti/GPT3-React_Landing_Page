import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const featuresData = [
  {
    title:'Chatbots',
    text:'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
  },
  {
    title:'Knowledgebase',
    text:'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
  },
  {
    title:'Education',
    text:'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
  },
]

const WhatGPT3 = () => {

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
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <motion.div className='gpt3__whatgpt3-feature' variants={loadVars} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
        <Feature title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </motion.div>
      <motion.div className='gpt3__whatgpt3-heading' variants={loadVars} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <Link to='/sign-up'><p>Explore The Library</p></Link>
      </motion.div>
      <motion.div className='gpt3__whatgpt3-container'
        variants={loadVarsParent}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true }}
      >
        {featuresData.map((item,index)=>{
          return(
          <motion.div variants={loadVarsChild} >
            <Feature key={index} title={item.title} text={item.text} />
          </motion.div>)})
        }
      </motion.div>
    </div>
  )
}

export default WhatGPT3