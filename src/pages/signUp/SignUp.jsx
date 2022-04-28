import React from 'react'
import './signUp.css'

const SignUp = () => {
  return (
    <div className='gpt3__signUp section__padding gradient__bg'>
      <div className='gpt3__signUp-container section__padding'>
        <h1 className='gradient__text'>Let's get started!</h1>
        <h2>Create an account</h2>
        <p>Complete all the fields to have your new GPT 3 interactive account</p>
      <form>
        <div className='input-box'>
          <input type="text" placeholder=' '/>
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
          <button>Create account</button>
        </div>
      </form>
      <a href="">Have an account? LOGIN</a>
      </div>
    </div>
  )
}

export default SignUp