import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  title: string;
  stripeColor: string;
  indent?: number; // in pixels
}

const Header: React.FC<HeaderProps> = ({ title, stripeColor, indent = 0 }) => {
  return (
    <div className="header-container" style={{ paddingLeft: `${indent}px` }}>
      <h2 className="header-title">{title}</h2>
      <div
        className="header-stripe"
        style={{ ['--stripe-color' as any]: stripeColor }}
      />
    </div>
  );
};

export default Header;
