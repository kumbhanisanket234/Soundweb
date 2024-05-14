import React from 'react'
import { Header, Info, Navbar, Topics, Testimonials, Blog, Footer, Moreblogs } from './components'
import { Routes, Route, Navigate } from 'react-router-dom';
import Policy from './components/Policy/Policy';

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={
          <>
            <Header />
            <Topics />
            <Blog />
            <Info />
            <Testimonials />
            <Footer />
          </>
        } />
        
        <Route path='/Moreblogs' element={<Moreblogs />} />
        <Route path='/policy' element={<Policy />} />

      </Routes>
    </>
  )
}

export default App
