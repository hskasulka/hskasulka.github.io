import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import App from './App';
import theme from './theme/theme';
import 'antd/dist/reset.css'; // resets Ant default styles

import GenerativeDrone from '@pages/GenerativeDrone';
import CampGrill from '@pages/CampGrill';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/projects/generative-design-drone" element={<GenerativeDrone/>}/>
          <Route path="/projects/camp-grill" element={<CampGrill/>}/>
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
);
