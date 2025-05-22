import './App.css';
import Hero from './components/Hero';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
// import Features from './components/Features'

import Home from './components/Home'
import HeroSection from './components/Hero1';

function App() {
  return (
    <div className="app">
      <Navbar1 />
      {/* <HeroSection/> */}
      <Home/>
      {/* <FeatureCard/> */}
      <Footer />
    </div>
  );
}

export default App;
