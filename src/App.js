import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './components/Me';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Header from './components/Header';
import ArtGallery from './components/ArtGallery';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gears from './components/Gears';

import './App.css'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Me/>} />
        <Route path="/gears" element={<Gears />} />
        <Route path="/art-gallery" element={<ArtGallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        
        

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;