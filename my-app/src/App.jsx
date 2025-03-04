import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Categories />
    <Footer />
    </>
  )
}

export default App
