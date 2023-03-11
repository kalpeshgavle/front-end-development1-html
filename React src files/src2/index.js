import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Gallary from './Gallary';
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header />
);
const gallary = ReactDOM.createRoot(document.getElementById('gallary'));
gallary.render(
  <Gallary />
);
const Footer1 = ReactDOM.createRoot(document.getElementById('footer'));
Footer1.render(
  <Footer />
);