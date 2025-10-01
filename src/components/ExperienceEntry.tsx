// src/components/ExperienceEntry.tsx
import React from 'react';
import '../styles/ExperienceEntry.css';

interface ExperienceEntryProps {
  imageUrl: string;
  title: string;
  subtext: string;
  children?: React.ReactNode;
  imageAlt?: string;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  imageUrl,
  title,
  subtext,
  children,
  imageAlt = '',
}) => {
  return (
    <div className="experience-entry">
      <div className="experience-entry-left">
        <img src={imageUrl} alt={imageAlt || title} className="experience-entry-image" />
      </div>

      <div className="experience-entry-right">
        <div className="experience-entry-title">{title}</div>
        <div className="experience-entry-subtext">{subtext}</div>

        <div className="experience-entry-description">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEntry;
