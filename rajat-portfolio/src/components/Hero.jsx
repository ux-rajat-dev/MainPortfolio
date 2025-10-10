import React from 'react';
import './Hero.css';
import profileImage from '../assets/main-image.png';
export default function Hero() {
  return (
    <section className="hero">
      <div className="div-hero">
        <div className="hero-left">
          <p className="hero-welcome">Hello, Welcome</p>
          <div className="name-position">
            <h1 className="hero-name">
              <span>I’m Rajat Kumar Burde</span>
            </h1>
            <h2 className="hero-title">UI/UX Designer & Developer</h2>
          </div>
          <p className="hero-description">
            I design intuitive user interfaces and craft seamless user
            experiences, blending creativity with technical precision.
          </p>
        </div>

        <div className="hero-center">
          <div className="image-frame">
            <img
              src={profileImage}
              alt="Rajat Kumar Burde"
              className="profile-img"
            />
          </div>
        </div>

        <div className="hero-right">
          <div className="stat">
            <h3>
              <span>2+</span> Years
            </h3>
            <p>
              Design & Development <br /> Experience
            </p>
          </div>
          <div className="stat">
            <h3>
              <span>20+</span> Clients
            </h3>
            <p>
              Worked with
              <br />
              diverse industries
            </p>
          </div>
          <div className="stat">
            <h3>
              <span>30+</span> Projects
            </h3>
            <p>
              UI/UX, branding,
              <br />
              and development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
