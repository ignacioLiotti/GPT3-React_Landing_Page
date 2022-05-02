import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './imports'
import { motion } from 'framer-motion'

const blog = () => {

  const loadVars={
    initial:{
      y:'3vw',
      opacity: 0,
    },
    whileInView:{
      y:0,
      opacity: 1,
      transition: {
        duration: 3
      }
    }
  }
  const loadVarsMain={
    initial:{
      x:'-3vw',
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
  const loadVarsTitle={
    initial:{
      opacity: 0,
    },
    whileInView:{
      opacity: 1,
      transition: {
        duration: 3
      }
    }
  }

  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <motion.h1 className='gradient__text' variants={loadVarsTitle} initial='initial' whileInView='whileInView' viewport={{once:true}}>A lot is happening, 
We are blogging about it.</motion.h1>
      </div>
      <div className='gpt3__blog-container'>
        <motion.div className="gpt3__blog-container-groupA" variants={loadVarsMain} initial='initial' whileInView='whileInView' viewport={{once:true}}>
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </motion.div>
        <motion.div className="gpt3__blog-container-groupB" variants={loadVars} initial='initial' whileInView='whileInView' viewport={{once:true}}>
          <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </motion.div>
      </div>
    </div>
  )
}

export default blog