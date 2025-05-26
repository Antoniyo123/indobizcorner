import React, { useState } from 'react';
import '../styles/About.css';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to next section function
  const scrollToNextSection = () => {
    const missionSection = document.querySelector('.aboutus-mission-section');
    if (missionSection) {
      missionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Creative Director",
      image: require('../assets/img/profile3.jpg'),
      bio: "Sarah brings over 8 years of experience in creative direction and brand strategy. She has worked with Fortune 500 companies and startups alike, helping them build compelling visual narratives.",
      experience: "8+ years",
      education: "Master's in Visual Design from Art Institute",
      skills: ["Brand Strategy", "Creative Direction", "Visual Identity", "Team Leadership"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Lead Developer",
      image: require('../assets/img/profile.jpg'),
      bio: "Michael is a full-stack developer with expertise in modern web technologies. He leads our development team and ensures all projects meet the highest technical standards.",
      experience: "6+ years",
      education: "Bachelor's in Computer Science from MIT",
      skills: ["React", "Node.js", "Python", "Cloud Architecture"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "UX Designer",
      image: require('../assets/img/profile1.jpg'),
      bio: "Emma specializes in user experience design and human-computer interaction. She's passionate about creating intuitive and accessible digital experiences.",
      experience: "5+ years",
      education: "Master's in HCI from Stanford University",
      skills: ["User Research", "Prototyping", "Interaction Design", "Accessibility"]
    },
    {
      id: 4,
      name: "David Kim",
      position: "Product Manager",
      image: require('../assets/img/profile2.jpg'),
      bio: "David oversees product strategy and development lifecycle. He bridges the gap between technical teams and business objectives to deliver successful products.",
      experience: "7+ years",
      education: "MBA from Harvard Business School",
      skills: ["Product Strategy", "Agile Management", "Market Analysis", "Stakeholder Management"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Brand Strategist",
      image: require('../assets/img/profile3.jpg'),
      bio: "Lisa develops comprehensive brand strategies that resonate with target audiences. She combines market research with creative insights to build strong brand identities.",
      experience: "6+ years",
      education: "Master's in Marketing from Northwestern",
      skills: ["Brand Development", "Market Research", "Content Strategy", "Social Media"]
    },
    {
      id: 6,
      name: "Alex Miller",
      position: "Full Stack Developer",
      image: require('../assets/img/profile5.jpg'),
      bio: "Alex is skilled in both frontend and backend development. He enjoys solving complex technical challenges and building scalable web applications.",
      experience: "4+ years",
      education: "Bachelor's in Software Engineering",
      skills: ["JavaScript", "React", "Express.js", "Database Design"]
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target.classList.contains('aboutus-modal-overlay')) {
      closeModal();
    }
  };

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
          
          <div className="aboutus-hero-image">
            <img src={require('../assets/img/pexels-timmossholder-1722196.jpg')} alt="Our creative workspace" />
          </div>
          
          <div className="aboutus-scroll-indicator">
            <div className="aboutus-scroll-circle" onClick={scrollToNextSection}>
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
            <div 
              key={member.id} 
              className="aboutus-team-member"
              onClick={() => openModal(member)}
            >
              <div className="aboutus-member-image">
                <img src={member.image} alt={member.name} />
                <div className="aboutus-member-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="aboutus-member-info">
                <h3 className="aboutus-member-name">{member.name}</h3>
                <p className="aboutus-member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="aboutus-modal-overlay" onClick={handleModalClick}>
          <div className="aboutus-modal-content">
            <button className="aboutus-modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="aboutus-modal-header">
              <div className="aboutus-modal-image">
                <img src={selectedMember.image} alt={selectedMember.name} />
              </div>
              <div className="aboutus-modal-info">
                <h2 className="aboutus-modal-name">{selectedMember.name}</h2>
                <p className="aboutus-modal-position">{selectedMember.position}</p>
                <p className="aboutus-modal-experience">Experience: {selectedMember.experience}</p>
              </div>
            </div>

            <div className="aboutus-modal-body">
              <div className="aboutus-modal-section">
                <h3>About</h3>
                <p>{selectedMember.bio}</p>
              </div>

              <div className="aboutus-modal-section">
                <h3>Education</h3>
                <p>{selectedMember.education}</p>
              </div>

              <div className="aboutus-modal-section">
                <h3>Skills & Expertise</h3>
                <div className="aboutus-modal-skills">
                  {selectedMember.skills.map((skill, index) => (
                    <span key={index} className="aboutus-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;