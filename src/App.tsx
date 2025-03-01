import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;