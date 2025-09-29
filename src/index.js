import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import WebDevelopmentService from './components/WebDevelopmentService';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import SearchEngineOptimization from './components/SearchEngineOptimization';
import PayPerClickMarketing from './components/PayPerClickMarketing';
import EmailMarketing from './components/EmailMarketing';
import AnalyticsDashboard from './AnalyticsDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import ReturnRefund from './components/ReturnRefund';
import PrintCare from './components/print-assist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/WebDevelopmentService" element={<WebDevelopmentService />} />
        <Route path="/SocialMediaMarketing" element={<SocialMediaMarketing />} />
        <Route path="/SearchEngineOptimization" element={<SearchEngineOptimization />} />
        <Route path="/PayPerClickMarketing" element={<PayPerClickMarketing />} />
        <Route path="/EmailMarketing" element={<EmailMarketing />} />
        <Route path="/AnalyticsDashboard" element={<AnalyticsDashboard />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/ReturnRefund" element={<ReturnRefund />} />
        <Route path="/print-assist" element={<PrintCare />} />
        <Route path="*" element={
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
