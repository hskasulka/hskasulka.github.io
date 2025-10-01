import { useState } from 'react'
import './App.css'

import HeroSection from './layouts/HeroSection'
import ContentBlock from './layouts/ContentBlock'
import Header from './components/Header'
import ExperienceEntry from './components/ExperienceEntry'

import {Button} from 'antd';

import soe from '@assets/soe.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
      <Button type='primary'>Test</Button>
      <ContentBlock
        verticalMargin={60}
        horizontalMargin={20}
        padding={32}>
        {[
          <div>
            <Header title='Test' stripeColor='#E94E77'></Header>
          </div>,
          <div>
            <Header title='Larger' stripeColor='#1890ff'></Header>
          </div>,
          
          <Header title='Much Longer Title' stripeColor='#52c41a'></Header>,
        ]}
        </ContentBlock>
        <ExperienceEntry
              imageUrl={soe}
              title="Crux Product Design"
              subtext="Mechanical Engineer · 2022 – present"
            >
              <p>· Developed mechanical concepts for machining and injection moulding using Solidworks</p>
              <p>· Utilised ABAQUS CAE for finite element analysis of mechanical parts</p>
              <p>· Evaluated device concept feasibility through rapid prototyping and lab testing</p>
            </ExperienceEntry>
    </>
  )
}

export default App
