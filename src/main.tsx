import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import ToTop from '@utilities/ToTop';

import App from './App';
import theme from './theme/theme';
import 'antd/dist/reset.css'; // resets Ant default styles

import GenerativeDrone from '@pages/GenerativeDrone';
import CampGrill from '@pages/CampGrill';
import ModelOfTheHeavens from '@pages/ModelOfTheHeavens';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Router>
        <ToTop/>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/projects/generative-design-drone" element={<GenerativeDrone/>}/>
          <Route path="/projects/camp-grill" element={<CampGrill/>}/>
          <Route path="/projects/model-of-the-heavens" element={<ModelOfTheHeavens/>}/>
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
);
