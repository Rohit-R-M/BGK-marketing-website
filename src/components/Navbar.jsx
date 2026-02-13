import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Landmark } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ currentPage, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        setIsMobileMenuOpen(false);
        if (currentPage !== 'home' && onNavigate) {
            e.preventDefault();
            onNavigate('home');
            // Small delay to allow render before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
                    <Landmark className="logo-icon" />
                    <span>Bagalkot Tourism</span>
                </div>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                    <a href="#destinations" onClick={(e) => handleNavClick(e, 'destinations')}>Destinations</a>
                    <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About App</a>
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
