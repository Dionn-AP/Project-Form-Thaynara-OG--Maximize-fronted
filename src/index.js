import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter tab='index'>
    <MainRoutes tab="index" />
  </BrowserRouter>
);
