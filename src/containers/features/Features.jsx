import React from 'react'
import './features.css'
import {Feature} from '../../components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const featuresData=[
  {
    title:'Improving end distrusts instantly ',
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title:'Become the tended active ',
    text:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    title:'Message or am nothing',
    text:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title:'Really boy law county ',
    text:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  },
]

const Features = () => {

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
    <div className='gpt3__features section__padding' id='features'>
      <motion.div className='gpt3__features-heading' variants={loadVars} initial='initial' whileInView='whileInView' viewport={{once:true}}>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <Link to='/sign-up'><p>Request Early Access to Get Started</p></Link>
      </motion.div>
      <motion.div className='gpt3__features-container' variants={loadVarsParent} initial='initial' whileInView='whileInView' viewport={{once:true}}>
        {featuresData.map((item,index)=>{
          return(
          <motion.div variants={loadVarsChild} >
            <Feature key={index} title={item.title} text={item.text} />
          </motion.div>
          )
})}
      </motion.div>      
    </div>
  )
}

export default Features