import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import '../styles/BackToTop.css';

interface BackToTopProps {
  threshold?: number; // scroll distance before showing button
}

const BackToTop: React.FC<BackToTopProps> = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`back-to-top-container ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={scrollToTop}
    >
      <div className="back-to-top-button">
        <ArrowUpOutlined className="back-to-top-icon" />
      </div>
      <div className={`back-to-top-label ${hovered ? 'show' : ''}`}>
        Back to Top
      </div>
    </div>
  );
};

export default BackToTop;
