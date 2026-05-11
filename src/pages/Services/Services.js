import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

// 1. Import your images directly so React handles the paths correctly
import whiteningImg from '../../assets/images/Teeth Whitening.jpg';
import implantsImg from '../../assets/images/Dental Implants.jpg';
import rootCanalImg from '../../assets/images/Root Canal.jpg';
import cleaningImg from '../../assets/images/Scaling & Cleaning.jpg';
import bracesImg from '../../assets/images/Ortho Braces.jpg';
import crownsImg from '../../assets/images/Crowns & Bridges.jpg';
import alignersImg from '../../assets/images/aligners.webp';

function AnimatedSection({ children, className = '', delay = 0, onClick }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) setVisible(true); 
    }, { threshold: 0.1 });
    
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} anim-section ${visible ? 'visible' : ''}`} 
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

const services = [
  {
    id: 1, 
    image: whiteningImg,
    color: '#1a6fc4',
    title: 'Teeth Whitening',
    tagline: 'BRIGHTEN YOUR SMILE',
    desc: 'Our professional teeth whitening treatment uses the latest technology to remove years of staining and discoloration, giving you a brilliantly bright smile in just one session.',
    benefits: ['Up to 8 shades whiter in one session', 'Safe and painless procedure', 'Long-lasting results (1–2 years)', 'Supervised by dental professionals'],
    duration: '60–90 min',
    sessions: '1–2',
  },
  {
    id: 2, 
    image: implantsImg, 
    color: '#00c8e8',
    title: 'Dental Implants',
    tagline: 'PERMANENT TOOTH REPLACEMENT',
    desc: 'Dental implants are the gold standard for replacing missing teeth. They look, feel, and function just like natural teeth, restoring both your smile and confidence permanently.',
    benefits: ['Looks and feels natural', 'Prevents bone loss', 'No slipping or discomfort', 'Can last a lifetime with care'],
    duration: '1–2 hours',
    sessions: '2–3',
  },
  {
    id: 3, 
    image: rootCanalImg, 
    color: '#1a6fc4',
    title: 'Root Canal Treatment',
    tagline: 'SAVE YOUR NATURAL TOOTH',
    desc: 'Modern root canal treatment is virtually painless thanks to advanced anesthesia. We remove infected pulp, clean the canals, and seal the tooth — saving it from extraction.',
    benefits: ['Eliminates tooth pain', 'Saves natural tooth structure', 'Prevents spread of infection', 'Minimal discomfort with modern techniques'],
    duration: '60–120 min',
    sessions: '1–2',
  },
  {
    id: 4, 
    image: cleaningImg, 
    color: '#00c8e8',
    title: 'Scaling & Cleaning',
    tagline: 'DEEP GUM CARE',
    desc: 'Professional scaling removes hardened plaque (tartar) and bacteria from below the gumline, preventing gum disease and keeping your mouth healthy for the long term.',
    benefits: ['Removes stubborn tartar', 'Prevents gum disease', 'Fresh breath improvement', 'Recommended every 6 months'],
    duration: '30–60 min',
    sessions: '1',
  },
  {
    id: 5, 
    image: bracesImg, 
    color: '#1a6fc4',
    title: 'Ortho Braces',
    tagline: 'STRAIGHTEN YOUR SMILE',
    desc: 'We offer both traditional metal braces and clear aligner options to correct misaligned teeth and bite issues, helping you achieve a perfectly aligned, confident smile.',
    benefits: ['Traditional & clear options', 'Corrects bite issues', 'Improves oral hygiene', 'Confidence boost'],
    duration: 'Ongoing',
    sessions: '12–24 months',
  },
  {
    id: 6, 
    image: crownsImg, 
    color: '#00c8e8',
    title: 'Crowns & Bridges',
    tagline: 'RESTORE DAMAGED TEETH',
    desc: 'Dental crowns cap damaged or weakened teeth, while bridges span the gap created by one or more missing teeth. Both are crafted for a natural look and strong bite.',
    benefits: ['Natural-looking restorations', 'Protects weakened teeth', 'Restores full bite function', 'Durable porcelain/ceramic options'],
    duration: '60–90 min',
    sessions: '2',
  },
  {
    id: 7, // New ID
    image: alignersImg, 
    color: '#00c8e8', // Alternating color pattern
    title: 'Clear Aligners',
    tagline: 'INVISIBLE TEETH STRAIGHTENING',
    desc: 'Clear aligners are the modern, nearly invisible way to straighten your teeth without metal wires or brackets. They are removable, comfortable, and custom-made for your smile.',
    benefits: ['Virtually invisible', 'Removable for eating & cleaning', 'No dietary restrictions', 'Custom 3D planned treatment'],
    duration: '6–18 months',
    sessions: '2 to 3',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="page-hero">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="floating-tooth fas fa-tooth" style={{ top: `${15+i*12}%`, left: `${8+i*16}%`, animationDelay: `${i*0.7}s`, fontSize: `${40+i*15}px` }}></i>
        ))}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-title">Our <span>Services</span></div>
          <p className="page-hero-sub">Comprehensive dental care for every smile</p>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span>Services</span>
          </div>
        </div>
      </section>

      {/* SERVICE TABS */}
      <section className="services-tabs-section">
        <div className="container">
          <AnimatedSection className="services-intro" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Specialized <span>Dental Treatments</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Click any service to explore details and benefits.</p>
          </AnimatedSection>

          <div className="service-tabs-nav">
            {services.map((s, i) => (
              <button key={s.id} className={`service-tab-btn ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                <img src={s.image} alt={s.title} className="service-tab-img" />
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          <div className="service-detail-panel">
            {services.map((s, i) => (
              <div key={s.id} className={`service-detail ${activeTab === i ? 'active' : ''}`}>
                <div className="service-detail-left">
                  {/* Container for the square icon box seen in your screenshot */}
                  <div className="service-detail-icon-container" style={{ backgroundColor: s.color }}>
                    <img src={s.image} alt={s.title} className="service-main-image" />
                  </div>
                  
                  <div className="service-tag-line" style={{ color: s.color }}>{s.tagline}</div>
                  <h2 className="service-detail-title">{s.title}</h2>
                  <p className="service-detail-desc">{s.desc}</p>
                  
                  <div className="service-meta-row">
                    <div className="service-meta-item">
                      <i className="fas fa-clock"></i>
                      <div><small>Duration</small><span>{s.duration}</span></div>
                    </div>
                    <div className="service-meta-item">
                      <i className="fas fa-calendar-alt"></i>
                      <div><small>Sessions</small><span>{s.sessions}</span></div>
                    </div>
                  </div>
                  <Link to="/Appointment" className="btn-primary"><span>Book This Treatment <i className="fas fa-arrow-right"></i></span></Link>
                </div>

                <div className="service-detail-right">
                  <h4>Key Benefits</h4>
                  <ul className="benefit-list">
                    {s.benefits.map(b => (
                      <li key={b}>
                        <div className="benefit-check" style={{ backgroundColor: s.color }}><i className="fas fa-check"></i></div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="all-services-grid-section">
        <div className="container">
          <AnimatedSection className="services-grid-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag">Quick Overview</span>
            <h2 className="section-title">All <span>Treatments</span> at a Glance</h2>
          </AnimatedSection>
          <div className="all-services-grid">
            {services.map((s, i) => (
              <AnimatedSection 
                key={s.id} 
                className="mini-service-card" 
                delay={i * 80} 
                onClick={() => { 
                  setActiveTab(i); 
                  window.scrollTo({ top: document.querySelector('.services-tabs-section').offsetTop - 50, behavior: 'smooth' });
                }}
              >
                <div className="mini-icon" style={{ backgroundColor: s.color }}>
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="mini-text">
                  <h4>{s.title}</h4>
                  <p>{s.tagline}</p>
                </div>
                <i className="fas fa-chevron-right mini-arrow"></i>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <AnimatedSection className="services-cta-banner">
            <div className="services-cta-text">
              <h3>Not Sure Which Treatment You Need?</h3>
              <p>Book a free consultation and Dr. Revanth will guide you to the best solution for your smile.</p>
            </div>
            <div className="services-cta-actions">
              <Link to="/contact" className="btn-primary"><span><i className="fas fa-calendar-check"></i> Free Consultation</span></Link>
              <a href="tel:+919865879772" className="btn-outline"><i className="fas fa-phone-alt"></i> Call Us</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}