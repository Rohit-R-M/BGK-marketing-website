import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <span className="badge">Discover the Chalukyan Heritage</span>
                    <h1>Experience the Timeless Beauty of <span>Bagalkot</span></h1>
                    <p>
                        Explore the cradle of temple architecture. From the majestic caves of Badami
                        to the stunning monuments of Pattadakal and Aihole, all in the palm of your hand.
                    </p>
                    <div className="hero-btns">
                        <a href="#about" className="btn-primary">
                            <Download size={24} />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.1' }}>
                                <span>Coming Soon</span>
                                <span style={{ fontSize: '0.75rem', fontWeight: '400', opacity: '0.9' }}>on Android & IOS</span>
                            </div>
                        </a>
                        <a href="#destinations" className="btn-secondary">
                            Explore Destinations
                            <ChevronRight size={18} />
                        </a>
                    </div>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-image-container"
                >
                    {/* Left Column Cards */}
                    <div className="floating-cards-column left">
                        <div className="floating-card c1">
                            <div className="icon">🏛️</div>
                            <div className="info">
                                <span>Heritage</span>
                                <strong>25+ Spots</strong>
                            </div>
                        </div>
                        <div className="floating-card c3">
                            <div className="icon">🌤️</div>
                            <div className="info">
                                <span>Weather</span>
                                <strong>Real-time</strong>
                            </div>
                        </div>
                        <div className="floating-card c6">
                            <div className="icon">🏨</div>
                            <div className="info">
                                <span>Stays</span>
                                <strong>Services</strong>
                            </div>
                        </div>
                        <div className="floating-card c7">
                            <div className="icon">📖</div>
                            <div className="info">
                                <span>Guides</span>
                                <strong>Travel Tips</strong>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Cards */}
                    <div className="floating-cards-column right">
                        <div className="floating-card c2">
                            <div className="icon">🗺️</div>
                            <div className="info">
                                <span>Maps</span>
                                <strong>Smart Nav</strong>
                            </div>
                        </div>
                        <div className="floating-card c4">
                            <div className="icon">🛣️</div>
                            <div className="info">
                                <span>Planner</span>
                                <strong>Routes</strong>
                            </div>
                        </div>
                        <div className="floating-card c5">
                            <div className="icon">📍</div>
                            <div className="info">
                                <span>Nearby</span>
                                <strong>Top Gems</strong>
                            </div>
                        </div>
                        <div className="floating-card c8">
                            <div className="icon">⭐</div>
                            <div className="info">
                                <span>Ratings</span>
                                <strong>Top Rated Places</strong>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
