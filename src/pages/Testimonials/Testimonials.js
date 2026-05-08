import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Arjun Sharma",
    service: "Dental Implant",
    comment: "Dr. Revanth is incredibly professional. I was nervous about my implant, but the process was seamless and painless. Highly recommend Revanth Dental Care!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Lakshmi",
    service: "Ortho Braces",
    comment: "The best dental clinic in Muthialpet. My daughter's braces treatment is showing great results. The staff is very friendly and the clinic is spotless.",
    rating: 5
  },
  {
    id: 3,
    name: "Vijay Kumar",
    service: "Root Canal Treatment",
    comment: "I went in for an emergency root canal. Dr. Revanth explained everything clearly and the relief was immediate. Truly a skilled dental surgeon.",
    rating: 5
  },
  {
    id: 4,
    name: "Sneha R.",
    service: "Teeth Whitening",
    comment: "Got a whitening treatment before my wedding. The results were amazing! My smile has never looked brighter. Great value for money.",
    rating: 4
  },
  {
    id: 5,
    name: "Rajesh Sekar",
    service: "Wisdom Tooth Extraction",
    comment: "I was terrified of getting my wisdom tooth pulled, but Dr. Revanth made it look easy. The recovery was much faster than I expected. Excellent care!",
    rating: 5
  },
  {
    id: 6,
    name: "Anita Deshmukh",
    service: "Pediatric Dentistry",
    comment: "Finding a dentist who can handle a 5-year-old is hard, but the team here was so patient and kind. My son actually enjoyed his checkup!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="floating-tooth" style={{ top: '20%', left: '10%' }}>🦷</div>
        <div className="floating-tooth" style={{ top: '60%', right: '15%', animationDelay: '2s' }}>🦷</div>
        
        <div className="container">
          <span className="section-tag">Patient Stories</span>
          <h1 className="page-hero-title">Trusted <span>Smiles</span></h1>
          <p className="page-hero-sub">Discover why our patients choose Revanth Dental Care for their oral health.</p>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span>Testimonials</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="section-title">What Our <span>Patients Say</span></h2>
            <p className="section-sub">We take pride in providing gentle, high-quality care to the Puducherry community.</p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="quote-icon">“</div>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < t.rating ? 'filled' : 'empty'}`}>
                      {i < t.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">{t.comment}</p>
                <div className="testimonial-footer">
                  <div className="patient-info">
                    <h4 className="patient-name">{t.name}</h4>
                    <span className="service-tag">{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="cta-box">
            <h3>Ready for your own transformation?</h3>
            <p>Schedule your appointment with Dr. N. Revanth today.</p>
            <Link to="/Appointment" className="btn-primary">
              <span>Book Appointment Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;