import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jll426c',     // e.g. service_xxxxxx
      'template_fyfkm5m',    // e.g. template_yyyyyy
      formRef.current,
      '4Z6MJVV7fRhVAs0tI'      // e.g. UuYkO_example123
    ).then(
      (result) => {
        setStatus('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        setStatus('Failed to send. Please try again.');
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="form_name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>

      <div className="social-icons">
        <a href="https://github.com/suhaibks" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/suhaib-k-s-2ba6a8250" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
      </div>
    </section>
  );
};

export default Contact;
