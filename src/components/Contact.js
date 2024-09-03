import React, { useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    toast.success(`Thank you for reaching out, ${formData.name}! We will get back to you soon.`, {
      position: "top-center", 
      autoClose: 5000, 
    });
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">      
      <div className="contact-content">      
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>Contact Me</h1>
            <div className="header-underline"></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <ToastContainer /> {/* Add ToastContainer to render toast messages */}
        </div>
        <div className="contact-info-wrapper">
          <h2>Follow me on</h2>
          <div className="contact-info">
            <a href="https://www.instagram.com/iamtitlikundu?igsh=MThpb2ppNGM0dmw3cg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/titli-kundu-0417a6271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={30} />
            </a>
            <a href="https://github.com/Titlikundu" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="qr-code">
            <img src="qrcode.png" alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
