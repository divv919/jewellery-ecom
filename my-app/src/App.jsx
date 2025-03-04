import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Slider from './components/Carousel/Slider'
function App() {
  return (
    <>
    <Navbar />
    <Slider />
    <Categories />
    <Footer />
    </>
  )
}

export default App
