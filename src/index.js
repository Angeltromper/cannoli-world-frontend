<<<<<<< HEAD
export { default as Product } from '../product/Product';
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import CannoliContextProvider from "./context/CannoliContext";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
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
>>>>>>> c83920548427fc702a209e27b3a5f2e767c34712
