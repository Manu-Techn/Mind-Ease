import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Find Your Inner Peace.</h1>
                    <p>Simple tools for mental wellness. Track your mood, journal your thoughts, and practice gratitude daily!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="hero-image">
                    <img src="/images/It-is-well.jpg" alt="Encouragement" className="hero-img"/>
                        
                </div>
            </div>
        </section>
    );
};

export default Hero;