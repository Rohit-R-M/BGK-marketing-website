import React from 'react';
import { Landmark, Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = ({ onNavigate }) => {

    const handleLinkClick = (e, page, id) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate(page);
            if (id) {
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                window.scrollTo(0, 0);
            }
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo white">
                            <Landmark className="logo-icon" />
                            <span>Bagalkot Tourism</span>
                        </div>
                        <p className="brand-desc">
                            Preserving and promoting the heritage of the cradle of Indian
                            temple architecture since 2025.
                        </p>

                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home', 'home')}>Home</a></li>
                            <li><a href="#destinations" onClick={(e) => handleLinkClick(e, 'home', 'destinations')}>Destinations</a></li>
                            <li><a href="#features" onClick={(e) => handleLinkClick(e, 'home', 'features')}>Features</a></li>
                            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'home', 'about')}>About App</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Support</h4>
                        <ul>
                            {/* <li><a href="#">Help Center</a></li> */}
                            <li><a href="#" onClick={(e) => handleLinkClick(e, 'privacy')}>Privacy Policy</a></li>
                            <li><a href="#" onClick={(e) => handleLinkClick(e, 'terms')}>Terms of Service</a></li>
                            <li><a href="#" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Get In Touch</h4>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>karnatakatourismsociety@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span> 080-2235 2901 </span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Bagalkot Tourism App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
