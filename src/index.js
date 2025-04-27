import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Add Material Icons
const materialIcons = document.createElement('link');
materialIcons.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
materialIcons.rel = 'stylesheet';
document.head.appendChild(materialIcons);



const materialIcons2 = document.createElement('link');
materialIcons2.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css';
materialIcons2.rel = 'stylesheet';
document.head.appendChild(materialIcons2);


const materialIcons3 = document.createElement('link');
materialIcons3.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
materialIcons3.rel = 'stylesheet';
document.head.appendChild(materialIcons3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
