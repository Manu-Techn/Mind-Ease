import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <span className="logo-icon">🌟</span>
                    MIND EASE
                </div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;