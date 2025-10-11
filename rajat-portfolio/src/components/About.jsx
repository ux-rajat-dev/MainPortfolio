import React from 'react';
import './About.css';
import resume from '../assets/Rajat_Burde_Resume.pdf';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="titleDescriptionAbout">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          I’m Rajat Kumar Burde, a passionate UI/UX Designer & Developer who
          blends creativity with technology to craft seamless digital
          experiences. With a strong eye for detail and a user-first mindset,
          <br />
          <strong>I aim to make products both beautiful and functional.</strong>
        </p>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <h3 className="about-card-title">Who I Am</h3>
          <p>
            Currently in my 4th year of Bachelor’s in UI/UX Design at Kalinga
            University, I’ve worked with 20+ clients and contributed to multiple
            government projects.
            <br />
            My journey started with designing intuitive interfaces, and it has
            grown into creating complete digital solutions — from concept to
            code.
          </p>
        </div>

        <div className="about-divider" />

        <div className="about-card">
          <h3 className="about-card-title">What Drives Me</h3>
          <p>
            I believe every design should tell a story and solve a real problem.
            From dashboards for the Jal Jeevan Mission to engaging brand
            experiences, I’ve focused on solutions that are not just visually
            appealing but meaningful.
            <br />
            My goal is to design with intention and create work that resonates
            with users.
          </p>
        </div>
      </div>

      <p className="about-cta-text">
        If you’re looking for someone who can turn ideas into impactful,
        user-friendly designs,
        <br />
        you’ve found the right person.
      </p>

      <div className="about-buttons">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+917024410033?text=Hi%20there%2C%20I%27d%20like%20to%20talk%20about%20your%20work!"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Let’s Talk
        </a>

        <a
          href={resume}
          className="btn btn-filled"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default About;
