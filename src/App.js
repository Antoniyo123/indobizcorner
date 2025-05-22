import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './page/About';
import Contact from './page/Contact';
import Consultation from './page/Konsultasi';
import PermanentResidence from './page/PermanentResidence'; // Halaman Permanent Residence
import TemporaryStay from './page/Kitas'; // Halaman Temporary Stay
import InternationalVisa from './page/InternationalVisa'; // Halaman International Visa
import AdditionalServices from './page/AdditionalVisaService'; // Halaman Additional Services
import Tracking from './page/Tracking'; // Halaman Tracking

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar1 />
        <main>
          <Routes>
          {/* <Route path="/visa-services" element={<VisaServices />} /> */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/permanent-residence" element={<PermanentResidence />} />
            <Route path="/temporary-stay" element={<TemporaryStay />} />
            <Route path="/international-visa" element={<InternationalVisa />} />
            <Route path="/additional-services" element={<AdditionalServices />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
