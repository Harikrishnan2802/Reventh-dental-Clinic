import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Root Canal Treatment',
    date: '',
    time: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Clinic WhatsApp Number from business card
    const phoneNumber = "919444620131"; 
    
    // Constructing the professional message
    const message = `*New Appointment Request*%0A` +
                    `--------------------------%0A` +
                    `*Patient Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Service:* ${formData.service}%0A` +
                    `*Preferred Date:* ${formData.date}%0A` +
                    `*Preferred Time:* ${formData.time}%0A` +
                    `*Note:* ${formData.message || 'None'}`;

    // Opening WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Instant Booking</span>
          <h1 className="page-hero-title">Book your <span>Visit</span></h1>
          <p className="page-hero-sub">Fill the form below to book via WhatsApp for a faster response.</p>
        </div>
      </section>

      <section className="appointment-section">
        <div className="container">
          <div className="appointment-container">
            <div className="appointment-header">
              <div className="wa-badge">
                <i className="fab fa-whatsapp"></i> <span>Direct WhatsApp Booking</span>
              </div>
              <h2>Request an Appointment</h2>
            </div>

            <form className="appointment-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Mobile number" 
                    required 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label>Select Service</label>
                  <select onChange={(e) => setFormData({...formData, service: e.target.value})}>
                    <option>Root Canal Treatment</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                    <option>Ortho Braces</option>
                    <option>Scaling & Cleaning</option>
                    <option>General Checkup</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input 
                    type="date" 
                    required 
                    onChange={(e) => setFormData({...formData, date: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Time</label>
                  <select onChange={(e) => setFormData({...formData, time: e.target.value})}>
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{marginTop: '20px'}}>
                <label>Additional Notes (Optional)</label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about your dental concern..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn-whatsapp">
                <i className="fab fa-whatsapp"></i>
                <span>Confirm via WhatsApp</span>
              </button>
              
              <p className="form-disclaimer">
                * By clicking the button, you will be redirected to WhatsApp to finish your booking with Dr. Revanth.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;