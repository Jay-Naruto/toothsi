import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { render } from "react-dom";
import Thankyou from './components/ThankYou/Thankyou';
import Checkout from './components/Checkout/Checkout';

render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
  
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/thank-you" element={<Thankyou />} />

  </Routes>
</BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
