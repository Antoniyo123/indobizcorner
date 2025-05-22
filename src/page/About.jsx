import React from 'react';
import '../styles/About.css';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Creative Director",
      image: require('../assets/img/profile3.jpg') // Memuat gambar Sarah
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Lead Developer",
      image: require('../assets/img/profile.jpg') // Memuat gambar Michael
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "UX Designer",
      image: require('../assets/img/profile1.jpg') // Memuat gambar Emma
    },
    {
      id: 4,
      name: "David Kim",
      position: "Product Manager",
      image: require('../assets/img/profile2.jpg') // Memuat gambar David
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Brand Strategist",
      image: require('../assets/img/profile3.jpg') // Memuat gambar Lisa
    },
    {
      id: 6,
      name: "Alex Miller",
      position: "Full Stack Developer",
      image: require('../assets/img/profile5.jpg') // Memuat gambar Alex
    }
  ];
  

  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="aboutus-hero-section">
        <div className="aboutus-hero-content">
          <div className="aboutus-hero-text">
            <h1 className="aboutus-hero-title">About our Company.</h1>
            <div className="aboutus-hero-description">
              <p>
                Based in the vibrant heart of Jakarta, Bali, Kreativy is not just a Visa Service agent 
                we're your partners in creativity.
              </p>
            </div>
          </div>
          <div className="aboutus-scroll-indicator">
            <div className="aboutus-scroll-circle">
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="aboutus-mission-section">
        <div className="aboutus-mission-content">
          <p className="aboutus-mission-text">
            Our mission is to turn your dreams into reality, one pixel at a time. With 
            a diverse team of designers, developers, and innovators, we're 
            constantly pushing the boundaries of what's possible in the digital 
            world.
          </p>
        </div>
      </section>

      {/* Office Images Section */}
      <section className="aboutus-office-section">
        <div className="aboutus-office-images">
          <div className="aboutus-office-image aboutus-office-wide">
            <img src={require('../assets/img/pexels-timmossholder-1722196.jpg')} alt="Office workspace with large windows" />
          </div>
          <div className="aboutus-office-image aboutus-office-square">
            <img src={require('../assets/img/pexels-timmossholder-1722196.jpg')} alt="Team collaboration meeting" />
          </div>
          <div className="aboutus-office-image aboutus-office-tall">
            <img src={require('../assets/img/pexels-vlad-alexandru-popa-1402787.jpg')} alt="Modern office interior" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="aboutus-vision-section">
        <div className="aboutus-vision-content">
          <h2 className="aboutus-vision-title">
            Founded with a vision to redefine design through a modern and friendly lens, we've 
            become more than just a design agency; we're a community of kindred spirits who share a
          </h2>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="aboutus-team-section">
        <div className="aboutus-team-header">
          <h2 className="aboutus-team-title">Our Team</h2>
          <p className="aboutus-team-description">
            Meet the creative minds behind our success. Our diverse team of talented professionals 
            brings together years of experience and fresh perspectives to deliver exceptional results.
          </p>
        </div>
        
        <div className="aboutus-team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="aboutus-team-member">
              <div className="aboutus-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="aboutus-member-info">
                <h3 className="aboutus-member-name">{member.name}</h3>
                <p className="aboutus-member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
