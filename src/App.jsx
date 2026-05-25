import React from "react";
import Navbar from './components/layout/Navbar';
import LandPic from "./components/sections/LandPic";import Hero from './components/sections/Hero';
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";



const App = () => {
  return (
    <div className="min-h-screen bg-black">
  
      <main>
        <Navbar />
        <LandPic />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App