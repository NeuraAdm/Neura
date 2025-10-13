import { ThemeProvider } from './contexts/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/ServicesNew';
import Products from './components/ProductsNew';
import About from './components/About';
import TechStack from './components/TechStack';
import Team from './components/TeamNew';
import Process from './components/Process';
import Testimonials from './components/TestimonialsNew';
import Contact from './components/ContactNew';
import Footer from './components/FooterNew';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <SEOHead />
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Products />
        <TechStack />
        <Team />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;