import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

import Services from './pages/services';
import Pagenotfound from './pages/pagenotfound';
import "bootstrap/dist/css/bootstrap.min.css";


let pages = [
  {
    path: "/",
    element: <App />,
    errorElement: <Pagenotfound />,
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/pagenotfound",
    element: <Pagenotfound />
  }
]
const router = createBrowserRouter(pages);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);