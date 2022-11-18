import React from "react";
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <img src="/hero-image.jpg" alt="Women in Tech"/>
            <h1>Are you a lady looking to start a career in tech?</h1>
            <h1>Worry not.</h1>
            <h1>We provide the necessary resources
                <br/> to make your dream come true!
            </h1>
        </div>
    )
}

export default HeroSection;