import { useState } from 'react'
import { theme } from 'antd'
import './App.css'

import HeroSection from './layouts/HeroSection'
import ContentBlock from './layouts/ContentBlock'
import Header from './components/Header'
import ExperienceEntry from './components/ExperienceEntry'
import ProjectCard from './components/ProjectCard'

import {Button} from 'antd';
import {Typography} from 'antd'
const {Text, Title} = Typography;

import soe from '@assets/soe_jpg.jpg';
import vm from '@assets/vm_png.png';
import stanford from '@assets/stanford_png.png'
import norwich from '@assets/norwich_png.png'
import background from '@assets/herobackground.png';

import daftpunk from '@assets/daftpunk.jpg';
import nozzle from '@assets/nozzle.jpg';
import campgrill from '@assets/campgrill.png';
import generativefpv from '@assets/generativefpv.png';
import planets from '@assets/planets.png';
import diffswerve from '@assets/diffswerve.png';

function App() {
  const [count, setCount] = useState(0)
  const { token } = theme.useToken();
  return (
    <>
      <HeroSection/>
      <ContentBlock
        verticalMargin={60}
        horizontalMargin={100}
        padding={32}>
        {[
          <div>
            <Header title='About Me' stripeColor={token.colorPrimary}></Header>
            <Text style={{textAlign: 'left', display: 'block'}}>
              I’m an engineer, maker, and problem-solver passionate about designing technology that improves lives. At Stanford, I study Mechanical Engineering and Electrical Engineering and have extensive experience in robotics, product design, and manufacturing. I’m interested in using my background to drive innovation in human-centered robotics and MedTech. These are areas I’ve been able to explore through the Stanford Biodesign Center and my research in additive manufacturing with the Larson Lab.

              I’m a maker at heart; always working on new side projects, and I’m passionate about helping others bring their ideas to life. I also love the outdoors: I’m a leader in the Trip Leader community, the resident assistant for the Outdoor House, and can usually be found outside camping, backpacking, mountaineering, running or more!
            </Text>
          </div>,
          <div>
            <Header title='Featured Experience' stripeColor={token.colorSuccess}></Header>
            <ExperienceEntry
              imageUrl={soe}
              title="Undergraduate Researcher · The Larson Lab"
              subtext="Mar 2025 - Present · Stanford Department of Mechanical Engineering"
            >
            </ExperienceEntry>
            <ExperienceEntry
              imageUrl={vm}
              title="IT Development Intern"
              subtext="Jun 2023 - Aug 2023 · Vermont Mutual Insurance Group"
            >
            </ExperienceEntry>
            <ExperienceEntry
              imageUrl={stanford}
              title="Resident Assistant"
              subtext="Sep 2025 - Present · Stanford University"
            >
            </ExperienceEntry>
          </div>,
          <div>
            <Header title='Education' stripeColor={token.colorError}></Header>
            <ExperienceEntry
              imageUrl={stanford}
              title="Stanford University"
              subtext="2023 - Present · B.S. Mechanical Engineering, Min. Electrical Engineering"
            >
            </ExperienceEntry>
            <ExperienceEntry
              imageUrl={norwich}
              title="Norwich University"
              subtext="2022 - 2023 · Vermont Early College Program"
            >
            </ExperienceEntry>
          </div>
        ]}
        </ContentBlock>
        <Title level={4}>Projects</Title>
        <div style={{padding: "20px"}}>
          <ProjectCard
                imageUrl={daftpunk}
                title="Daft Punk Helmets"
                description="3D printed helmets, primed and sanded to a mirror finish with Arduino intergration"/>
              <ProjectCard
                imageUrl={nozzle}
                title="Microfluidic Nozzles"
                description="Using SLA printing to create microfluidic devices for bioprinting"/>
              <ProjectCard
                imageUrl={generativefpv}
                title="Generative FPV Drone"
                description="Experimenting with Fusion's Generative Desing to create a custom drone chassis"/>
        </div>
        <div>
          <ProjectCard
                imageUrl={campgrill}
                title="Camp Grill"
                description="Designing, prototyping, and using manual machining to mill and turn a portable Camp Grill"/>
              <ProjectCard
                imageUrl={planets}
                title="Model of the Heavens"
                description="Understanding and combining mechanisms to create a complex, moving model of the solar system"/>
              <ProjectCard
                imageUrl={diffswerve}
                title="Differential Swerve"
                description="Making custom differentials to create slipless, strafing movement for robotics"/>
        </div>
      </>
        
  )
}

export default App
