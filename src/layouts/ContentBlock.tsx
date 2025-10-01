import React from 'react';
import { Row, Col } from 'antd';
import '../styles/ContentBlock.css';

interface ContentBlockProps {
  children: React.ReactNode[];
  verticalMargin?: number; // px
  horizontalMargin?: number; // px
  padding?: number; // px between columns
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  children,
  verticalMargin = 40,
  horizontalMargin = 0,
  padding = 24,
}) => {
  const span = Math.floor(24 / children.length);

  return (
    <div
      className="content-block-container"
      style={{
        padding: `${verticalMargin}px ${horizontalMargin}px`,
      }}
    >
      <Row
        gutter={padding}
        justify="center"
        align="top"
        wrap
      >
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
