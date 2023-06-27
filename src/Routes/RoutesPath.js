import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Error from "../Pages/Error/Error";
import Flat from "../Pages/Flat/Flat";



function RoutesPath() {
  return (
    <Routes>
      <Route path='/' element={<Layout Page={<Home />} />} />
      <Route path='/About' element={<Layout Page={<About />} />} />
      <Route path="*" element={<Layout Page={<Error />} />} />
      <Route path='/Flat/:id' element={<Layout Page={<Flat />} />} />
    </Routes>
  );
}

export default RoutesPath