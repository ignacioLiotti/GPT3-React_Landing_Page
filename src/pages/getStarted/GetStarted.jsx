import React from 'react'
import './signUp.css'

const getStarted = () => {
  return (
    <div>
      <h1>Let's get started!</h1>
      <h2>Create an account</h2>
      <p>Complete all the fields to have your new GPT 3 interactive account</p>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Yes, I agree to the Terms of Service and Privacy Policy
          <input type="checkbox" />
        </label>
        <label>
          I want to receive emails from GPT 3 newsletter
          <input type="checkbox" />
        </label>
        <p>By creating an account, you agree to our Terms of Service and have reviewed our Privacy Policy. This site is protected by nothing at all and is just a project for fun. Nothing you write here is going to be sent anywere. Fill in everything, or not, nothing is going to happen.</p>
        <button>Create account</button>
      </form>
      <a href="">Have an account? LOGIN</a>
    </div>
  )
}

export default getStarted