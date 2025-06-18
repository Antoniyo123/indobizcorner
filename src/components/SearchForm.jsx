import React from 'react';
import '../styles/VisaService.css';

const SearchForm = ({ searchQuery, setSearchQuery, selectedCountry, setSelectedCountry, selectedVisaType, setSelectedVisaType, onSearch, onReset, isSearching, hasSearched }) => {
  const countries = [
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'philippines', label: 'Filipina' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'india', label: 'India' },
    { value: 'china', label: 'China' }
  ];

  const visaPurposes = [
    { value: 'tourist', label: 'Wisata/Turis' },
    { value: 'business', label: 'Bisnis' },
    { value: 'work', label: 'Bekerja' },
    { value: 'study', label: 'Belajar/Pendidikan' },
    { value: 'family', label: 'Keluarga' },
    { value: 'transit', label: 'Transit' }
  ];

  const getVisaTypes = (purpose) => {
    const visaTypesByPurpose = {
      tourist: [
        { value: 'tourist-single', label: 'Visa Turis Single Entry' },
        { value: 'tourist-multiple', label: 'Visa Turis Multiple Entry' }
      ],
      business: [
        { value: 'business-single', label: 'Visa Bisnis Single Entry' },
        { value: 'business-multiple', label: 'Visa Bisnis Multiple Entry' }
      ],
      work: [
        { value: 'work-permit', label: 'Visa Kerja/Work Permit' },
        { value: 'work-temp', label: 'Visa Kerja Sementara' }
      ],
      study: [
        { value: 'student', label: 'Visa Pelajar' },
        { value: 'exchange', label: 'Visa Pertukaran Pelajar' }
      ],
      family: [
        { value: 'family-visit', label: 'Visa Kunjungan Keluarga' },
        { value: 'spouse', label: 'Visa Pasangan' }
      ],
      transit: [
        { value: 'transit-short', label: 'Visa Transit Pendek' },
        { value: 'transit-long', label: 'Visa Transit Panjang' }
      ]
    };
    return visaTypesByPurpose[purpose] || [];
  };

  const [selectedPurpose, setSelectedPurpose] = React.useState('');
  const [availableVisaTypes, setAvailableVisaTypes] = React.useState([]);

  const handlePurposeChange = (e) => {
    const purpose = e.target.value;
    setSelectedPurpose(purpose);
    setAvailableVisaTypes(getVisaTypes(purpose));
    setSelectedVisaType(''); // Reset visa type when purpose changes
  };

  return (
    <div className="search-form-container">
      <div className="search-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">🌍 Negara Asal</label>
            <select 
              id="country" 
              className="form-control"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Pilih Negara Asal</option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="visaPurpose">🎯 Tujuan Pembuatan Visa</label>
            <select 
              id="visaPurpose" 
              className="form-control"
              value={selectedPurpose}
              onChange={handlePurposeChange}
            >
              <option value="">Pilih Tujuan</option>
              {visaPurposes.map(purpose => (
                <option key={purpose.value} value={purpose.value}>
                  {purpose.label}
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
              disabled={!selectedPurpose}
            >
              <option value="">
                {selectedPurpose ? 'Pilih Jenis Visa' : 'Pilih tujuan terlebih dahulu'}
              </option>
              {availableVisaTypes.map(visa => (
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