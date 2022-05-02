import React from 'react'

import {Home, SignUp,NotFound} from './pages'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp perform='register' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App