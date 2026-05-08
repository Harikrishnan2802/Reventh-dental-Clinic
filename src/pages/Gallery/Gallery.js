import React, { useState } from 'react';
import './Gallery.css';

// 1. IMPORT YOUR IMAGES
import receptionImg from '../../assets/images/reception.jpeg';
import xrayImg from '../../assets/images/xray.jpeg';
import equimentImg from '../../assets/images/equiment.jpeg';
import treatmentImg from '../../assets/images/treatment.jpeg';
import orthoImg from '../../assets/images/ortho success.jpg';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  // 2. UPDATED IMAGES ARRAY (Variables passed correctly without quotes)
  const images = [
    { id: 1, category: 'clinic', title: 'Reception', src: receptionImg },
    { id: 2, category: 'equipment', title: 'X-Ray', src: xrayImg },
    { id: 3, category: 'clinic', title: 'Treatment Area', src: treatmentImg },
    { id: 4, category: 'results', title: 'Smile Design', src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200' },
    { id: 5, category: 'equipment', title: 'Equipment', src: equimentImg },
    { id: 6, category: 'results', title: 'Success', src: orthoImg }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="page-wrapper">
      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.src} alt={selectedImg.title} />
            <div className="lightbox-info">
              <h3>{selectedImg.title}</h3>
              <p>{selectedImg.category.toUpperCase()}</p>
            </div>
            <button className="close-lightbox" onClick={() => setSelectedImg(null)}>&times;</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="page-hero">
        <div className="floating-tooth" style={{ top: '15%', left: '5%' }}>🦷</div>
        <div className="container">
          <span className="section-tag">Visual Tour</span>
          <h1 className="page-hero-title">Our <span>Clinic Gallery</span></h1>
          <p className="page-hero-sub">Step inside Revanth Dental Care in Muthialpet.</p>
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-content">
        <div className="container">
          {/* Filter Controls */}
          <div className="gallery-controls">
            {['all', 'clinic', 'equipment', 'results'].map((cat) => (
              <button 
                key={cat}
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Photos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="gallery-grid">
            {filteredImages.length > 0 ? (
              filteredImages.map((img) => (
                <div 
                  key={img.id} 
                  className="gallery-item"
                  onClick={() => setSelectedImg(img)}
                >
                  <div className="gallery-img-wrapper">
                    <img src={img.src} alt={img.title} loading="lazy" />
                    <div className="gallery-overlay">
                      <span className="gallery-category">{img.category}</span>
                      <h3 className="gallery-title">{img.title}</h3>
                      <div className="view-icon">
                        <i className="fas fa-expand"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">No images found for this category.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;