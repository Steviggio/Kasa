import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from './Home'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default Layout