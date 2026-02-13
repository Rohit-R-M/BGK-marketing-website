
import React, { useEffect } from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-container">
            <h1 className="terms-title">Terms of Service</h1>

            <div className="terms-content">
                <h2 className="terms-section-title">1. Agreement to Terms</h2>
                <p>
                    By accessing or using the Bagalkot Tourism App, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>

                <h2 className="terms-section-title">2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on the Bagalkot Tourism App for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="terms-section-title">3. User Responsibilities</h2>
                <p>
                    You are responsible for your use of the app and must ensure that you do not violate any applicable laws or regulations. You agree not to:
                </p>
                <ul className="terms-list">
                    <li>Modify or copy the materials.</li>
                    <li>Use the materials for any commercial purpose.</li>
                    <li>Attempt to decompile or reverse engineer any software contained in the app.</li>
                </ul>

                <h2 className="terms-section-title">4. Disclaimer</h2>
                <p>
                    The materials on the Bagalkot Tourism App are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="terms-section-title">5. Limitations</h2>
                <p>
                    In no event shall Bagalkot Tourism or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Bagalkot Tourism App.
                </p>

                <h2 className="terms-section-title">6. Contact</h2>
                <p>
                    For any questions regarding these terms, please contact us.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
