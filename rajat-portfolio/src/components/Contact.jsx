import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaBehance, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <div className='titleDescriptionContact'>
        <h2 className='contact-heading'>Let’s Work Together</h2>
        <p className='contact-subheading'>
          Got an idea or a project in mind? Let’s connect and make it happen.
        </p>
      </div>
      <div className='contact-container'>
        <div className='contact-left'>
          <p className='contact-description'>
            I’m always open to discussing new opportunities, collaborations, or
            simply talking design and technology.
          </p>
          <a className='contact-email' href='mailto:ux.rajat.dev@gmail.com'>
            ux.rajat.dev@gmail.com
          </a>
          <div className='social-icons'>
            <a href='https://www.linkedin.com/in/uxrajatdev'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/uxrajatdev'>
              <FaGithub />
            </a>
            <a href='https://www.behance.net/uxrajatdev'>
              <FaBehance />
            </a>
            <a href='https://wa.me/+917024410033'>
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className='contact-right'>
          <form
            className='contact-form'
            action='https://formspree.io/f/mgvozneq'
            method='POST'
          >
            <label>
              <input
                type='text'
                name='name'
                placeholder='Name'
                required
                className='saira-placeholder'
              />
            </label>
            <label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                required
                className='saira-placeholder'
              />
            </label>
            <label>
              <textarea
                name='message'
                placeholder='Message'
                spellCheck='false'
                required
                className='saira-placeholder'
              ></textarea>
            </label>
            <button type='submit' className='submit-btn'>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
