import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom'

import '../App.css';

import Header from './Header'


function App() {
  return (
    <Routes>
      <Route path='/Header' element={<Header />} />
    </Routes>
  )
}

export default App;