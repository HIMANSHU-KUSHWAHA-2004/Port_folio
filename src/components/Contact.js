// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing Instagram and LinkedIn icons
import { SiLeetcode } from 'react-icons/si'; // Importing LeetCode icon
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          recipient_email: 'hk5652990@gmail.com',
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="namee" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div className="form-group">
          <label className="mailee" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            aria-label="Email"
          />
        </div>
        <div className="form-group">
          <label className="messageee" htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            aria-label="Message"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>

      {/* Additional Contact Information */}
      <p className="contact-info">You can also contact me on:</p>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.instagram.com/himanshu_5_7" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> {/* Removed size */}
        </a>
        <a href="https://www.linkedin.com/in/himanshu-kushwaha-49b360293" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> {/* Removed size */}
        </a>
        <a href="https://leetcode.com/u/HimanshuKushwaha2004" target="_blank" rel="noopener noreferrer">
          <SiLeetcode /> {/* Removed size */}
        </a>
      </div>
    </section>
  );
};

export default Contact;
