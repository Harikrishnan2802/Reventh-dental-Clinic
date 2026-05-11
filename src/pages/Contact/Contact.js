import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Dr. Revanth's team will contact you shortly.");
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="floating-tooth" style={{ top: '15%', right: '10%' }}>🦷</div>
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="page-hero-title">Contact <span>Us</span></h1>
          <p className="page-hero-sub">We're here to help you achieve the perfect smile.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info-panel">
              <h2 className="section-title">Visit Our <span>Clinic</span></h2>
              <p className="section-sub">Drop by for a consultation or reach out through any of these channels.</p>

              <div className="info-cards-stack">
                <div className="info-card">
                  <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>No: 7, Ezhaimarriamman koil street, Solai Nagar, Muthialpet, Puducherry, 605003</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="info-content">
                    <h4>Phone & WhatsApp</h4>
                    <p><a href="tel:+919865879772">+91 9865879772</a></p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><i className="fas fa-envelope"></i></div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p><a href="mailto:revanthdent17@gmail.com">revanthdent17@gmail.com</a></p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><i className="fas fa-clock"></i></div>
                  <div className="info-content">
                    <h4>Working Hours</h4>
                    <p>Mon–Sat: 24 Hours <br/> Sun: 9AM – 9PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" action="https://formspree.io/f/xqendoak" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="email@example.com" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91..." required onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select onChange={(e) => setFormData({...formData, service: e.target.value})}>
                    <option>General Inquiry</option>
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Root Canal Treatment</option>
                    <option>Ortho Braces</option>
                    <option>Clear Aligners</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4" placeholder="How can we help you?" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7806.658793849972!2d79.82807834065223!3d11.95168075311087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53638558924d79%3A0xbc24e64ba8785c86!2sRevanth%20dental%20clinic!5e0!3m2!1sen!2sin!4v1778230624101!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </section>
    </div>
  );
};

export default Contact;