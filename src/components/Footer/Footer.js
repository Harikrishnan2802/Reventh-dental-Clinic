import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0d2b4e"/>
        </svg>
      </div>
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon"><i className="fas fa-tooth"></i></div>
                <div>
                  <div className="footer-logo-name">Revanth Dental Care</div>
                  <div className="footer-logo-tag">Your Smile, Our Mission</div>
                </div>
              </div>
              <p className="footer-desc">
                Providing world-class dental care in Puducherry with compassion, precision, and the latest technology.
              </p>
              <div className="footer-socials">
                <a href="https://wa.me/9865879772" target="_blank" rel="noreferrer" className="social-btn whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn fb">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn ig">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:revanthdent17@gmail.com" className="social-btn email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/doctors', 'Our Doctors'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact']].map(([path, label]) => (
                  <li key={path}><Link to={path}><i className="fas fa-chevron-right"></i>{label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-links">
                {['Teeth Whitening', 'Dental Implants', 'Root Canal Treatment', 'Scaling & Cleaning', 'Ortho Braces', 'Crowns & Bridges','Clear Aligners'].map(s => (
                  <li key={s}><a href="/services"><i className="fas fa-chevron-right"></i>{s}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contact Info</h4>
              <ul className="footer-contact-list">
                <li>
                  <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <span>No: 7, Ezhaimarriamman koil street, Solai Nagar, Muthialpet, Puducherry, 605003</span>
                </li>
                <li>
                  <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                  <a href="tel:+919865879772">+91 9865879772</a>
                </li>
                <li>
                  <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                  <a href="mailto:revanthdent17@gmail.com">revanthdent17@gmail.com</a>
                </li>
                <li>
                  <div className="contact-icon"><i className="fas fa-clock"></i></div>
                  <span>Mon–Sat: 24 Hours<br/>Sun: 9AM – 9PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Revanth Dental Care. All rights reserved.</p>
            <p>Designed with <i className="fas fa-heart" style={{color:'#f0b429'}}></i> for better smiles</p>
          </div>
        </div>
      </div>
    </footer>
  );
}