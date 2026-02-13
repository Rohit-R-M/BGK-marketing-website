import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-container">
            <h1 className="policy-title">Privacy Policy</h1>

            <div className="policy-content">
                <h2 className="policy-section-title">1. Introduction</h2>
                <p>
                    Welcome to the Bagalkot Tourism App ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect your information.
                </p>

                <h2 className="policy-section-title">2. Information We Collect</h2>
                <p>
                    We may collect the following types of information:
                </p>
                <ul className="policy-list">
                    <li><strong>Personal Information:</strong> Name, email address, phone number when you contact us.</li>
                    <li><strong>Usage Data:</strong> Information on how you use the app, device information, and location data (if granted permission).</li>
                </ul>

                <h2 className="policy-section-title">3. How We Use Your Information</h2>
                <p>
                    We use your information to:
                </p>
                <ul className="policy-list">
                    <li>Provide and maintain our service.</li>
                    <li>Improve user experience and app functionality.</li>
                    <li>Communicate with you regarding updates or support.</li>
                </ul>

                <h2 className="policy-section-title">4. Data Security</h2>
                <p>
                    We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="policy-section-title">5. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
