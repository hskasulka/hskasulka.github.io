import React from 'react';
import '../styles/Header.css';

import { Typography } from 'antd';
const { Title } = Typography;

interface HeaderProps {
  title: string;
  stripeColor: string;
  indent?: number; // in pixels
}

const Header: React.FC<HeaderProps> = ({ title, stripeColor, indent = 0 }) => {
  return (
    <div className="header-container" style={{ paddingLeft: `${indent}px`, paddingBottom:'20px' }}>
      <Title level={4} className="header-title">{title}</Title>
      <div
        className="header-stripe"
        style={{ ['--stripe-color' as any]: stripeColor }}
      />
    </div>
  );
};

export default Header;
