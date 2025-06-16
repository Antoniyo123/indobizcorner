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

  const handleSearch = () => {
    setIsSearching(true);
    setHasSearched(true);
    setTimeout(() => {
      let results = visaServices;
  
      if (selectedCountry)
        results = results.filter(s => s.country.toLowerCase() === selectedCountry.toLowerCase());
  
      if (selectedVisaType)
        results = results.filter(s => s.visaType.toLowerCase() === selectedVisaType.toLowerCase());
  
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        results = results.filter(
          s =>
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            s.countryName.toLowerCase().includes(q)
        );
      }
  
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  };
  
  

  return (
    <div className="visa-service-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🌍 Visa Service Indonesia</h1>
          <p className="hero-subtitle">Layanan visa terpercaya untuk perjalanan impian Anda</p>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-number">10,000+</span><span className="stat-label">Visa Diproses</span></div>
            <div className="stat-item"><span className="stat-number">95%</span><span className="stat-label">Tingkat Keberhasilan</span></div>
            <div className="stat-item"><span className="stat-number">50+</span><span className="stat-label">Negara Tujuan</span></div>
          </div>
        </div>
      </div>
      <SearchForm {...{ searchQuery, setSearchQuery, selectedCountry, setSelectedCountry, selectedVisaType, setSelectedVisaType, onSearch: handleSearch, onReset: () => { setSearchQuery(''); setSelectedCountry(''); setSelectedVisaType(''); setSearchResults([]); setHasSearched(false); }, isSearching, hasSearched }} />
      {hasSearched && (
        <div className="search-results">
          <div className="results-header">
            <h2 className="results-title">
            {isSearching
  ? 'Mencari layanan visa terbaik...'
  : `${searchResults?.length || 0} Layanan Visa Tersedia`}

            </h2>
          </div>
          {!isSearching && searchResults.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">😔</div>
              <h3>Tidak ada layanan visa yang ditemukan</h3>
              <button className="contact-btn" onClick={() => alert('Hubungi kami di WhatsApp: +62 812-3456-7890')}>📞 Hubungi Konsultan</button>
            </div>
          )}
          <div className="visa-grid-modern">
            {searchResults.map(service => (
              <VisaServiceCard key={service.id} service={service} onOpenInfo={(s) => setInfoModal({ isOpen: true, service: s })} onOpenApply={(s) => setApplyModal({ isOpen: true, service: s })} />
            ))}
          </div>
        </div>
      )}
      <InfoModal service={infoModal.service} isOpen={infoModal.isOpen} onClose={() => setInfoModal({ isOpen: false, service: null })} />
      <ApplyModal service={applyModal.service} isOpen={applyModal.isOpen} onClose={() => setApplyModal({ isOpen: false, service: null })} />
    </div>
  );
}
