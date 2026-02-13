import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Landmark } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <Landmark className="logo-icon" />
                    <span>Bagalkot Tourism</span>
                </div>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a>
                    <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About App</a>
                    <button className="download-btn-small">
                        <Download size={18} />
                        <span>Coming Soon</span>
                    </button>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
