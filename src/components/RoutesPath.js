import React from "react"
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout"

function RoutesPath() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  )
}

export default RoutesPath