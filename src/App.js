import React from 'react'

import {Home, SignUp, GetStarted,NotFound} from './pages'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App