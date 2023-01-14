import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';

import Home from "./pages/landingPage/landingPage"
import Challenge from "./pages/challenge/challenge"
import NotFound from "./pages/notFound/notFound"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/challenge" element={<Challenge/>} />
          <Route path="/notFound" element={<NotFound/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
