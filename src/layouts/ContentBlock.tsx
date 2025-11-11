import React from 'react';
import { Row, Col } from 'antd';
import '../styles/ContentBlock.css';

interface ContentBlockProps {
  children: React.ReactNode[];
  verticalMargin?: number;
  horizontalMargin?: number;
  padding?: number;
  align?: 'center' | 'top'; // 👈 new prop
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  children,
  verticalMargin = 40,
  horizontalMargin = 0,
  padding = 24,
  align = 'center',
}) => {
  const span = Math.floor(24 / children.length);

  return (
    <div
      className={`content-block-container ${align === 'top' ? 'align-top' : ''}`}
      style={{
        padding: `${verticalMargin}px ${horizontalMargin}px`,
      }}
    >
      <Row gutter={padding} justify="center" align={align === 'top' ? 'top' : 'middle'} wrap>
        {children.map((child, index) => (
          <Col key={index} span={span}>
            <div className="content-block-column">{child}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
};


export default ContentBlock;
