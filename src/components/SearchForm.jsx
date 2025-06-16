import React from 'react';
import '../styles/VisaService.css';

const SearchForm = ({ searchQuery, setSearchQuery, selectedCountry, setSelectedCountry, selectedVisaType, setSelectedVisaType, onSearch, onReset, isSearching, hasSearched }) => {
  const countries = [
    { value: 'usa', label: 'Amerika Serikat' },
    { value: 'uk', label: 'Inggris' },
    { value: 'canada', label: 'Kanada' },
    { value: 'australia', label: 'Australia' },
    { value: 'japan', label: 'Jepang' },
    { value: 'korea', label: 'Korea Selatan' },
    { value: 'singapore', label: 'Singapura' }
  ];

  const visaTypes = [
    { value: 'tourist', label: 'Visa Turis/Wisata' },
    { value: 'business', label: 'Visa Bisnis' }
  ];

  return (
    <div className="search-form-container">
      <div className="search-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="searchQuery">🔍 Cari Layanan</label>
            <input 
              type="text" 
              id="searchQuery" 
              className="form-control"
              placeholder="Masukkan negara atau jenis visa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="country">🌍 Negara Tujuan</label>
            <select 
              id="country" 
              className="form-control"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Semua Negara</option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="visaType">📋 Jenis Visa</label>
            <select 
              id="visaType" 
              className="form-control"
              value={selectedVisaType}
              onChange={(e) => setSelectedVisaType(e.target.value)}
            >
              <option value="">Semua Jenis</option>
              {visaTypes.map(visa => (
                <option key={visa.value} value={visa.value}>
                  {visa.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="button-group">
          <button 
            type="button" 
            className={`search-btn ${isSearching ? 'loading' : ''}`}
            disabled={isSearching}
            onClick={onSearch}
          >
            {isSearching ? '⏳ Mencari...' : '🔍 Cari Layanan Visa'}
          </button>
          
          {hasSearched && (
            <button 
              type="button" 
              className="reset-btn"
              onClick={onReset}
            >
              🔄 Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
