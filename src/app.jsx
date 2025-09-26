import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx'; // Import the layout

// Import your actual page components
import Home from './pages/home.jsx';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;