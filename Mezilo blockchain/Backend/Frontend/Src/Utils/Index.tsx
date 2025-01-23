// frontend/src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your styles
import App from './App';

// Render the App component inside the div with id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
