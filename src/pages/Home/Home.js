import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../../assets/videos/background.mp4';
import cleaningImg from '../../assets/images/Teeth Whitening.jpg';
import implantImg from '../../assets/images/Dental Implants.jpg';
import bracesImg from '../../assets/images/Ortho Braces.jpg';
import rootImg from '../../assets/images/Root Canal.jpg';
import scalImg from '../../assets/images/Scaling & Cleaning.jpg';
import crownImg from '../../assets/images/Crowns & Bridges.jpg';
import clinicImg from "../../assets/images/reception.jpeg";
import './Home.css';

function CounterBox({ target, label, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div className="stat-box" ref={ref}>
      <div className="stat-num">{count}<span>{suffix}</span></div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className} anim-section ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const services = [
  { icon: 'fa-star', title: 'Teeth Whitening', desc: 'Brighten your smile with our professional whitening treatments for dramatic, lasting results.', image: cleaningImg,color: '#1a6fc4' },
  { icon: 'fa-cog', title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacements that restore your confidence and function.',image:implantImg, color: '#00c8e8' },
  { icon: 'fa-heartbeat', title: 'Root Canal', desc: 'Pain-free root canal therapy using the latest techniques to save your natural teeth.',image: rootImg,
 color: '#1a6fc4' },
  { icon: 'fa-shield-alt', title: 'Scaling & Cleaning', desc: 'Professional deep cleaning to remove plaque and tartar, keeping gums healthy.', image: scalImg,
color: '#00c8e8' },
  { icon: 'fa-smile', title: 'Ortho Braces', desc: 'Traditional and invisible braces to align your teeth and create a perfect smile.', image: bracesImg,color: '#1a6fc4' },
  { icon: 'fa-gem', title: 'Crowns & Bridges', desc: 'High-quality dental restorations to rebuild damaged or missing teeth beautifully.',image: crownImg, color: '#00c8e8' },
];

const testimonials = [
  { name: 'Priya S.', text: 'Dr. Revanth is absolutely amazing! My teeth have never looked better after the whitening treatment. Very professional and caring.', rating: 5, tag: 'Teeth Whitening' },
  { name: 'Karthik M.', text: 'I was so scared of root canal but the team made it completely painless. Excellent service and modern equipment.', rating: 5, tag: 'Root Canal' },
  { name: 'Anitha R.', text: 'The best dental clinic in Puducherry! Friendly staff, clean environment, and top-notch treatment. Highly recommend!', rating: 5, tag: 'Dental Implant' },
];

// 1. Inside your Home component, add a ref for the video
export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const videoRef = useRef(null); // Add this ref

  useEffect(() => {
    // 2. Set the playback rate (0.5 is half speed)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65; 
    }
    
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <video
          ref={videoRef} // 3. Attach the ref here
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={back} type="video/mp4" />
        </video>

<div className="hero-video-overlay"></div>
        <div className="hero-bg-anim">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="hero-bubble" style={{ '--i': i }}></div>
          ))}
        </div>
        <div className="hero-tooth-bg">
          <i className="fas fa-tooth hero-tooth-icon t1"></i>
          <i className="fas fa-tooth hero-tooth-icon t2"></i>
          <i className="fas fa-tooth hero-tooth-icon t3"></i>
        </div>

        <div className="container hero-content">
          <div className={`hero-left ${heroLoaded ? 'loaded' : ''}`}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Now Accepting New Patients
            </div>
            <h1 className="hero-title">
              Your Perfect <br />
              <span className="gradient-text">Smile Starts</span><br />
              Right Here
            </h1>
            <h2 className="hero-seo-title">
  Best Dental Clinic in Puducherry
</h2>
            <p className="hero-desc">
  Revanth Dental Care is a trusted dental clinic in Puducherry offering
  advanced dental treatments, dental implants, root canal treatment,
  cosmetic dentistry, and painless dental care led by Dr. N. Revanth.
</p>
            <div className="hero-actions">
              <Link to="/Appointment" className="btn-primary">
                <span><i className="fas fa-calendar-check"></i> Book Appointment</span>
              </Link>
              <a href="tel:+919444620131" className="hero-call-btn">
                <div className="call-pulse-ring"></div>
                <div className="call-icon-wrap"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <div className="call-label">Call Us Now</div>
                  <div className="call-num">9444620131</div>
                </div>
              </a>
            </div>
            <div className="hero-tags">
              {['ISO Certified', 'Pain-Free Treatment', 'Latest Technology', '1000+ Happy Patients'].map(t => (
                <span key={t} className="hero-tag"><i className="fas fa-check-circle"></i>{t}</span>
              ))}
            </div>
          </div>

          <div className={`hero-right ${heroLoaded ? 'loaded' : ''}`}>
            <div className="hero-card-main">
              <div className="hero-tooth-anim">
                <svg viewBox="0 0 200 220" width="220" height="240">
                  <defs>
                    <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a6fc4"/>
                      <stop offset="100%" stopColor="#00c8e8"/>
                    </linearGradient>
                  </defs>
                  <path d="M100,20 C60,20 30,50 30,80 C30,100 40,120 45,150 C50,175 55,200 70,200 C80,200 85,185 90,170 C93,160 96,155 100,155 C104,155 107,160 110,170 C115,185 120,200 130,200 C145,200 150,175 155,150 C160,120 170,100 170,80 C170,50 140,20 100,20 Z"
                    fill="url(#tg)" opacity="0.9"/>
                  <path d="M100,20 C60,20 30,50 30,80 C30,100 40,120 45,150 C50,175 55,200 70,200 C80,200 85,185 90,170 C93,160 96,155 100,155 C104,155 107,160 110,170 C115,185 120,200 130,200 C145,200 150,175 155,150 C160,120 170,100 170,80 C170,50 140,20 100,20 Z"
                    fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                  <circle cx="75" cy="70" r="8" fill="rgba(255,255,255,0.2)"/>
                  <circle cx="125" cy="70" r="8" fill="rgba(255,255,255,0.2)"/>
                  <path d="M75,90 C85,100 115,100 125,90" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="hero-doctor-card">
                <div className="doctor-avatar">
                  <i className="fas fa-user-md"></i>
                </div>
                <div>
                  <div className="doctor-card-name">Dr. N. Revanth</div>
                  <div className="doctor-card-title">Chief Dental Surgeon</div>
                  <div className="doctor-card-reg">Reg. No: 1394</div>
                </div>
              </div>
              <div className="hero-float-badge b1">
                <i className="fas fa-star"></i>
                <span>4.9 Rating</span>
              </div>
              <div className="hero-float-badge b2">
                <i className="fas fa-tooth"></i>
                <span>6 Specialties</span>
              </div>
              <div className="hero-float-badge b3">
                <i className="fas fa-award"></i>
                <span>10+ Years Exp.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-strip">
        <div className="marquee-track">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="marquee-inner">
              {['Teeth Whitening', 'Dental Implants', 'Root Canal Treatment', 'Scaling & Cleaning', 'Ortho Braces', 'Crowns & Bridges', 'Pain-Free Treatment', 'Modern Equipment'].map(t => (
                <span key={t}><i className="fas fa-tooth"></i>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <CounterBox target={1000} label="Happy Patients" />
            <CounterBox target={10} label="Years of Excellence" />
            <CounterBox target={6} label="Specialties" suffix="+" />
            <CounterBox target={98} label="Success Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="about-snippet">
        <div className="container about-snippet-grid">
          <AnimatedSection className="about-snippet-img-wrap" delay={0}>
            <div className="about-blob-bg">
  <img src={clinicImg} alt="Dental Clinic" />
</div>
            <div className="about-img-card main-card">
              <i className="fas fa-tooth about-img-icon"></i>
              <div className="about-img-label">Expert Care</div>
              <div className="about-img-sub">Since 2014</div>
            </div>
            <div className="about-img-card side-card">
              <i className="fas fa-smile side-icon"></i>
              <div>Smiles Restored</div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="about-snippet-text" delay={150}>
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Where Dental <span>Excellence</span> Meets Compassion</h2>
            <p className="section-sub">
              Revanth Dental Care is one of the best dental clinics in Puducherry,
  offering advanced dental treatments, cosmetic dentistry, dental implants,
  root canal treatment, teeth whitening, braces, and painless dental care
  with modern technology and personalized treatment plans.
            </p>
            <ul className="about-list">
              {['State-of-the-art equipment for precise diagnosis', 'Painless procedures with advanced anesthesia', 'Personalized treatment plans for every patient', 'Warm and welcoming clinic environment'].map(item => (
                <li key={item}><i className="fas fa-check-circle"></i>{item}</li>
              ))}
            </ul>
            <div className="about-actions">
              <Link to="/about" className="btn-primary"><span>Learn More About Us <i className="fas fa-arrow-right"></i></span></Link>
              <a href="tel:+919444620131" className="btn-outline"><i className="fas fa-phone-alt"></i> Call Now</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="container">
          <AnimatedSection className="services-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">
  <span className="comp-text">Comprehensive</span>{" "}
  <span>Dental Services</span>
</h2>
            <p className="section-sub">From routine cleanings to complex restorations, we offer everything your smile needs.</p>
          </AnimatedSection>
          <div className="services-grid">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80} className={`service-card ${activeService === i ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(i)}>
<div className="service-icon-wrap" style={{ '--sc': s.color }}>

  {s.image ? (
    <img
      src={s.image}
      alt={s.title}
      className="service-image"
    />
  ) : (
    <i className={`fas ${s.icon}`}></i>
  )}

</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <Link to="/services" className="service-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
                <div className="service-card-glow" style={{ '--sc': s.color }}></div>
              </AnimatedSection>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn-outline">View All Services <i className="fas fa-chevron-right"></i></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <div className="why-us-bg">
          <div className="why-blob w1"></div>
          <div className="why-blob w2"></div>
        </div>
        <div className="container">
          <AnimatedSection className="why-us-header">
            <span className="section-tag" style={{ color: 'rgba(255,255,255,0.8)' }}>Why Choose Us</span>
            <h2 className="section-title" style={{ color: 'white' }}>The Revanth Dental <span style={{ color: '#00c8e8' }}>Difference</span></h2>
          </AnimatedSection>
          <div className="why-grid">
            {[
              { icon: 'fa-user-md', title: 'Expert Surgeon', desc: 'Dr. N. Revanth is a seasoned Chief Dental Surgeon with over 10 years of clinical excellence.' },
              { icon: 'fa-microscope', title: 'Latest Technology', desc: 'We invest in cutting-edge dental equipment so you get the most accurate and comfortable treatment.' },
              { icon: 'fa-hand-holding-heart', title: 'Patient-First Approach', desc: 'Your comfort is our priority. We listen, understand, and create care plans tailored just for you.' },
              { icon: 'fa-rupee-sign', title: 'Affordable Pricing', desc: 'Premium dental care at fair, transparent prices. We believe everyone deserves a healthy smile.' },
            ].map((w, i) => (
              <AnimatedSection key={w.title} className="why-card" delay={i * 100}>
                <div className="why-icon"><i className={`fas ${w.icon}`}></i></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SNIPPET */}
      <section className="testi-section">
        <div className="container">
          <AnimatedSection className="testi-header">
            <span className="section-tag">Patient Stories</span>
            <h2 className="section-title">What Our <span>Patients Say</span></h2>
          </AnimatedSection>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} className="testi-card" delay={i * 120}>
                <div className="testi-stars">
                  {[...Array(t.rating)].map((_, j) => <i key={j} className="fas fa-star"></i>)}
                </div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-meta">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-service">{t.tag}</div>
                  </div>
                  <div className="testi-quote"><i className="fas fa-quote-right"></i></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="testi-cta">
            <Link to="/testimonials" className="btn-outline">Read More Reviews <i className="fas fa-chevron-right"></i></Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <AnimatedSection className="cta-inner">
            <div className="cta-text">
              <h2>Ready for Your <span>Best Smile?</span></h2>
              <p>Book your consultation today and take the first step towards perfect dental health.</p>
            </div>
            <div className="cta-actions">
              <Link to="/Appointment" className="btn-primary"><span>Book Appointment <i className="fas fa-calendar-check"></i></span></Link>
              <a href="https://wa.me/919444620131" className="whatsapp-btn" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}