import React, { useState } from 'react'
import './signUp.css'
import {Footer} from '../../containers/'
import { Link, Route,Routes } from 'react-router-dom'
import { motion } from 'framer-motion'

const SignUp = ({perform}) => {

  const [showCongrats,setShowCongrats] =useState(false)
  const handleSubmit=(event)=>{
    event.preventDefault();
    setShowCongrats(true)
  }
  
  
  const [changePerform, setChangePerform]= useState(perform)
  const handlePerform=(event)=>{
    event.preventDefault();
    setChangePerform(true)
    setShowCongrats(false)
  }

  const registVar={
    initial: {
      y: '-20vw',
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        duration: 0.7,
        ease: [0.250, 0.460, 0.450, 0.940]
      }
    },
  }
  const popUpVar={
    initial: {
      y: '-20vw',
      opacity: 0,
      zIndex: 1,
    },
    animate: {
      zIndex: 10,
      opacity: 1,
      y:0,
      transition: {
        duration: 0.2,
        ease: [0.250, 0.460, 0.450, 0.940]
      }
    }
  }
  
  return (
    //------------------Popup------------------
    <div className='gpt3__signUp-total'>
    {showCongrats &&
    <div className='gpt3__signUp-congrats'
    variants={popUpVar}
    initial='initial'
    animate='animate'
    >
      <div className='gpt3__signUp-congrats_container'>
        <h1>Congrats!</h1>
        <p>You whatever you sign in didn't get delivered anywere! (as it was intended)</p>
        <p>You can now go back to the <a href='#home'>home page</a> and keep on watching the landing page</p>
      </div>
    </div>
    }

    {changePerform=='register' ? 
    //-----------------Register-----------------
    <div className='gpt3__signUp  gradient__bg'>
    <motion.div className='gpt3__signUp-container section__padding'
    variants={registVar}
    initial='initial'
    animate='animate'
    >
      <h1 className='gradient__text'>Let's get started!</h1>
      <h2>Create an account</h2>
      <p>Complete all the fields to have your new GPT 3 interactive account</p>
    <form>
      <div className='input-box'>
        <input type="text" placeholder=' ' required/>
        <label>Username:</label>
      </div>
      <div className='input-box'>
        <input type="password" placeholder=' '/>
        <label>Password:</label>
      </div>
      <div className='input-box'>
        <input type="email" placeholder=' ' />
        <label>Email:</label>
      </div>
      <div>
      <label className='input-check'>
        <input type="checkbox" />
        Yes, I agree to the Terms of Service and Privacy Policy
      </label>
      </div>
      <div>
      <label className='input-check'>
        <input type="checkbox" />
        I want to receive emails from GPT 3 newsletter
      </label>
      </div>
      <p>By creating an account, you agree to our Terms of Service and have reviewed our Privacy Policy. This site is protected by nothing at all and is just a project for fun. Nothing you write here is going to be sent anywere. Fill in everything, or not, nothing is going to happen.</p>
      <div className='gpt3__signUp-btn'>
      <button >Create account</button>
      </div>
    </form>
    <a href="" onClick={handlePerform}>Have an account? LOGIN</a>
    </motion.div>
  </div>:
  //-----------------Login-----------------
  <div className='gpt3__signUp section__padding gradient__bg'>
      <motion.div className='gpt3__signUp-container section__padding'
        variants={registVar}
        initial='initial'
        animate='animate'
      >
        <h1 className='gradient__text'>Log in!</h1>
      <form>
        <div className='input-box'>
          <input type="text" placeholder=' '/>
          <label>Username:</label>
        </div>
        <div className='input-box'>
          <input type="password" placeholder=' '/>
          <label>Password:</label>
        </div>
        <div className='gpt3__signUp-btn'>
          <button onClick={handleSubmit}>Log in</button>
        </div>
      </form>
      <a href="/">Forgot Password? Click Here</a>
      </motion.div>
    </div>
    }
    <Footer showHeading={false}/>
    </div>
  )
}

export default SignUp