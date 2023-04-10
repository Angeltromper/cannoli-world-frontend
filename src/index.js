import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CannoliContextProvider from "./context/CannoliContext";
import AuthContextProvider from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(
  <React.StrictMode>
      <Router>
          <AuthContextProvider>
              <CannoliContextProvider>
                  <App />
              </CannoliContextProvider>
          </AuthContextProvider>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
