import React from 'react';
import { Typography, Button } from 'antd';
import '../styles/ProjectCard.css';

const { Title, Paragraph } = Typography;

interface ProjectCardProps {
  /** Background image URL */
  imageUrl: string;
  /** Project title text */
  title: string;
  /** Project short description (1–2 sentences) */
  description?: string;
  /** Width of the card (default: 320px) */
  width?: string;
  /** Height of the card (default: 200px) */
  height?: string;
  /** Overlay darkness (0–1, default: 0.4) */
  darkOverlay?: number;
  /** Corner radius (default: 12px) */
  borderRadius?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description = '',
  width = '320px',
  height = '200px',
  darkOverlay = 0.4,
  borderRadius = 12,
}) => {
  return (
    <div
      className="project-card"
      style={{
        width,
        height,
        borderRadius,
        padding: "20px"
      }}
    >
      <div
        className="project-card-bg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div
        className="project-card-overlay"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${darkOverlay})`,
        }}
      />

      <div className="project-card-content">
        <Title level={3} className="project-card-title">
          {title}
        </Title>

        <div className="project-card-hover-content">
          {description && (
            <Paragraph className="project-card-description">
              {description}
            </Paragraph>
          )}
          <Button
            className="project-card-button"
            type="default"
            ghost
            size="middle"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
