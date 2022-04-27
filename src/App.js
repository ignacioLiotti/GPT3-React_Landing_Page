import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import { Brand, Cta,Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <div>
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Possibility/>
          <Cta/>
          <Blog/>
          <Footer/>
        </div>
    </div>
  )
}

export default App