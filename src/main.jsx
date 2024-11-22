import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're using this import
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap App with BrowserRouter */}
    <App />
  </BrowserRouter>
);
