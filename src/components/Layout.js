import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

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