import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import Home from './Home'
import About from './About';

function Layout() {
  return (
    <>
      <Header />
      <main>
        {/* <Home /> */}
        <About />
      </main>
      <Footer />
    </>
  )
}

export default Layout