// src/components/HeroSection.tsx
import React from 'react';
import { Flex, Typography, Space, Button } from 'antd';
import '../styles/HeroSection.css';
import background from '@assets/herobackground.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const { Title, Text } = Typography;

interface HeroSectionProps {
  paddingY?: number; //Vertical padding in pixels
  textOffset?: number; // Percentage offset for text position
  backgroundBrightness?: number; // Background brightness (0 = fully dark overlay, 1 = normal brightness).
  backgroundImage?: string; // Optional background image URL
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = background,
  paddingY = 100,
  textOffset = 0,
  backgroundBrightness = 0.5,
}) => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
    >
      <div
        className="hero-background-overlay"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${1 - backgroundBrightness})`,
        }}
      />
      <Flex
        vertical
        className="hero-text-container"
        style={{
          transform: `translateX(${textOffset}%)`,
          color: 'white',
        }}
        justify="center"
        align="start"
      >
        <Title level={1} className="hero-title">
          Hi there, I'm <span className="highlight-name">Henry</span> 👋🏻
        </Title>
        <Text className="hero-tagline">
          I am a <span className="tag mech">mechanical engineer</span>{' '}
          at <span className="tag stanford">Stanford</span> 
          , passionate about building innovative <span className="tag human">human-centered</span> solutions
        </Text>

        <Space size="large" style={{ marginTop: 20 }}>
            <Button
            type="link"
            href="https://www.linkedin.com/in/henrykasulka/"
            target="_blank"
            size="large"
            style={{ color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}
            icon={<FontAwesomeIcon icon={faLinkedin} className="fa-icon" />}
          >
            <span className="btn-text">LinkedIn</span>
          </Button>
          <Button
            type="link"
            href="https://github.com/hskasulka"
            target="_blank"
            size="large"
            style={{ color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}
            icon={<FontAwesomeIcon icon={faGithub} className="fa-icon" />}
          >
            <span className="btn-text">GitHub</span>
          </Button>
        </Space>
      </Flex>
    </div>
  );
};

export default HeroSection;
