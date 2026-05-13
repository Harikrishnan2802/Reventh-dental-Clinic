import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import doctorImg1 from '../../assets/images/doctor1.png';
import doctorImg2 from '../../assets/images/doctor2.png';
import doctorImg3 from '../../assets/images/doctor3.png';
// If you only have one photo:
// import doctorImg from '../../assets/images/doctor.png';
// const SLIDES = [doctorImg, doctorImg, doctorImg];

import './Doctors.css';

const SLIDES = [doctorImg1, doctorImg2, doctorImg3];

/* ═══════════════════════════════════════════════════════════
   ScrollFlipCard
   – Floats fixed on the right side of the page
   – Follows scroll position (translateY = scrollY * factor)
   – When it crosses a section boundary it does a full 3D
     rotateY(0→180deg) flip, swapping the photo
   ═══════════════════════════════════════════════════════════ */
function ScrollFlipCard({ images, sectionRefs }) {
  const cardRef  = useRef(null);
  const rafRef   = useRef(null);

  // Visual state driven by scroll
  const [cardStyle, setCardStyle] = useState({});
  const [imgIndex,  setImgIndex]  = useState(0);
  const [flipping,  setFlipping]  = useState(false);

  // track which section the card is "in" to know when to flip
  const activeSectionRef = useRef(0);
  const flipLockRef      = useRef(false);

  const triggerFlip = useCallback((nextImg) => {
    if (flipLockRef.current) return;
    flipLockRef.current = true;
    setFlipping(true);

    // At 90° midpoint swap the image (card is invisible then)
    setTimeout(() => setImgIndex(nextImg), 420);

    setTimeout(() => {
      setFlipping(false);
      flipLockRef.current = false;
    }, 850);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh      = window.innerHeight;

        // ── card slip: moves DOWN with scroll but slower (parallax) ──
        // The card starts ~120px from the top of the viewport and
        // drifts downward at 30% of scroll speed, giving the "slip" feel.
        const baseTop = 120;
        const slipTop = baseTop + scrollY * 0.28;

        // Clamp so card never goes below viewport bottom - card height
        const cardH   = cardRef.current?.offsetHeight || 480;
        const maxTop  = vh - cardH - 24;
        const top     = Math.min(slipTop, maxTop);

        // Tilt: gentle lean based on scroll velocity feel
        // Rotates from +6° at top, to -6° toward bottom
        const tiltProgress = Math.min(1, scrollY / (document.body.scrollHeight - vh));
        const tilt = 6 - tiltProgress * 12;

        setCardStyle({
          top:       `${top}px`,
          transform: `rotate(${tilt}deg)`,
        });

        // ── section detection → trigger flip ──
        if (!sectionRefs?.length) return;
        sectionRefs.forEach((ref, idx) => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          // Card "enters" a section when the section top is above 60% of viewport
          if (rect.top < vh * 0.6 && rect.bottom > vh * 0.2) {
            if (activeSectionRef.current !== idx) {
              activeSectionRef.current = idx;
              const nextImg = idx % images.length;
              if (nextImg !== undefined) triggerFlip(nextImg);
            }
          }
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [images.length, sectionRefs, triggerFlip]);

  return (
    <div
      className={`sfc-wrap${flipping ? ' sfc-wrap--flip' : ''}`}
      ref={cardRef}
      style={cardStyle}
    >
      {/* 3-D flip container — front & back faces */}
      <div className="sfc-flipper">

        {/* FRONT */}
        <div className="sfc-face sfc-face--front">
          <img src={images[imgIndex]} alt="Dr. N. Revanth" className="sfc-img" />
          <div className="sfc-shine" />
          <div className="sfc-corner sfc-corner--tl" />
          <div className="sfc-corner sfc-corner--br" />
        </div>

        {/* BACK (shown mid-flip) */}
        <div className="sfc-face sfc-face--back">
          <div className="sfc-back-content">
            <i className="fas fa-tooth sfc-back-icon" />
            <div className="sfc-back-text">Revanth<br />Dental Care</div>
          </div>
        </div>

      </div>

      {/* Info tag at bottom of card */}
      <div className="sfc-tag">
        <div className="sfc-tag__name">Dr. N. Revanth</div>
        <div className="sfc-tag__role">Chief Dental Surgeon</div>
        <div className="sfc-tag__ctas">
          <a href="tel:+919444620131"      className="sfc-tag__btn"><i className="fas fa-phone-alt" /></a>
          <a href="https://wa.me/919444620131" target="_blank" rel="noreferrer" className="sfc-tag__btn sfc-tag__btn--wa"><i className="fab fa-whatsapp" /></a>
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
    <div ref={ref}
      className={`${className} rv rv--${from}${vis ? ' rv--vis' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const credentials = [
  { icon:'fa-graduation-cap', label:'BDS Degree',        sub:'Bachelor of Dental Surgery' },
  { icon:'fa-certificate',    label:'Reg. No. 1394',     sub:'Licensed Dental Surgeon' },
  { icon:'fa-award',          label:'6 + Years',         sub:'Clinical Experience' },
  { icon:'fa-microscope',     label:'Advanced Training', sub:'Implantology & Orthodontics' },
];

const specializations = [
  'Oral Surgery & Extraction','Dental Implantology',
  'Root Canal Therapy','Cosmetic Dentistry',
  'Orthodontics','Periodontics (Gum Care)',
  'Crowns, Bridges & Veneers','Paediatric Dentistry',
];

const approachSteps = [
  { n:'01', t:'Listen & Understand', d:'Every consultation starts with listening — understanding your concerns, goals, and fears.' },
  { n:'02', t:'Diagnose Accurately',  d:'Digital X-rays and thorough examination build a clear picture of your dental health.' },
  { n:'03', t:'Plan Transparently',  d:'All treatment options with clear pricing — no hidden surprises, ever.' },
  { n:'04', t:'Treat with Precision', d:'Latest techniques for minimal discomfort and optimal results every time.' },
];

/* ─────────────────────────────────────────────────────────── */
export default function Doctors() {
  // Refs for each content section — used to detect when card crosses a boundary
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);

  return (
    <div className="doctors-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="floating-tooth fas fa-tooth" style={{
            top:`${15+i*12}%`, left:`${8+i*16}%`,
            animationDelay:`${i*0.7}s`, fontSize:`${40+i*15}px`,
          }} />
        ))}
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <div className="page-hero-title">Meet Our <span>Doctor</span></div>
          <p className="page-hero-sub">Expert care led by a passionate dental professional</p>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span>Doctors</span>
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL LAYOUT: left column + fixed floating card ═══ */}
      <div className="pg-layout">

        {/* Fixed floating card — positioned absolutely in this container */}
        <ScrollFlipCard images={SLIDES} sectionRefs={[sec1, sec2, sec3]} />

        {/* ── SECTION 1: Profile intro ── */}
        <section className="pg-section" ref={sec1}>
          <div className="pg-section__inner">

            <Reveal>
              <span className="section-tag">Chief Dental Surgeon</span>
              <h2 className="section-title">Dr. N. <span>Revanth</span></h2>
              <p className="doctor-bio">
                Dr. N. Revanth is the founder and Chief Dental Surgeon of Revanth Dental Care.
                With over a decade of clinical practice in Puducherry, he has built a reputation
                for delivering pain-free, precision dental care with a gentle touch.
              </p>
              <p className="doctor-bio" style={{ marginTop:'14px' }}>
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
        <section className="pg-section pg-section--alt" ref={sec2}>
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
        <section className="pg-section" ref={sec3}>
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
      {/* ═══ end pg-layout ═══ */}

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="container">
          <Reveal style={{ textAlign:'center', marginBottom:'56px' }}>
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">The <span>People</span> Behind Your Smile</h2>
            <p className="section-sub" style={{ margin:'0 auto' }}>
              Our dedicated support team ensures every visit is comfortable, efficient, and pleasant.
            </p>
          </Reveal>
          <div className="team-grid">
            {[
              { role:'Dental Hygienist',  icon:'fa-user-nurse',           desc:'Specializes in preventive care, cleaning, and patient education on oral hygiene.' },
              { role:'Dental Assistant',  icon:'fa-hand-holding-medical', desc:'Ensures smooth procedures by assisting Dr. Revanth and keeping patients comfortable.' },
              { role:'Front Desk',        icon:'fa-headset',              desc:'Handles appointments, insurance, and makes sure every patient feels welcomed.' },
              { role:'Lab Technician',    icon:'fa-flask',                desc:'Crafts custom crowns, bridges, and appliances with precision and artistry.' },
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
          <Reveal style={{ textAlign:'center', marginBottom:'56px' }}>
            <span className="section-tag" style={{ color:'rgba(255,255,255,0.6)' }}>Dr. Revanth's Philosophy</span>
            <h2 className="section-title" style={{ color:'white' }}>
              A Patient-First <span style={{ color:'#00c8e8' }}>Approach</span>
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