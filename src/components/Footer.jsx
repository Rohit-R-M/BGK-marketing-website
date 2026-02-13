import React from 'react';
import { Landmark, Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#destinations">Destinations</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#about">About App</a></li>
                        </ul>
                    </div>

                    {/* <div className="footer-links">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div> */}

                    <div className="footer-contact">
                        <h4>Get In Touch</h4>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>support@bgktourism.com</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span>Tourism Helpline Karnataka: 1363 </span>
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
