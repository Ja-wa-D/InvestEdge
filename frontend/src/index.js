import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/Homepage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import NewsPage from './landing_page/LiveNews/NewsPage';
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/Login';
import NavBar from './landing_page/NavBar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Dashboard from './dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route
        path="*"
        element={
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path='support' element={<SupportPage />} />
              <Route path='*' element={<NotFound />} />   
            </Routes>   
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
