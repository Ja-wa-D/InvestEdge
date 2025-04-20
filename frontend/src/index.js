import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes  , Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/Homepage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import NavBar from './landing_page/NavBar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar />
  <Routes>
    
    <Route path="/" element={<HomePage />} />
    <Route path='/signup' element={<Signup />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path='support' element={<SupportPage />} />
    <Route path='*' element={<NotFound />} />   
    </Routes>   
    <Footer />  
  </BrowserRouter>
);


