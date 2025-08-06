import { useState } from 'react'
import './App.css'

import HeroSection from './layouts/HeroSection'
import ContentBlock from './layouts/ContentBlock'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
      <ContentBlock
        verticalMargin={60}
        horizontalMargin={20}
        padding={32}>
        {[
          <Header title='Test' stripeColor='#E94E77'></Header>,
          <Header title='Larger' stripeColor='#1890ff'></Header>,
          <Header title='Much Longer Title' stripeColor='#52c41a'></Header>,
        ]}
        </ContentBlock>
    </>
  )
}

export default App
