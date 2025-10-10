import React, { useState } from 'react';
import './Portfolio.css';

import project1 from '../assets/Projects/Project1-Thumbnail.png';
import project2 from '../assets/Projects/Project2-Thumbnail.png';
import project3 from '../assets/Projects/Project3-Thumbnail.png';
import project4 from '../assets/Projects/Project4-Thumbnail.png';
import project5 from '../assets/Projects/Project5-Thumbnail.png';
import project6 from '../assets/Projects/Project6-Thumbnail.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('design');

  const designProjects = [
    {
      id: 1,
      title: 'AR/VR Solution for Travel Planning ',
      image: project1,
      pdf: '/Projects/Project1.pdf',
    },
    {
      id: 2,
      title: 'Zero-Waste Grocery Shopping Application',
      image: project2,
      pdf: '/Projects/Project2.pdf',
    },
    {
      id: 3,
      title: 'Enhancing TATA Motors Omni-Channel',
      image: project3,
      pdf: '/projects/design3.pdf',
    },
    {
      id: 4,
      title: ' Usability Testing on gamified version of Google Calendar',
      image: project4,
      pdf: '/projects/design4.pdf',
    },
    {
      id: 5,
      title: 'AR Smart Navigation Glasses for Seamless Urban Mobility',
      image: project5,
      pdf: '/projects/design5.pdf',
    },
    {
      id: 6,
      title: 'Enhancing Waste Management in Mahadevghat, Raipur',
      image: project6,
      pdf: '/projects/design6.pdf',
    },
    {
      id: 7,
      title: 'Designing an application for the Locals, Raipur',
      image: project6,
      pdf: '/projects/design6.pdf',
    },
  ];

  return (
    <section className='portfolio'>
      <div className='titleDescriptionPortfolio'>
        <h2 className='portfolio-title'>Projects</h2>
        <p className='portfolio-subtitle'>
          Showcasing my work in both creative design and functional development.
        </p>
      </div>

      <div className='portfolio-tabs'>
        <button
          className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          Design Projects
        </button>
        <button
          className={`tab-btn ${activeTab === 'coding' ? 'active' : ''}`}
          onClick={() => setActiveTab('coding')}
        >
          Coding Projects
        </button>
      </div>

      {activeTab === 'design' ? (
        <div className='portfolio-grid-container'>
          <div className='portfolio-grid'>
            {designProjects.map((project) => (
              <a
                key={project.id}
                href={project.pdf}
                target='_blank'
                rel='noopener noreferrer'
                className='portfolio-card'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='portfolio-image'
                />
                <div className='portfolio-card-title'>{project.title}</div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p className='coming-soon'>
          🚧 <strong>Coding projects are on the way.</strong> Stay tuned for
          some exciting builds!
        </p>
      )}
    </section>
  );
};

export default Portfolio;
