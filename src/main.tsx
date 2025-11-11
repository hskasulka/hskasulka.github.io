import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import ToTop from '@utilities/ToTop';

import App from './App';
import theme from './theme/theme';
import 'antd/dist/reset.css'; // resets Ant default styles

import MicrofluidicNozzles from '@pages/MicrofluidicNozzles';
import GenerativeDrone from '@pages/GenerativeDrone';
import CampGrill from '@pages/CampGrill';
import ModelOfTheHeavens from '@pages/ModelOfTheHeavens';
import DifferentialSwerve from '@pages/DifferentialSwerve';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Router>
        <ToTop/>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/projects/microfluidic-nozzles" element={<MicrofluidicNozzles/>}/>
          <Route path="/projects/generative-design-drone" element={<GenerativeDrone/>}/>
          <Route path="/projects/camp-grill" element={<CampGrill/>}/>
          <Route path="/projects/model-of-the-heavens" element={<ModelOfTheHeavens/>}/>
          <Route path="/projects/differential-swerve" element={<DifferentialSwerve/>}/>
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
);
