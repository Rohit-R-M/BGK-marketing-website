import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import AppAbout from './components/AppAbout';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Destinations />
      <Features />
      <AppAbout />
      <Footer />
    </div>
  );
}

export default App;
