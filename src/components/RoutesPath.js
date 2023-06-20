import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from "./Layout"
import Home from './Home';
import About from './About';
import Error from "./Error";
import Carousel from "./Carousel";
import Tag from './Tag';
import Flat from "./Flat";



function RoutesPath() {
  return (
    <Routes>
      <Route path='/' element={<Layout Page={<Home />} />} />
      <Route path='/About' element={<Layout Page={<About />} />} />
      <Route path="*" element={<Layout Page={<Error />} />} />
      <Route path='/Carousel/:id' element={<Layout Page={<Carousel />} />} />
      <Route path='/Tag' element={<Layout Page={<Tag tag='Le tag' />} />} />
      <Route path='/Flat' element={<Layout Page={<Flat />} />} />
    </Routes>
  );
}

export default RoutesPath