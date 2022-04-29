import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import SignUp from '../../pages/signUp/SignUp'
import { motion } from 'framer-motion'

const Menu = () => (
  <>
    <motion.p variants={menuVars} initial='initial' whileHover='whileHover' whileTap='whileTap'><a href='#home'>Home</a></motion.p>
    <motion.p variants={menuVars} initial='initial' whileHover='whileHover' whileTap='whileTap'><a href='#wgpt3'>What is GPT?</a></motion.p>
    <motion.p variants={menuVars} initial='initial' whileHover='whileHover' whileTap='whileTap'><a href='#possibility'>Open AI</a></motion.p>
    <motion.p variants={menuVars} initial='initial' whileHover='whileHover' whileTap='whileTap'><a href='#features'>Case Studies</a></motion.p>
    <motion.p variants={menuVars} initial='initial' whileHover='whileHover' whileTap='whileTap'><a href='#blog'>Library</a></motion.p>
  </>
)

const menuVars={
  initial:{
    borderBottom: '2px solid transparent',
  },
  whileHover:{
    borderBottom: '2px solid #fff',
  },
  whileTap:{ scale: 0.9 }
}
const btnVars={
  whileHover:{
    scale: 1.1,
  },
  whileTap:{ scale: 0.9 }
}


const Navbar = () => {
  const [toggleMenu,setToggleMenu] =useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <Link to='/sign-up'><motion.p variants={btnVars} whileHover='whileHover' whileTap='whileTap'>Sign In</motion.p></Link>
        <Link to='/sign-up'><motion.button variants={btnVars} whileHover='whileHover' whileTap='whileTap' type='button'>Sign up</motion.button></Link>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container swing-in-top-fwd'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <Link to='/sign-up'><button type='button'>Sign up</button></Link>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar