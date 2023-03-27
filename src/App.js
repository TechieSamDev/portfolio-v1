import "./App.css"
import React from 'react'
import Nav from './components/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from "./components/portfolio/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App