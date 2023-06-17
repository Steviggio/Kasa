import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from "./Layout"
import Home from './Home'
import About from './About'
import Error from "./Error"
import Carousel from "./Carousel"

function RoutesPath() {
  return (
    <Routes>
      <Route path='/' element={<Layout Page={<Home />} />} />
      <Route path='/About' element={<Layout Page={<About />} />} />
      <Route path="*" element={<Layout Page={<Error />} />} />
      <Route path='/Carousel' element={<Layout Page={<Carousel />} />} />
    </Routes>
  )
}

export default RoutesPath