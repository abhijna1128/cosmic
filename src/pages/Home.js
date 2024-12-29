import React from 'react';
import './Home.css'; // Add custom styles for the page.

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <h1 className="hero-title">Cosmic Event Observation Database</h1>
                <p className="hero-description">
                    Explore the universe with our comprehensive database of cosmic events. 
                    Discover supernovas, black holes, and more, tracked and observed by astronomers worldwide.
                </p>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search cosmic events by name, type, or date..."
                        className="search-input"
                    />
                    <button className="search-button">Search</button>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="highlights-section">
                <h2>Highlights</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <h3>Dynamic Observations</h3>
                        <p>Stay updated with real-time observations and data from around the world.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Advanced Analytics</h3>
                        <p>Access light curves, spectral data, and classifications with ease.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Collaborative Insights</h3>
                        <p>Explore contributions from global observers and researchers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
