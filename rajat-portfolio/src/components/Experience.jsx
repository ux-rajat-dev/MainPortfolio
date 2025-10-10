import React, { useState, useRef, useEffect } from 'react';
import './Experience.css';
import eSparseMatrixLogo from '../assets/IMG/eSparseMatrixLogo.png';
import VidhyashalaLogo from '../assets/IMG/VidhyashalaLogo.jpeg';
import BanterMarketoLogo from '../assets/IMG/BanterMarketoLogo.jpeg';
import Digitaazlogo from '../assets/IMG/DigitaazTransLogo.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import eSparseMatrixOfferLetter from '../assets/Applications/eSparseMatrixOfferLetter.pdf';
import eSparseMatrixCompletionLetter from '../assets/Applications/eSparseMatrixCompletionLetter.pdf';
import VidhyashalaCompletionLetter from '../assets/Applications/VidhyashalaCompletionLetter.pdf';
import BanterMarketoOfferLetter from '../assets/Applications/BanterMarketoOfferLetter.pdf';
import BanterMarketoCompletionLetter from '../assets/Applications/BanterMarketoCompletionLetter.pdf';
import DigitaazTransTechnologiesOfferLetter from '../assets/Applications/DigitaazTransTechnologiesOfferLetter.pdf';

// Sample experience data
const experiences = [
  {
    id: 1,
    role: 'UI/UX Designer | Internship',
    company: 'eSparse Matrix solutions Private Limited | Pune, Maharastra',
    duration: 'July 2024 - October 2024',
    months: '3 Months',
    logo: eSparseMatrixLogo,
    offerLetter: eSparseMatrixOfferLetter,
    completionLetter: eSparseMatrixCompletionLetter,
    description: `
      <p>As a UI/UX Design Intern, I had the opportunity to work on real-world projects, enhancing my expertise in user-centered design and problem-solving. My key contributions included:</p>

      <ul>
        <li>User Interface (UI) Design – Created modern, user-friendly interfaces with a focus on aesthetics and functionality.</li>
        <li>User Experience (UX) Research – Conducted research to understand user behavior and improve product usability.</li>
        <li>Wireframing & Prototyping – Developed interactive prototypes and wireframes using industry-standard tools.</li>
        <li>Design Thinking Approach – Applied a structured 5D design process to craft solutions that met client needs.</li>
        <li>Collaboration & Problem-Solving – Worked closely with developers and stakeholders to ensure smooth implementation.</li>
      </ul>

      <p>This internship strengthened my design skills, analytical thinking, and adaptability, preparing me for larger challenges in the UI/UX industry. 🚀</p>

      <p>A huge thanks to Esparse Matrix Solutions Pvt. Ltd. for the learning experience and mentorship!</p>
    `,
  },
  {
    id: 2,
    role: 'Full Stack Developer | Internship',
    company: 'Vidhyashala | Remote',
    duration: 'August 2024 - November 2024',
    months: '3 Months',
    logo: VidhyashalaLogo,
    completionLetter: VidhyashalaCompletionLetter,
    description: `
     <p>As a Full Stack Developer Intern, I had the opportunity to work on real-world projects that enhanced my expertise in both frontend and backend development. My key contributions included:</p>

    <ul>
      <li><strong>Frontend Development</strong> – Built dynamic and user-friendly interfaces using HTML, CSS, JavaScript, and React to enhance user experience.</li>
      <li><strong>Backend Development</strong> – Developed robust backend solutions with PHP & database management, ensuring seamless data flow and functionality.</li>
      <li><strong>API Integration</strong> – Integrated RESTful APIs to optimize system communication and performance.</li>
      <li><strong>Problem Solving & Debugging</strong> – Diagnosed and fixed complex issues, improving system efficiency.</li>
      <li><strong>Collaboration & Agile Workflow</strong> – Worked in a team environment, following Agile methodologies for efficient project execution.</li>
    </ul>

    <p>This experience not only strengthened my technical skills but also taught me the importance of collaboration, problem-solving, and adaptability in real-world development. 🚀</p>

    <p>Looking forward to leveraging this knowledge in future projects and continuing my growth in the field of Full Stack Development! 💻🔥</p>
  `,
  },
  {
    id: 3,
    role: 'UI/UX & Graphic Designer | Internship',
    company: 'Banter Marketo | Delhi',
    duration: 'February 2025 - June 2025',
    months: '4 Months',
    logo: BanterMarketoLogo,
    offerLetter: BanterMarketoOfferLetter,
    completionLetter: BanterMarketoCompletionLetter,
    description: `
    <p>As a <strong>User Experience | Graphic Design Intern</strong>, I am contributing to impactful design solutions that elevate both brand identity and user satisfaction. My key responsibilities and achievements include:</p>

    <ul>
      <li><strong>Graphic Design</strong> – Creating visually engaging designs for social media, web, and marketing campaigns, maintaining brand consistency across all platforms.</li>
      <li><strong>Design Systems</strong> – Assisting in maintaining and enhancing design systems to ensure scalable and cohesive visuals.</li>
      <li><strong>Tools & Technologies</strong> – Working with industry-standard tools like Figma, Adobe Illustrator, and Photoshop to deliver high-quality designs.</li>
      <li><strong>Creative Problem Solving</strong> – Brainstorming innovative design ideas that align with user needs and business goals.</li>
    </ul>

    <p>Excited to keep growing as a designer and bring meaningful impact through design! 🎨💡</p>
  `,
  },
  {
    id: 4,
    role: 'UI/UX Designer | Internship',
    company: 'Digitaaztrans Technologies Pvt Ltd | Raipur',
    duration: 'June 2025 - Present',
    months: 'Working',
    logo: Digitaazlogo,
    offerLetter: DigitaazTransTechnologiesOfferLetter,
    description: `
  <p>As a <strong>UI/UX Designer</strong>, I contributed to large-scale government and enterprise projects focused on real-time data, logistics, and internal operations. My key responsibilities and accomplishments included:</p>

  <ul>
    <li><strong>Government Projects</strong> – Designed interfaces for critical government initiatives like <em>Jal Jeevan Mission</em> and <em>Ecosync</em>, ensuring user-centric, accessible, and scalable design solutions.</li>
    <li><strong>Real-Time Dashboards</strong> – Created interactive dashboards to monitor water supply data and scheme progress, improving data visibility and decision-making.</li>
    <li><strong>Vehicle Tracking System (Trakolet)</strong> – Developed wireframes and UI layouts for a GPS-powered vehicle tracking and alert system to enhance transport monitoring and safety.</li>
    <li><strong>Letter Management System</strong> – Designed a complete, user-friendly platform to manage government correspondence efficiently, streamlining communication workflows.</li>
    <li><strong>Cross-Functional Collaboration</strong> – Worked closely with developers, analysts, and stakeholders to align design goals with functional outcomes.</li>
    <li><strong>Accessibility & Scalability</strong> – Ensured interfaces were intuitive, inclusive, and adaptable across various devices and platforms.</li>
  </ul>

  <p>This experience strengthened my ability to design for impact at scale while maintaining usability and performance. 🚀</p>
`,
  },
];

const Experience = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isInsideAnyDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(e.target)
      );

      if (!isInsideAnyDropdown) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className='experience'>
      <div className='titleDescriptionExperience'>
        <h2 className='portfolio-title'>Experience</h2>
        <p className='experience-subtitle'>
          A journey of designing, developing, and delivering digital solutions
          across industries.
        </p>
      </div>

      <div className='timeline-container'>
        <div className='timeline-line' />

        {[...experiences].reverse().map((exp) => (
          <div key={exp.id} className='timeline-item'>
            <div className='timeline-marker'>
              <div className='duration-box'>
                {' '}
                <strong>{exp.months}</strong>
              </div>
            </div>

            <div className='experience-card'>
              <div className='card-left'>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className='company-logo'
                />

                <div className='card-menu-mob' ref={dropdownRef}>
                  <BsThreeDotsVertical
                    className='menu-icon'
                    onClick={() => toggleDropdown(exp.id)}
                    style={{ cursor: 'pointer' }}
                  />

                  {openDropdownId === exp.id && (
                    <div className='dropdown-menu'>
                      {exp.offerLetter && (
                        <a
                          href={exp.offerLetter}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Offer Letter
                        </a>
                      )}
                      {exp.completionLetter && (
                        <a
                          href={exp.completionLetter}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Completion Letter
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className='card-content'>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className='experience-duration'>{exp.duration}</span>

                <div className='experience-description-wrapper'>
                  <div
                    className='experience-description'
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                  />
                </div>
              </div>

              <div className='card-menu-web' ref={dropdownRef}>
                <BsThreeDotsVertical
                  className='menu-icon'
                  onClick={() => toggleDropdown(exp.id)}
                  style={{ cursor: 'pointer' }}
                />

                {openDropdownId === exp.id && (
                  <div className='dropdown-menu'>
                    {exp.offerLetter && (
                      <a
                        href={exp.offerLetter}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Offer Letter
                      </a>
                    )}
                    {exp.completionLetter && (
                      <a
                        href={exp.completionLetter}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Completion Letter
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
