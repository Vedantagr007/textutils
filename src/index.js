import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './components/About'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/About",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App >
    <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);

reportWebVitals();
