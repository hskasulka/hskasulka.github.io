import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/LinkItem.css';

interface LinkItemProps {
  href: string;
  icon: any;
  label: string;
  color?: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, icon, label, color = '#000000' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-item"
      style={{ color }}
    >
      <FontAwesomeIcon icon={icon} className="fa-icon" />
      <span className="btn-text" style={{ '--link-color': color } as React.CSSProperties}>
        {label}
      </span>
    </a>
  );
};

export default LinkItem;
