import React from 'react';
import HeroSection from './Hero1';  // Assuming Hero1 is the HeroSection
import AboutSection from './AboutSection';
import CoreValue from './CoreValue';
import Testimonial from './Testimonials';
import Articles from './Article';


function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection />
      <AboutSection/>
      <CoreValue/>
      <Articles/>
      <Testimonial/>
    </div>
  );
}

export default Home;
