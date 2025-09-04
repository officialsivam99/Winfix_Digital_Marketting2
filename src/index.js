import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import WebDevelopmentService from './components/WebDevelopmentService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import SearchEngineOptimization from './components/SearchEngineOptimization';
import PayPerClickMarketing from './components/PayPerClickMarketing';
import EmailMarketing from './components/EmailMarketing';
import AnalyticsDashboard from './AnalyticsDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import ReturnRefund from './components/ReturnRefund';


let pages = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/WebDevelopmentService",
    element: <WebDevelopmentService />
  },
  {
    path: "/SocialMediaMarketing",
    element: <SocialMediaMarketing />
  },
  {
    path: "/SearchEngineOptimization",
    element: <SearchEngineOptimization />
  },
  {
    path: "/PayPerClickMarketing",
    element: <PayPerClickMarketing />
  },
  {
    path: "/EmailMarketing",
    element: <EmailMarketing />
  },
  {
    path: "/AnalyticsDashboard",
    element: <AnalyticsDashboard />
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />
  },
  {
    path: "/Terms",
    element: <Terms />
  },
  {
    path: "/ReturnRefund",
    element: <ReturnRefund />
  },
  {
    path: "*",
    element: <div style={{textAlign:'center',padding:'80px 0'}}><h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p></div>
  }
]
const router = createBrowserRouter(pages);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);