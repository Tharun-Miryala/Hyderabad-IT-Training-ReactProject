import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

    // refer "class 12"(time at: 12:50 - 14:00) for below <BrowserRouter>
    
    // errors: when we get this error we have to write below line as <BrowserRouter>
    // Uncaught TypeError: Cannot destructure property 'future' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.
          // OR
    // Uncaught Error: useRoutes() may be used only in the context of a <Router> component.

    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
