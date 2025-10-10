import React from 'react';
import './WhatIDo.css';
import { FaCode, FaPalette, FaUserCheck, FaTools } from 'react-icons/fa';

import { MdDesignServices } from 'react-icons/md';

const services = [
  {
    title: 'UI/UX Design',
    description:
      'I create modern, user-focused designs that feel natural to navigate. From wireframes to polished prototypes, every detail is crafted with purpose.',
    highlight: 'The result: products that people enjoy using.',
    icon: <MdDesignServices size={28} />,
  },
  {
    title: 'Web Development',
    description:
      'I build responsive, high-performance websites and dashboards. Clean code, smooth animations, and fast load times are my priority.',
    highlight: 'Every project is optimized for both users and devices.',
    icon: <FaCode size={28} />,
  },
  {
    title: 'Brand Identity',
    description:
      'I design visual identities that help brands stand out. Logos, color palettes, and typography systems are created with meaning.',
    highlight:
      'Your brand gets a consistent and memorable presence everywhere.',
    icon: <FaPalette size={28} />,
  },
  {
    title: 'Usability Testing',
    description:
      'I test and refine designs based on real user feedback. Every change is backed by insights to improve the overall experience.',
    highlight:
      'The goal: make the product more useful, efficient, and enjoyable.',
    icon: <FaUserCheck size={28} />,
  },
];

const WhatIDo = () => {
  return (
    <section className="what-i-do">
      <div className="titleDescriptionWhatIDo">
        <h2 class="whatIDo-title">What I Do</h2>
        <p class="whatIDo-subtitle">
          I help brands and businesses turn ideas into intuitive, visually
          engaging, and user-friendly digital experiences.
        </p>
      </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="highlight">{service.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
