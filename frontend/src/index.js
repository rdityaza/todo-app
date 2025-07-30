import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Kita akan buat file ini juga untuk best practice
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);