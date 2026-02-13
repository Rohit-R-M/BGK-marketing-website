import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import './Destinations.css';

const destinations = [
    {
        title: 'Badami Cave Temples',
        location: 'Badami, Bagalkot',
        image: `${import.meta.env.BASE_URL}images/badami-fort.jpg`,
        rating: 4.9,
        description: 'Explore the majestic rock-cut cave temples, featuring exquisite carvings and ancient inscriptions from the 6th century.'
    },
    {
        title: 'Pattadakal',
        location: 'Pattadakal, Bagalkot',
        image: `${import.meta.env.BASE_URL}images/S1.jpg`,
        rating: 4.8,
        description: 'A UNESCO World Heritage site showcasing a harmonious blend of architectural styles from the 7th and 8th centuries.'
    },
    {
        title: 'Aihole',
        location: 'Aihole, Badami, Bagalkot',
        image: `${import.meta.env.BASE_URL}images/S2.jpg`,
        rating: 4.7,
        description: 'Known as the "Cradle of Indian Architecture," home to over 120 historic temples, including the famous Durga Temple.'
    },
    {
        title: 'Kudalasangama',
        location: 'Hunagund, Bagalkot',
        image: `${import.meta.env.BASE_URL}images/Kudalasangama.jpg`,
        rating: 4.7,
        description: 'A sacred pilgrimage center where the Krishna and Malaprabha rivers merge, featuring the Aikya Mantapa of Lord Basavanna.'
    },
    {
        title: 'Mahakuta',
        location: 'Mahakuta, Bagalkot',
        image: `${import.meta.env.BASE_URL}images/mahakuta-group.jpg`,
        rating: 4.9,
        description: 'A serene group of temples dedicated to Lord Shiva, centered around a natural spring tank known as Pushkarini.'
    },
    {
        title: 'Bhuthanatha Temple',
        location: 'Badami, Bagalkot',
        image: `${import.meta.env.BASE_URL}images/bhuthanatha-temple.jpg`,
        rating: 4.8,
        description: 'A picturesque temple complex situated on the banks of Agastya Lake, offering stunning views, especially at sunset.'
    }
];

const Destinations = () => {
    return (
        <section className="section" id="destinations">
            <div className="section-title">
                <h2>Popular Destinations</h2>
                <p>Discover the most iconic sites that defined an era of Indian temple architecture.</p>
            </div>

            <div className="destinations-grid">
                {destinations.map((dest, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="dest-card"
                    >
                        <div className="dest-image">
                            <img src={dest.image} alt={dest.title} />
                        </div>
                        <div className="dest-info">
                            <div className="dest-header">
                                <h3>{dest.title}</h3>
                                <div className="rating">
                                    <Star size={14} fill="#FFD700" color="#FFD700" />
                                    <span>{dest.rating}</span>
                                </div>
                            </div>
                            <div className="location">
                                <MapPin size={16} />
                                <span>{dest.location}</span>
                            </div>
                            <p className="dest-description">{dest.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* <div className="view-all">
                <button className="btn-secondary">View All Destinations</button>
            </div> */}
        </section>
    );
};

export default Destinations;
