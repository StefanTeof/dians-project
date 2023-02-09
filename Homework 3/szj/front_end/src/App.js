import React from 'react'
import { Route, Routes, Redirect } from 'react-router-dom'
import Home from './containers/home/Home'
import FindHotels from './containers/findHotels/FindHotels'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'



const App = () => {

  return (
    <>
    <div className='gradient__bg'>
    <Navbar />
    <Routes>
  <Route path="/*">
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="findHotels" element={<FindHotels />} />
  </Route>
</Routes>
    </div> 
    <Footer />   
    </>
  )
}

export default App