import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Error from "../Pages/Error/Error";
import Carousel from "../components/Carousel/Carousel";
import Tag from '../components/Tag/Tag';
import Flat from "../Pages/Flat/Flat";



function RoutesPath() {
  return (
    <Routes>
      <Route path='/' element={<Layout Page={<Home />} />} />
      <Route exact path='/About' element={<Layout Page={<About />} />} />
      <Route path="*" element={<Layout Page={<Error />} />} />
      <Route path='/Flat/:id' element={<Layout Page={<Flat />} />} />
      <Route path='/Tag' element={<Layout Page={<Tag tag='Le tag' />} />} />
      {/* <Route path='/Flat' element={<Layout Page={<Flat />} />} /> */}
    </Routes>
  );
}

export default RoutesPath