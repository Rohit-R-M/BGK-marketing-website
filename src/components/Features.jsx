import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Headset, Calendar, CloudSun, Compass, Globe, HeartHandshake } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Compass className="feat-icon" />,
        title: 'Nearby Suggestions',
        desc: 'Discover hidden gems, local eateries, and artisan shops just around the corner.'
    },
    {
        icon: <CloudSun className="feat-icon" />,
        title: 'Weather Prediction',
        desc: 'Plan your site visits with real-time, hyper-local weather alerts for Bagalkot.'
    },
    {
        icon: <Calendar className="feat-icon" />,
        title: 'Trip Planner',
        desc: 'Create personalized itineraries based on your interests and available time.'
    },
    {
        icon: <HeartHandshake className="feat-icon" />,
        title: 'Hospitality & Services',
        desc: 'Find verified local accommodation, transportation, and specialized tourism services.'
    },
    {
        icon: <Headset className="feat-icon" />,
        title: 'Audio Guides',
        desc: 'Immersive storytelling for every monument in multiple languages.'
    },
    {
        icon: <Map className="feat-icon" />,
        title: 'Interactive Maps',
        desc: 'Navigate through ancient ruins with our precision-mapped digital heritage trails.'
    }
];

const Features = () => {
    return (
        <section className="section bg-light-section" id="features">
            <div className="section-title">
                <h2>Smart Companion for Your Journey</h2>
                <p>Our application combines cutting-edge technology with historical expertise to make your visit unforgettable.</p>
            </div>

            <div className="features-grid">
                {features.map((feat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="feature-card"
                    >
                        <div className="icon-box">
                            {feat.icon}
                        </div>
                        <h3>{feat.title}</h3>
                        <p>{feat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
