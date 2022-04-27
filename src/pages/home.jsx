import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from '../containers'
import { Brand, Cta,Navbar } from '../components'
import '../App.css'

const Home = () => {
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
          <Footer showHeading={true}/>
        </div>
    </div>
  )
}

export default Home
