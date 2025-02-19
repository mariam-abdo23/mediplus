import React from 'react'
import './app.css'
import Navbar from './components/Layout/Navbar'
import Home from './components/Home/home'
import About from './components/About/about'
import Department from './components/Department/Department'
import Doctors from './components/Doctors/doctors'
import Blog from './components/Blog/blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Layout/Footer'
export default function App() {
  return <>
    <Navbar />
    <Home />
    <About />
    <Department />
<Doctors />
<Blog/>
<Contact/>
<Footer/>
  </>
}
