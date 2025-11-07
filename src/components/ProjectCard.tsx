import React from 'react';
import { Typography, Button } from 'antd';
import '../styles/ProjectCard.css';
import {Link} from 'react-router-dom';

const { Title, Paragraph } = Typography;

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  width?: string;
  height?: string;
  darkOverlay?: number;
  borderRadius?: number;
  buttonText?: string;
  link?: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description = '',
  width = '320px',
  height = '200px',
  darkOverlay = 0.4,
  borderRadius = 12,
  buttonText = 'View',
  link,
}) => {
  return (
    <div
      className="project-card"
      style={{
        width,
        height,
        borderRadius,
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
          <Link to={link ?? '#'} style={{textDecoration: 'none'}}>
            <Button
              className="project-card-button"
              type="default"
              ghost
              size="middle"
              href={link}
              target={link ? "_blank" : undefined}
              disabled={!link}
            >
              {buttonText}
            </Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
