import React from "react"


function RoutesPath() {
  return (
    <Routes>
      {/* <Route path='/Header' element={<Header />} /> */}
      <Route path='/Body' element={<Main />} />
      <Route path='/Footer' element={<Footer />} />
    </Routes>
  )
}

export default RoutesPath