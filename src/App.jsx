import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import AppAbout from './components/AppAbout';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'contact':
        return <ContactUs />;
      default:
        return (
          <>
            <Hero />
            <Destinations />
            <Features />
            <AppAbout />
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderContent()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
