import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './Layout.scss'

function Layout({ Page }) {
  return (
    <>
      <Header />
      <main>
        {Page}
      </main>
      <Footer />
    </>
  )
}

export default Layout