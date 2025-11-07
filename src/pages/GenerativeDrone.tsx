import React from 'react';
import { Typography, Image } from 'antd';
import ContentBlock from '@layouts/ContentBlock';
import TitleCard from '@layouts/TitleCard';
import LinkItem from '@components/LinkItem';

import '@styles/ProjectPage.css';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';

import gddTitle from '@assets/gdd/gdd-0.png';
import gdd1 from '@assets/gdd/gdd-1.png';
import gdd2 from '@assets/gdd/gdd-2.png';
import gdd3 from '@assets/gdd/gdd-3.png';
import gdd4 from '@assets/gdd/gdd-4.png';
import gdd5 from '@assets/gdd/gdd-5.png';
import { Link } from 'react-router-dom';

const { Paragraph } = Typography;

const GenerativeDrone: React.FC = () => {
  return (
    <>
      <TitleCard
        title="Generative Design Drone"
        description="A generative-design exploration of an ultralight FPV drone chassis using Fusion 360, load optimization, and additive manufacturing techniques developed in ME 127: Design for Additive Manufacturing."
        imageUrl={gddTitle}
      />

      <div className="project-section text-only">
        <Paragraph className="project-text">
          During my Spring 2025 quarter at Stanford, I had the pleasure of taking ME 127: Design for Additive Manufacturing. A ten week deep dive into the world of 3D printing, its advantages, its limitations and how to design for both using a variety of printing techniques and materials. Over the course of ten weeks, I became not only a very good designer, but also much more proficient in Fusion 360 and the advanced tools it has to offer, such as Parametric Modeling, Finite Element Analysis, Shape Optimization, and Generative Design. For my final project in this class, I decided I wanted to create an organic drone chassis, using these Generative Design and FEA techniques I had been practicing.
        </Paragraph>
      </div>

      <ContentBlock>
        <Image
          src={gdd1}
          alt="Initial inspiration and components"
          preview={false}
          className="project-image"
        />
        <Paragraph className="project-text">
          It started with getting inspiration from those who have done similar projects online, seeing what components they use and beginning to get an idea of what preserves and obstacle regions they defined. Also, before I dove deep into Fusion and began establishing these preserves, I had to select the components that I wanted to use. I was fortunately able to take some spare parts from Stanford’s Flight Club for my project, and worked within the components I had freely available.
        </Paragraph>
      </ContentBlock>

      <ContentBlock>
        <Paragraph className="project-text">
          I used these components to plan out how I was going to establish my preserve and obstacle geometries, sketching these out on my tablet before taking them to CAD, and with my preserves determined, I began to map out the set of load cases I was going to use. These included movement in all the cardinal directions, including some additional “worst case” scenarios including crashes from various angles.
        </Paragraph>
        <Image
          src={gdd2}
          alt="Preserve/obstacle planning and load cases"
          preview={false}
          className="project-image"
        />
      </ContentBlock>

      <ContentBlock>
        <Image
          src={gdd3}
          alt="Fusion 360 generative setup"
          preview={false}
          className="project-image"
        />
        <Paragraph className="project-text">
          With all the planning out of the way, I took to Fusion 360, setup all the geometries I had planned, established preserve/obstacle geometries, and then put in the load cases with forces found from the motor datasheets. I also input custom study materials for the FDM material we had available. Of course in FDM, the yield and tensile strength is not uniform, but it would be intended to use a gyroid infill, which does a pretty good job of homogenizing the strength in all axes.
        </Paragraph>
      </ContentBlock>

      <ContentBlock>
        <Paragraph className="project-text">
          I ran the study and picked through the designs that I thought best fit all my criteria. I ran them back through the same load cases to try to analyze how effective they truly were. Then based off that information, and real world testing, I moved and modified geometries, and reran the study a number of times.
        </Paragraph>
        <Image
          src={gdd4}
          alt="Iteration and testing"
          preview={false}
          className="project-image"
        />
      </ContentBlock>

      <div className="project-section text-only">
        <Paragraph className="project-text">
          I finally arrived at a design I was happy with, and then proceeded to attach the FPV components, and then begin preparing for flight via SpeedyBee BetaFlight. It took a lot of work and some further modification of the chassis, but I finally got it to a place I wanted, and was able to get some sick drone footage!
        </Paragraph>
      </div>

      <div className="project-section image-only">
        <Image
          src={gdd5}
          alt="Final generative drone frame"
          preview={false}
          className="project-image project-image-only"
        />
      </div>

      <div className="project-section text-only">
        <Paragraph className="project-text">
          Overall, this class was wonderful and really began my interests in Additive Manufacturing, fueled even more by my work in the Larson Lab the following summer. Below are the photo essays I produced for the class. I created three other projects throughout my time in the class, a ratcheting wrench, a cable-coiling box, and a bike phone holder. Details about those projects can be found below.
        </Paragraph>
      </div>
        <div className="project-pdf-links">
          <LinkItem
            href="https://drive.google.com/file/d/1JXlZqv2WuS4KlI0bK7baPpHYefQUb6q-/view?usp=sharing"
            icon={faFilePdf}
            label="Design Portfolio"
          />
          <LinkItem
            href="https://drive.google.com/file/d/1bFLIYMzqg2Cj6qF2mh04hfMoo2GR-fkK/view?usp=sharing"
            icon={faFilePdf}
            label="Project 1"
          />
          <LinkItem
            href="https://drive.google.com/file/d/1n71ibnaYScw6SJKWxeJEBkjtaMSYL9Mt/view?usp=sharing"
            icon={faFilePdf}
            label="Projct 2"
          />
          <LinkItem
            href="https://drive.google.com/file/d/1WcuWNWPEr_lDyWMV2q6WF8kD47wjneM0/view?usp=sharing"
            icon={faFilePdf}
            label="Project 3"
          />
          <LinkItem
            href="https://drive.google.com/file/d/1LDOuL4nk1Emhpox3WSxBybmDeXmgNWjz/view?usp=sharing"
            icon={faFilePdf}
            label="Project 4"
          />
      </div>
    </>
  );
};

export default GenerativeDrone;