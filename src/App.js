// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar'; // Make sure this path is correct
import Home from './components/header/header'; // Make sure this path is correct
import About from './components/about/about'; // Make sure this path is correct
import Portfolio from './components/portfolio/portfolio'; // Make sure this path is correct
import Footer from './components/footer/footer';
import PaymentCalculator from './components/paymentCalculator/paymentCalculator'; // Make sure this path is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
        <Route path="/payment-calculator" element={<PaymentCalculator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
