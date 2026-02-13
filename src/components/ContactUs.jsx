
import React, { useEffect } from 'react';
import './ContactUs.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Please fill out this form or shoot us an email.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-card">
                        <div className="info-icon">
                            <Mail size={24} />
                        </div>
                        <h3>Email Us</h3>
                        <p>info@karnatakatourism.org</p>
                        <p>karnatakatourismsociety@gmail.com</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">
                            <Phone size={24} />
                        </div>
                        <h3>Call Us</h3>
                        <p>080-2235 2901 (Main)</p>
                        <p>1363 (Tourism Helpline)</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">
                            <MapPin size={24} />
                        </div>
                        <h3>Visit Us (Office)</h3>
                        <p>District Administration Office</p>
                        <p>Bagalkot, Karnataka 587103</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send us a Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" placeholder="How can we help you?" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
