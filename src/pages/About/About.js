import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import clinicImg from "../../assets/images/reception.jpeg";
import './About.css';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className} anim-section ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const milestones = [
  {
    year: '2021',
    title: 'Clinic Established',
    desc: 'Dr. N. Revanth founded Revanth Dental Care in Muthialpet, Puducherry with a mission to provide affordable, modern, and patient-friendly dental treatments.'
  },
  {
    year: '2022',
    title: 'Advanced Dental Technology Introduced',
    desc: 'The clinic adopted modern diagnostic and treatment equipment to ensure accurate, safe, and comfortable dental care for patients.'
  },
  {
    year: '2023',
    title: 'Growing Patient Trust',
    desc: 'Successfully treated hundreds of patients and expanded services including root canal treatments, cosmetic dentistry, and orthodontic care.'
  },
  {
    year: '2024',
    title: 'Specialized Implant Services',
    desc: 'Expanded expertise in dental implant procedures and advanced restorative treatments with a focus on long-term oral health solutions.'
  },
  {
    year: '2025',
    title: 'Trusted Dental Care Center',
    desc: 'Became a trusted name in Puducherry by delivering quality dental care, patient satisfaction, and personalized treatment experiences.'
  },
];

const values = [
  { icon: 'fa-heart', title: 'Compassion', desc: 'Every patient is treated like family — with warmth, empathy, and genuine care.' },
  { icon: 'fa-award', title: 'Excellence', desc: 'We pursue the highest standards of dental science in every procedure.' },
  { icon: 'fa-shield-alt', title: 'Integrity', desc: 'Transparent pricing, honest advice — always in the best interest of your health.' },
  { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Continuously adopting the latest dental technology for better outcomes.' },
  { icon: 'fa-users', title: 'Community', desc: 'Proudly serving the Puducherry community with affordable, world-class care.' },
  { icon: 'fa-graduation-cap', title: 'Education', desc: 'We empower patients with knowledge to maintain long-term dental health.' },
];

export default function About() {
  return (
    <div>
      {/* PAGE HERO */}
      <section className="page-hero">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="floating-tooth fas fa-tooth" style={{ top: `${10+i*15}%`, left: `${5+i*18}%`, animationDelay: `${i*0.8}s`, fontSize: `${40+i*20}px` }}></i>
        ))}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-title">About <span>Revanth Dental</span></div>
          <p className="page-hero-sub">Our story, mission, and the team dedicated to your smile</p>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span>About</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="container about-story-grid">
          <AnimatedSection className="story-visual">
            <div className="story-card-main">
              <div className="story-icon-wrap"><i className="fas fa-tooth"></i></div>
              <div className="story-card-label">Est. 2021</div>
              <div className="story-card-city">Puducherry</div>
              <div className="story-stats-row">
                <div><span>10+</span><small>Years</small></div>
                <div><span>1K+</span><small>Patients</small></div>
                <div><span>6</span><small>Services</small></div>
              </div>
            </div>
            <div className="story-blob">
  <img src={clinicImg} alt="Dental Clinic" />
</div>
          </AnimatedSection>
          <AnimatedSection className="story-text" delay={150}>
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">A Decade of <span>Smiles</span></h2>
            <p style={{ color: '#3d4f6b', lineHeight: 1.75, marginBottom: '16px' }}>
              Founded in 2021 by Dr. N. Revanth, Revanth Dental Care was born from a simple belief: every person deserves a healthy, beautiful smile — regardless of their background or budget.
            </p>
            <p style={{ color: '#3d4f6b', lineHeight: 1.75, marginBottom: '16px' }}>
              Located in the heart of Muthialpet, Puducherry, we have grown from a small clinic into a comprehensive dental care center equipped with modern technology and staffed by passionate professionals.
            </p>
            <p style={{ color: '#3d4f6b', lineHeight: 1.75, marginBottom: '32px' }}>
              Over 1000 patients trust us with their dental health — a testament to our commitment to excellence, compassion, and continuous learning.
            </p>
            <Link to="/Appointment" className="btn-primary"><span>Schedule a Visit <i className="fas fa-arrow-right"></i></span></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <AnimatedSection className="mission-card">
              <div className="mission-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>To provide exceptional dental care that transforms smiles and enhances quality of life — through compassionate service, cutting-edge technology, and honest, affordable treatment.</p>
            </AnimatedSection>
            <AnimatedSection className="mission-card vision-card" delay={150}>
              <div className="mission-icon vision-icon"><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To be Puducherry's most trusted dental destination — known for clinical excellence, patient-centered care, and a community impact that goes beyond the clinic walls.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <AnimatedSection className="values-header">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Core <span>Values</span></h2>
          </AnimatedSection>
          <div className="values-grid">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} className="value-card" delay={i * 80}>
                <div className="value-icon"><i className={`fas ${v.icon}`}></i></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="timeline-bg-shape"></div>
        <div className="container">
          <AnimatedSection className="timeline-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Milestones That <span>Define Us</span></h2>
          </AnimatedSection>
          <div className="timeline">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} delay={i * 100}>
                <div className="timeline-dot">
                  <span>{m.year}</span>
                </div>
                <div className="timeline-card">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CLINIC INFO */}
      <section className="clinic-info-section">
        <div className="container">
          <AnimatedSection className="clinic-info-grid">
            <div className="clinic-info-card">
              <i className="fas fa-clock"></i>
              <h4>Working Hours</h4>
              <div className="hours-list">
                <div><span>Mon – Sat</span><span>24 Hours</span></div>
                <div><span>Sunday</span><span>9:00 AM – 9:00 PM</span></div>
                <div><span>Emergency</span><span>Call us anytime</span></div>
              </div>
            </div>
            <div className="clinic-info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Location</h4>
              <p>No: 7, Ezhaimarriamman koil street,<br/>Solai Nagar, Muthialpet,<br/>Puducherry - 3</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="clinic-info-link">
                <i className="fas fa-directions"></i> Get Directions
              </a>
            </div>
            <div className="clinic-info-card">
              <i className="fas fa-phone-alt"></i>
              <h4>Get In Touch</h4>
              <a href="tel:+919444620131" className="clinic-phone">9865879772</a>
              <a href="mailto:revanthdent17@gmail.com" className="clinic-email">revanthdent17@gmail.com</a>
              <a href="https://wa.me/9865879772" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '16px', display: 'inline-flex' }}>
                <span><i className="fab fa-whatsapp"></i> WhatsApp Us</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}