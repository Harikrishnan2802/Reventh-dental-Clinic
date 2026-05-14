import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import doctorImg1 from '../../assets/images/doctor1.png';
import doctorImg2 from '../../assets/images/doctor2.png';
import doctorImg3 from '../../assets/images/doctor3.png';

import './Doctors.css';

const SLIDES = [doctorImg1, doctorImg2, doctorImg3];

/* ═══════════════════════════════════════════════════════════
   StaticSlideCard
   – Sticky on the right side of the page (no scroll JS)
   – Auto-swipes through images every 3 seconds (crossfade)
   – Clickable dot indicators for manual navigation
═══════════════════════════════════════════════════════════ */
function StaticSlideCard({ images }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % images.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goTo = (idx) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  };

  return (
    <div className="sfc-wrap">
      <div className="sfc-flipper">
        <div className="sfc-face sfc-face--front">
          <img
            src={images[current]}
            alt="Dr. N. Revanth"
            className={`sfc-img${fading ? ' sfc-img--fade' : ''}`}
          />
          <div className="sfc-corner sfc-corner--tl" />
          <div className="sfc-corner sfc-corner--br" />

          {/* Progress bar */}
          <div className="sfc-progress-bar">
            <div
              className="sfc-progress-fill"
              key={current}
            />
          </div>

          {/* Dot indicators */}
          <div className="sfc-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`sfc-dot${i === current ? ' sfc-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info tag */}
      <div className="sfc-tag">
        <div className="sfc-tag__name">Dr. N. Revanth</div>
        <div className="sfc-tag__role">Chief Dental Surgeon</div>
        <div className="sfc-tag__ctas">
          <a href="tel:+919444620131" className="sfc-tag__btn">
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="https://wa.me/919444620131"
            target="_blank"
            rel="noreferrer"
            className="sfc-tag__btn sfc-tag__btn--wa"
          >
            <i className="fab fa-whatsapp" />
          </a>
        </div>
        <div className="sfc-tag__stats">
          <span>6+ <small>Yrs</small></span>
          <span>1K+ <small>Patients</small></span>
          <span>98% <small>Success</small></span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
function Reveal({ children, className = '', delay = 0, from = 'bottom' }) {
  const [vis, setVis] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} rv rv--${from}${vis ? ' rv--vis' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const credentials = [
  { icon: 'fa-graduation-cap', label: 'BDS Degree',        sub: 'Bachelor of Dental Surgery' },
  { icon: 'fa-certificate',    label: 'Reg. No. 1394',     sub: 'Licensed Dental Surgeon' },
  { icon: 'fa-award',          label: '6 + Years',         sub: 'Clinical Experience' },
  { icon: 'fa-microscope',     label: 'Advanced Training', sub: 'Implantology & Orthodontics' },
];

const specializations = [
  'Oral Surgery & Extraction', 'Dental Implantology',
  'Root Canal Therapy',        'Cosmetic Dentistry',
  'Orthodontics',              'Periodontics (Gum Care)',
  'Crowns, Bridges & Veneers', 'Paediatric Dentistry',
];

const approachSteps = [
  { n: '01', t: 'Listen & Understand', d: 'Every consultation starts with listening — understanding your concerns, goals, and fears.' },
  { n: '02', t: 'Diagnose Accurately',  d: 'Digital X-rays and thorough examination build a clear picture of your dental health.' },
  { n: '03', t: 'Plan Transparently',  d: 'All treatment options with clear pricing — no hidden surprises, ever.' },
  { n: '04', t: 'Treat with Precision', d: 'Latest techniques for minimal discomfort and optimal results every time.' },
];

/* ─────────────────────────────────────────────────────────── */
export default function Doctors() {
  return (
    <div className="doctors-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className="floating-tooth fas fa-tooth"
            style={{
              top: `${15 + i * 12}%`,
              left: `${8 + i * 16}%`,
              animationDelay: `${i * 0.7}s`,
              fontSize: `${40 + i * 15}px`,
            }}
          />
        ))}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-title">Meet Our <span>Doctor</span></div>
          <p className="page-hero-sub">Expert care led by a passionate dental professional</p>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span>Doctors</span>
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL LAYOUT: left content + sticky card right ═══ */}
      <div className="pg-layout">

        {/* Sticky card column */}
        <div className="pg-card-col">
          <StaticSlideCard images={SLIDES} />
        </div>

        {/* Content column */}
        <div className="pg-content-col">

          {/* ── SECTION 1: Profile intro ── */}
          <section className="pg-section">
            <div className="pg-section__inner">

              <Reveal>
                <span className="section-tag">Chief Dental Surgeon</span>
                <h2 className="section-title">Dr. N. <span>Revanth</span></h2>
                <p className="doctor-bio">
                  Dr. N. Revanth is the founder and Chief Dental Surgeon of Revanth Dental Care.
                  With over a decade of clinical practice in Puducherry, he has built a reputation
                  for delivering pain-free, precision dental care with a gentle touch.
                </p>
                <p className="doctor-bio" style={{ marginTop: '14px' }}>
                  His philosophy: every patient deserves the best possible care, delivered with
                  respect, honesty, and modern techniques — always backed by the latest innovations.
                </p>
              </Reveal>

              <Reveal delay={100} className="credentials-grid">
                {credentials.map(c => (
                  <div key={c.label} className="credential-item">
                    <div className="credential-icon"><i className={`fas ${c.icon}`} /></div>
                    <div>
                      <div className="credential-label">{c.label}</div>
                      <div className="credential-sub">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </Reveal>

              <Reveal delay={80}>
                <h4 className="specializations-title">Areas of Specialization</h4>
                <div className="specializations-grid">
                  {specializations.map((s, i) => (
                    <Reveal key={s} delay={i * 40} from="left">
                      <div className="spec-tag"><i className="fas fa-tooth" />{s}</div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>

            </div>
          </section>

          {/* ── SECTION 2: Approach steps ── */}
          <section className="pg-section pg-section--alt">
            <div className="pg-section__inner">

              <Reveal>
                <span className="section-tag">How We Work</span>
                <h2 className="section-title">A Patient-First <span>Approach</span></h2>
              </Reveal>

              <div className="ap-list">
                {approachSteps.map((a, i) => (
                  <Reveal key={a.n} delay={i * 80} from="left" className="ap-row">
                    <div className="ap-row__num">{a.n}</div>
                    <div className="ap-row__body">
                      <div className="ap-row__title">{a.t}</div>
                      <div className="ap-row__desc">{a.d}</div>
                    </div>
                  </Reveal>
                ))}
              </div>

            </div>
          </section>

          {/* ── SECTION 3: CTA / Contact ── */}
          <section className="pg-section">
            <div className="pg-section__inner">

              <Reveal>
                <span className="section-tag">Book Now</span>
                <h2 className="section-title">Ready for Your <span>Smile?</span></h2>
                <p className="doctor-bio">
                  Experience precision dental care that combines the latest technology with
                  compassionate treatment. Your healthy smile is our mission.
                </p>
              </Reveal>

              <Reveal delay={100} className="dp-cta">
                <Link to="/Appointment" className="btn-primary">
                  <span><i className="fas fa-calendar-check" /> Book Appointment</span>
                </Link>
              </Reveal>

            </div>
          </section>

        </div>
        {/* ── end pg-content-col ── */}

      </div>
      {/* ═══ end pg-layout ═══ */}

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">The <span>People</span> Behind Your Smile</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Our dedicated support team ensures every visit is comfortable, efficient, and pleasant.
            </p>
          </Reveal>
          <div className="team-grid">
            {[
              { role: 'Dental Hygienist',  icon: 'fa-user-nurse',           desc: 'Specializes in preventive care, cleaning, and patient education on oral hygiene.' },
              { role: 'Dental Assistant',  icon: 'fa-hand-holding-medical', desc: 'Ensures smooth procedures by assisting Dr. Revanth and keeping patients comfortable.' },
              { role: 'Front Desk',        icon: 'fa-headset',              desc: 'Handles appointments, insurance, and makes sure every patient feels welcomed.' },
              { role: 'Lab Technician',    icon: 'fa-flask',                desc: 'Crafts custom crowns, bridges, and appliances with precision and artistry.' },
            ].map((t, i) => (
              <Reveal key={t.role} className="team-card" delay={i * 100}>
                <div className="team-avatar"><i className={`fas ${t.icon}`} /></div>
                <div className="team-role">{t.role}</div>
                <p className="team-desc">{t.desc}</p>
                <div className="team-line" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH DARK ── */}
      <section className="approach-section">
        <div className="approach-bg" />
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Dr. Revanth's Philosophy
            </span>
            <h2 className="section-title" style={{ color: 'white' }}>
              A Patient-First <span style={{ color: '#00c8e8' }}>Approach</span>
            </h2>
          </Reveal>
          <div className="approach-grid">
            {approachSteps.map((a, i) => (
              <Reveal key={a.n} className="approach-card" delay={i * 100}>
                <div className="approach-step">{a.n}</div>
                <h4>{a.t}</h4>
                <p>{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}