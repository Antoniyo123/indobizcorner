// Updated VisaService.js for Indonesia visa services (for foreigners visiting Indonesia)
import React, { useState } from 'react';
import '../styles/VisaService.css';
import visaServices from '../data/visaServices';
import InfoModal from '../components/InfoModal';
import ApplyModal from '../components/ApplyModal';
import SearchForm from '../components/SearchForm';
import VisaServiceCard from '../components/VisaServiceCard';

export default function VisaService() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedVisaType, setSelectedVisaType] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [infoModal, setInfoModal] = useState({ isOpen: false, service: null });
  const [applyModal, setApplyModal] = useState({ isOpen: false, service: null });

  // Fungsi untuk mapping jenis visa dari dropdown ke data
  const mapVisaTypeToData = (selectedType) => {
    const mapping = {
      // Tourist visa mappings
      'tourist': 'tourist',
      'tourist-visit': 'tourist',
      'tourist-multiple': 'tourist',
      
      // Business visa mappings
      'business': 'business',
      'business-visit': 'business',
      'business-multiple': 'business',
      
      // Family visa mappings
      'family': 'family',
      'family-multiple': 'family',
      
      // Medical visa mappings
      'medical': 'medical',
      'medical-long': 'medical',
      
      // Transit visa mappings
      'transit': 'transit',
      'transit-short': 'transit',
      
      // Student visa mappings
      'student': 'student',
      'student-exchange': 'student',
      
      // Work visa mappings
      'work': 'work',
      'work-skilled': 'work'
    };
    
    return mapping[selectedType] || selectedType;
  };

  const handleSearch = () => {
    setIsSearching(true);
    setHasSearched(true);
    
    setTimeout(() => {
      let results = [...visaServices]; // Create a copy of the original data

      console.log('Search filters:', {
        selectedCountry,
        selectedVisaType,
        searchQuery,
        totalServices: results.length
      });

      // Note: Since all our visaServices are for Indonesia, we don't filter by destination country
      // Instead, we could filter by origin country if we had that data field
      
      // Filter berdasarkan jenis visa
      if (selectedVisaType) {
        const mappedVisaType = mapVisaTypeToData(selectedVisaType);
        results = results.filter(service => {
          const matchVisaType = service.visaType.toLowerCase() === mappedVisaType.toLowerCase();
          console.log(`Visa type filter: ${service.visaType} === ${mappedVisaType}? ${matchVisaType}`);
          return matchVisaType;
        });
        console.log(`After visa type filter: ${results.length} results`);
      }

      // Filter berdasarkan pencarian teks
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        results = results.filter(service => {
          const matchTitle = service.title?.toLowerCase().includes(query);
          const matchDescription = service.description?.toLowerCase().includes(query);
          const matchVisaType = service.visaType?.toLowerCase().includes(query);
          
          // Search in allowed activities
          const matchActivities = service.allowedActivities?.some(activity => 
            activity.toLowerCase().includes(query)
          );
          
          // Special search for Indonesia visa terms
          const matchIndonesiaTerms = query.includes('voa') || query.includes('visa on arrival') || 
                                     query.includes('b1') || query.includes('b211') ||
                                     query.includes('tourist') || query.includes('business') ||
                                     query.includes('medical') || query.includes('transit');
          
          const isMatch = matchTitle || matchDescription || matchVisaType || matchActivities || matchIndonesiaTerms;
          console.log(`Text search for "${query}": ${service.title} matches? ${isMatch}`);
          return isMatch;
        });
        console.log(`After text search: ${results.length} results`);
      }

      // Sort results: prioritize Visa on Arrival first, then by popularity
      results.sort((a, b) => {
        // Prioritize VOA
        if (a.title.includes('Visa on Arrival') && !b.title.includes('Visa on Arrival')) return -1;
        if (!a.title.includes('Visa on Arrival') && b.title.includes('Visa on Arrival')) return 1;
        
        // Then sort by success rate (higher first)
        const successRateA = parseInt(a.success_rate?.replace('%', '') || '0');
        const successRateB = parseInt(b.success_rate?.replace('%', '') || '0');
        return successRateB - successRateA;
      });

      console.log('Final search results:', results);
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCountry('');
    setSelectedVisaType('');
    setSearchResults([]);
    setHasSearched(false);
  };

  // Show featured services when no search has been performed
  const getFeaturedServices = () => {
    // Prioritize most popular visa types for Indonesia
    const featured = visaServices.filter(service => 
      service.visaType === 'tourist' || service.visaType === 'business' || service.visaType === 'transit'
    );
    return featured.length > 0 ? featured : visaServices.slice(0, 6);
  };

  return (
    <div className="visa-service-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🇮🇩 Indonesia Visa Services</h1>
          <p className="hero-subtitle">Professional visa assistance for visiting Indonesia - Fast, reliable, and hassle-free</p>
          {/* <div className="hero-stats">
            <div className="stat-item"><span className="stat-number">15,000+</span><span className="stat-label">Visas Processed</span></div>
            <div className="stat-item"><span className="stat-number">98%</span><span className="stat-label">Success Rate</span></div>
            <div className="stat-item"><span className="stat-number">24/7</span><span className="stat-label">Support Available</span></div>
          </div> */}
        </div>
      </div>
      
      <SearchForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedVisaType={selectedVisaType}
        setSelectedVisaType={setSelectedVisaType}
        onSearch={handleSearch}
        onReset={handleReset}
        isSearching={isSearching}
        hasSearched={hasSearched}
      />
      
      {/* Show featured services when no search performed */}
      {!hasSearched && (
        <div className="featured-services">
          <div className="results-header">
            <h2 className="results-title">✨ Popular Indonesia Visa Services</h2>
            <p className="results-subtitle">Most requested visa types for visiting Indonesia</p>
          </div>
          <div className="visa-grid-modern">
            {getFeaturedServices().map(service => (
              <VisaServiceCard 
                key={service.id} 
                service={service} 
                onOpenInfo={(s) => setInfoModal({ isOpen: true, service: s })} 
                onOpenApply={(s) => setApplyModal({ isOpen: true, service: s })} 
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Show search results */}
      {hasSearched && (
        <div className="search-results">
          <div className="results-header">
            <h2 className="results-title">
              {isSearching
                ? 'Finding the perfect Indonesia visa for you...'
                : `${searchResults?.length || 0} Indonesia Visa Options Available`}
            </h2>
            {!isSearching && searchResults.length > 0 && (
              <div className="search-summary">
                {selectedCountry && <span className="filter-tag">🌍 From: {selectedCountry}</span>}
                {selectedVisaType && <span className="filter-tag">📋 Type: {selectedVisaType}</span>}
                {searchQuery && <span className="filter-tag">🔍 "{searchQuery}"</span>}
              </div>
            )}
          </div>
          
          {!isSearching && searchResults.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">😔</div>
              <h3>No Indonesia visa services found</h3>
              <p>Try adjusting your search filters or contact our visa consultants for personalized assistance</p>
              <button className="contact-btn" onClick={() => alert('Contact us on WhatsApp: +62 812-3456-7890')}>
                📞 Contact Visa Consultant
              </button>
            </div>
          )}
          
          <div className="visa-grid-modern">
            {searchResults.map(service => (
              <VisaServiceCard 
                key={service.id} 
                service={service} 
                onOpenInfo={(s) => setInfoModal({ isOpen: true, service: s })} 
                onOpenApply={(s) => setApplyModal({ isOpen: true, service: s })} 
              />
            ))}
          </div>
        </div>
      )}
      
      <InfoModal 
        service={infoModal.service} 
        isOpen={infoModal.isOpen} 
        onClose={() => setInfoModal({ isOpen: false, service: null })} 
      />
      <ApplyModal 
        service={applyModal.service} 
        isOpen={applyModal.isOpen} 
        onClose={() => setApplyModal({ isOpen: false, service: null })} 
      />
    </div>
  );
}