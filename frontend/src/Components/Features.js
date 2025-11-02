import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: '😊',
            title: 'Mood Tracker',
            description: 'Track your daily emotions and patterns!'
        },
        {
            icon: '📓',
            title: 'Journal',
            description: 'Write your thoughts and reflections!'
        },
        {
            icon: '🌟',
            title: 'Gratitude Journal',
            description: 'Daily moments you appreciate and are grateful for!'
        }
    ];

    return (
        <section className="features">
            <div className="container">
                <h2>How Mind Ease Helps You</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <button className="feature-btn">Learn More</button>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;