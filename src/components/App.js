import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom'

import '../App.css';

import Header from './Header'
import Footer from './Footer'


function App() {
  return (
    <Routes>
      <Route path='/Header' element={<Header />} />
      <Route path='/Footer' element={<Footer />} />
    </Routes>
  );
}

export default App;