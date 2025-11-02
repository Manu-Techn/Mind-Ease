import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2025 Mind Ease. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;