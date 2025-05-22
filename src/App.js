import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing React Router
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './page/About';  // Import about page
import Contact from './page/Contact';  // Import contact page
import Consultation from './page/Konsultasi';  // Import consultation page

function App() {
  return (
    <Router>  {/* Wrapping everything inside BrowserRouter */}
      <div className="app">
        <Navbar1 />  {/* Navbar tetap ada */}
        <main>
          <Routes>  {/* Defining Routes for each path */}
            <Route path="/" element={<Home />} />  {/* Home route */}
            <Route path="/about" element={<About />} />  {/* About route */}
            <Route path="/contact" element={<Contact />} />  {/* Contact route */}
            <Route path="/consultation" element={<Consultation />} />  {/* Consultation route */}
          </Routes>
        </main>
        <Footer />  {/* Footer tetap ada di bawah */}
      </div>
    </Router>
  );
}

export default App;
