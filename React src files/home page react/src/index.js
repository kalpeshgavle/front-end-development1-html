import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home'
import Story from './components/Story';
import Slider from './components/Slider';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Home />
    <Story />
    <Slider />
    <Footer />
  </>
);

