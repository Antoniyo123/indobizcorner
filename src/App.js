import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router v6
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServiceSection';
import Footer from './components/Footer';
import About from './page/About';
import Contact from './page/Contact';
import Consultation from './page/Konsultasi';  // Import the new Consultation page

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} /> {/* Homepage Route */}
            <Route path="/services" element={<ServicesSection />} /> {/* Services Route */}
            <Route path="/about" element={<About />} /> {/* About Page Route */}
            <Route path="/contact" element={<Contact />} /> {/* Contact Page Route */}
            <Route path="/consultation" element={<Consultation />} /> {/* Consultation Page Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
