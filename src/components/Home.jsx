import React from 'react';
import HeroSection from './Hero1';  // Assuming Hero1 is the HeroSection
import AboutSection from './AboutSection';
import CoreValue from './CoreValue';


function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection />
      <AboutSection/>
      <CoreValue/>

    </div>
  );
}

export default Home;
