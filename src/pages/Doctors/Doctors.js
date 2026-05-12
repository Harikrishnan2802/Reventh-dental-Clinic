import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import doctorImg from '../../assets/images/doctor.png';
import './Doctors.css';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className} anim-section ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const credentials = [
  { icon: 'fa-graduation-cap', label: 'BDS Degree', sub: 'Bachelor of Dental Surgery' },
  { icon: 'fa-certificate', label: 'Reg. No. 1394', sub: 'Licensed Dental Surgeon' },
  { icon: 'fa-award', label: '6 + Years', sub: 'Clinical Experience' },
  { icon: 'fa-microscope', label: 'Advanced Training', sub: 'Implantology & Orthodontics' },
];

const specializations = [
  'Oral Surgery & Extraction',
  'Dental Implantology',
  'Root Canal Therapy',
  'Cosmetic Dentistry',
  'Orthodontics',
  'Periodontics (Gum Care)',
  'Crowns, Bridges & Veneers',
  'Paediatric Dentistry',
];

export default function Doctors() {
  return (
    <div>
      <section className="page-hero">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="floating-tooth fas fa-tooth" style={{ top: `${15+i*12}%`, left: `${8+i*16}%`, animationDelay: `${i*0.7}s`, fontSize: `${40+i*15}px` }}></i>
        ))}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-title">Meet Our <span>Doctor</span></div>
          <p className="page-hero-sub">Expert care led by a passionate dental professional</p>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span>Doctors</span>
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <section className="doctor-profile-section">
        <div className="container">
          <div className="doctor-profile-grid">
            <AnimatedSection className="doctor-profile-card">

  <img
    src={doctorImg}
    alt="Dr. Revanth"
    className="doctor-full-image"
  />

  <div className="doctor-overlay">

    <div className="doctor-badge-reg">
      Reg. No. 1394
    </div>

    <div className="doctor-profile-name">
      Dr. N. Revanth
    </div>

    <div className="doctor-profile-title">
      Chief Dental Surgeon
    </div>

    <div className="doctor-profile-location">
      <i className="fas fa-map-marker-alt"></i>
      Muthialpet, Puducherry
    </div>

    <div className="doctor-profile-contact">

      <a href="tel:+919444620131" className="doc-contact-btn">
        <i className="fas fa-phone-alt"></i>
        Call Doctor
      </a>

      <a
        href="https://wa.me/919444620131"
        target="_blank"
        rel="noreferrer"
        className="doc-contact-btn wa"
      >
        <i className="fab fa-whatsapp"></i>
        WhatsApp
      </a>

    </div>

    <div className="doctor-mini-stats">

      <div>
        <span>6+</span>
        <small>Years Exp.</small>
      </div>

      <div>
        <span>1K+</span>
        <small>Patients</small>
      </div>

      <div>
        <span>98%</span>
        <small>Success</small>
      </div>

    </div>

  </div>

</AnimatedSection>

            <div className="doctor-profile-info">
              <AnimatedSection delay={100}>
                <span className="section-tag">Chief Dental Surgeon</span>
                <h2 className="section-title">Dr. N. <span>Revanth</span></h2>
                <p className="doctor-bio">
                  Dr. N. Revanth is the founder and Chief Dental Surgeon of Revanth Dental Care. With over a decade of clinical practice in Puducherry, he has built a reputation for delivering pain-free, precision dental care with a gentle touch.
                </p>
                <p className="doctor-bio" style={{ marginTop: '14px' }}>
                  His philosophy is simple: every patient deserves the best possible care, delivered with respect, honesty, and modern techniques. Dr. Revanth continues to pursue advanced training so his patients always benefit from the latest innovations in dentistry.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200} className="credentials-grid">
                {credentials.map(c => (
                  <div key={c.label} className="credential-item">
                    <div className="credential-icon"><i className={`fas ${c.icon}`}></i></div>
                    <div>
                      <div className="credential-label">{c.label}</div>
                      <div className="credential-sub">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <h4 className="specializations-title">Areas of Specialization</h4>
                <div className="specializations-grid">
                  {specializations.map(s => (
                    <div key={s} className="spec-tag">
                      <i className="fas fa-tooth"></i>
                      {s}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400} className="doctor-cta">
                <Link to="/Appointment" className="btn-primary"><span><i className="fas fa-calendar-check"></i> Book Appointment</span></Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC TEAM */}
      <section className="team-section">
        <div className="container">
          <AnimatedSection className="team-header" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">The <span>People</span> Behind Your Smile</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Our dedicated support team ensures every visit is comfortable, efficient, and pleasant.</p>
          </AnimatedSection>

          <div className="team-grid">
            {[
              { role: 'Dental Hygienist', icon: 'fa-user-nurse', desc: 'Specializes in preventive care, cleaning, and patient education on oral hygiene.' },
              { role: 'Dental Assistant', icon: 'fa-hand-holding-medical', desc: 'Ensures smooth procedures by assisting Dr. Revanth and keeping patients comfortable.' },
              { role: 'Front Desk', icon: 'fa-headset', desc: 'Handles appointments, insurance, and makes sure every patient feels welcomed.' },
              { role: 'Lab Technician', icon: 'fa-flask', desc: 'Crafts custom crowns, bridges, and appliances with precision and artistry.' },
            ].map((t, i) => (
              <AnimatedSection key={t.role} className="team-card" delay={i * 100}>
                <div className="team-avatar">
                  <i className={`fas ${t.icon}`}></i>
                </div>
                <div className="team-role">{t.role}</div>
                <p className="team-desc">{t.desc}</p>
                <div className="team-line"></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section">
        <div className="approach-bg"></div>
        <div className="container">
          <AnimatedSection className="approach-header" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>Dr. Revanth's Philosophy</span>
            <h2 className="section-title" style={{ color: 'white' }}>A Patient-First <span style={{ color: '#00c8e8' }}>Approach</span></h2>
          </AnimatedSection>
          <div className="approach-grid">
            {[
              { step: '01', title: 'Listen & Understand', desc: 'Every consultation starts with listening — understanding your concerns, your goals, and your fears.' },
              { step: '02', title: 'Diagnose Accurately', desc: 'Using digital X-rays and thorough clinical examination to build a clear picture of your dental health.' },
              { step: '03', title: 'Plan Transparently', desc: 'We present all treatment options with clear pricing — no hidden surprises, ever.' },
              { step: '04', title: 'Treat with Precision', desc: 'Every procedure is performed with the latest techniques for minimal discomfort and optimal results.' },
            ].map((a, i) => (
              <AnimatedSection key={a.step} className="approach-card" delay={i * 100}>
                <div className="approach-step">{a.step}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}