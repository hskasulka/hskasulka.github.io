import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/TitleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const { Title, Paragraph } = Typography;

interface TitleCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="title-card">
      <div className="title-card-top">
        <Link to="/" className="back-link">
          <Button type="link" className="back-btn">
            <FontAwesomeIcon icon={faArrowLeft} className="fa-icon" />
            <span className="btn-text">Back to Home</span>
          </Button>
        </Link>
      </div>

      <div className="title-card-content">
        <Title level={1} className="title-card-title">
          {title}
        </Title>
        <Paragraph className="title-card-description">{description}</Paragraph>

        <div className="title-card-image-wrapper">
          <img src={imageUrl} alt={title} className="title-card-image" />
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
