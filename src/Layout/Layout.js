import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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