import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingBag, PlayCircle } from 'lucide-react';
import './AppAbout.css';

const AppAbout = () => {
    return (
        <section className="section" id="about">
            <div className="about-grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="about-image"
                >
                    <div className="mockup-container">
                        <img
                            src="/images/6.jpg"
                            alt="App UI"
                            className="mockup-img"
                        />

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="about-text"
                >
                    <span className="badge">About the Application</span>
                    <h2>The Only Guide You'll Ever Need</h2>
                    <p>
                        Bagalkot Tourism is designed to be your local companion. We've mapped out
                        every stone and inscription to ensure you don't miss a single detail of
                        the Chalukyan dynasty.
                    </p>

                    <ul className="perks-list">
                        <li>
                            <CheckCircle2 className="check-icon" />
                            <span>Detailed trip planning for 1, 2, or 3-day visits</span>
                        </li>
                        <li>
                            <CheckCircle2 className="check-icon" />
                            <span>Hyper-local weather forecasts and visit alerts</span>
                        </li>
                        <li>
                            <CheckCircle2 className="check-icon" />
                            <span>Nearby restaurants and accommodation suggestions</span>
                        </li>
                        <li>
                            <CheckCircle2 className="check-icon" />
                            <span>Direct connection to verified local guides</span>
                        </li>
                    </ul>

                    <div className="download-cta">
                        <p>Coming Soon On</p>
                        <div className="store-btns">
                            <button className="store-btn coming-soon">
                                <ShoppingBag />
                                <div className="btn-label">
                                    <small>Available soon on</small>
                                    <strong>Play Store</strong>
                                </div>
                            </button>
                            <button className="store-btn coming-soon">
                                <ShoppingBag />
                                <div className="btn-label">
                                    <small>Available soon on</small>
                                    <strong>App Store</strong>
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppAbout;
