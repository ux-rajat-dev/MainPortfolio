import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaBehance, FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [showConnect, setShowConnect] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowConnect(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="circle">RB</div>
        <div className="name-section">
          <span className="name">Rajat Burde</span>
          <span className="subtitle">personal</span>
        </div>
      </div>

      <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <a href="#hero" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#tools" onClick={toggleMenu}>
              Tools
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#service" onClick={toggleMenu}>
              Service
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="connect-wrapper mobile">
          {showConnect && (
            <div id="connect-popup" className="connect-popup">
              <div className="icon-list">
                <a
                  href="https://www.linkedin.com/in/uxrajatdev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/uxrajatdev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.behance.net/uxrajatdev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Behance"
                >
                  <FaBehance />
                </a>
                <a
                  href="https://wa.me/+917024410033"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop button */}
      <div className="connect-wrapper desktop">
        <button
          className="connect-btn"
          onClick={() => setShowConnect(!showConnect)}
          aria-expanded={showConnect}
          aria-controls="connect-popup"
        >
          Let's Connect
        </button>

        {showConnect && (
          <div id="connect-popup" className="connect-popup">
            <div className="icon-list">
              <a
                href="https://www.linkedin.com/in/uxrajatdev"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/uxrajatdev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.behance.net/uxrajatdev"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
              >
                <FaBehance />
              </a>
              <a
                href="https://wa.me/+917024410033"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        )}
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </nav>
  );
}
