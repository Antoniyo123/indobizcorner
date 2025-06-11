import { useState } from 'react';

// Data layanan visa
const visaServices = [
  {
    id: 1,
    country: 'usa',
    visaType: 'tourist',
    title: 'Visa Turis Amerika Serikat (B1/B2)',
    description: 'Layanan visa turis untuk perjalanan wisata ke USA dengan proses cepat dan mudah',
    price: 'Rp 2.500.000',
    processingTime: '7-14 hari',
    requirements: ['Paspor valid', 'Foto 5x5', 'Bukti keuangan', 'Itinerary'],
    success_rate: '95%'
  },
  {
    id: 2,
    country: 'usa',
    visaType: 'business',
    title: 'Visa Bisnis Amerika Serikat (B1)',
    description: 'Visa bisnis untuk meeting, konferensi, dan aktivitas bisnis di USA',
    price: 'Rp 3.000.000',
    processingTime: '10-21 hari',
    requirements: ['Paspor valid', 'Surat undangan', 'Surat keterangan kerja'],
    success_rate: '90%'
  },
  {
    id: 3,
    country: 'uk',
    visaType: 'tourist',
    title: 'Visa Turis Inggris (Standard Visitor)',
    description: 'Visa turis untuk berlibur ke Inggris hingga 6 bulan',
    price: 'Rp 2.200.000',
    processingTime: '15-21 hari',
    requirements: ['Paspor valid', 'Foto biometrik', 'Bukti akomodasi'],
    success_rate: '92%'
  },
  {
    id: 4,
    country: 'japan',
    visaType: 'tourist',
    title: 'Visa Turis Jepang (Temporary Visitor)',
    description: 'Visa turis untuk wisata ke Jepang hingga 30 hari',
    price: 'Rp 800.000',
    processingTime: '5-7 hari',
    requirements: ['Paspor valid', 'Foto 4.5x4.5', 'Tiket pesawat'],
    success_rate: '98%'
  },
  {
    id: 5,
    country: 'australia',
    visaType: 'tourist',
    title: 'Visa Turis Australia (Visitor 600)',
    description: 'Electronic visa untuk berlibur ke Australia hingga 12 bulan',
    price: 'Rp 1.800.000',
    processingTime: '5-10 hari',
    requirements: ['Paspor valid', 'Foto digital', 'Bukti keuangan'],
    success_rate: '96%'
  },
  {
    id: 6,
    country: 'singapore',
    visaType: 'business',
    title: 'Visa Bisnis Singapura',
    description: 'Visa bisnis untuk aktivitas komersial di Singapura',
    price: 'Rp 600.000',
    processingTime: '3-5 hari',
    requirements: ['Paspor valid', 'Surat sponsor', 'Form aplikasi'],
    success_rate: '99%'
  }
];

// Komponen untuk setiap layanan visa
const VisaServiceCard = ({ service, onSelect }) => (
  <div style={styles.serviceCard}>
    <div style={styles.serviceHeader}>
      <h3 style={styles.serviceTitle}>{service.title}</h3>
      <div style={styles.successRate}>✅ {service.success_rate} berhasil</div>
    </div>
    
    <p style={styles.serviceDescription}>{service.description}</p>
    
    <div style={styles.serviceInfo}>
      <div style={styles.infoItem}>
        <span style={styles.infoLabel}>💰 Harga:</span>
        <span style={styles.infoValue}>{service.price}</span>
      </div>
      <div style={styles.infoItem}>
        <span style={styles.infoLabel}>⏱️ Proses:</span>
        <span style={styles.infoValue}>{service.processingTime}</span>
      </div>
    </div>
    
    <div style={styles.requirements}>
      <h4 style={styles.requirementsTitle}>📋 Persyaratan:</h4>
      <ul style={styles.requirementsList}>
        {service.requirements.map((req, index) => (
          <li key={index} style={styles.requirementItem}>{req}</li>
        ))}
      </ul>
    </div>
    
    <button 
      style={styles.selectButton}
      onClick={() => onSelect(service)}
    >
      Pilih Layanan Ini
    </button>
  </div>
);

// Komponen utama
export default function VisaService() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedVisaType, setSelectedVisaType] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const countries = [
    { value: 'usa', label: 'Amerika Serikat' },
    { value: 'uk', label: 'Inggris' },
    { value: 'canada', label: 'Kanada' },
    { value: 'australia', label: 'Australia' },
    { value: 'japan', label: 'Jepang' },
    { value: 'korea', label: 'Korea Selatan' },
    { value: 'singapore', label: 'Singapura' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'vietnam', label: 'Vietnam' }
  ];

  const visaTypes = [
    { value: 'tourist', label: 'Visa Turis/Wisata' },
    { value: 'business', label: 'Visa Bisnis' },
    { value: 'student', label: 'Visa Pelajar' },
    { value: 'work', label: 'Visa Kerja' },
    { value: 'transit', label: 'Visa Transit' },
    { value: 'family', label: 'Visa Keluarga' }
  ];

  const handleSearch = () => {
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulasi pencarian
    setTimeout(() => {
      let filtered = visaServices;
      
      // Filter berdasarkan negara
      if (selectedCountry) {
        filtered = filtered.filter(service => service.country === selectedCountry);
      }
      
      // Filter berdasarkan jenis visa
      if (selectedVisaType) {
        filtered = filtered.filter(service => service.visaType === selectedVisaType);
      }
      
      // Filter berdasarkan query pencarian
      if (searchQuery) {
        filtered = filtered.filter(service => 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  const handleSelectService = (service) => {
    alert(`Anda memilih: ${service.title}\n\nSilakan hubungi kami untuk melanjutkan proses aplikasi visa.`);
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSelectedCountry('');
    setSelectedVisaType('');
    setSearchResults([]);
    setHasSearched(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>🌍 Visa Service</h1>
        <p style={styles.headerSubtitle}>Layanan visa terpercaya untuk perjalanan impian Anda</p>
      </div>

      <div style={styles.visaFormContainer}>
        <h2 style={styles.formTitle}>Cari Layanan Visa</h2>
        
        <div style={styles.searchForm}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="searchQuery">
              Cari Destinasi atau Layanan
            </label>
            <input 
              type="text" 
              id="searchQuery" 
              style={styles.formControl}
              placeholder="Masukkan nama negara, kota, atau jenis layanan visa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="country">
              Pilih Negara Tujuan
            </label>
            <select 
              id="country" 
              style={styles.formControl}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">-- Pilih Negara --</option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="visaType">
              Jenis Visa
            </label>
            <select 
              id="visaType" 
              style={styles.formControl}
              value={selectedVisaType}
              onChange={(e) => setSelectedVisaType(e.target.value)}
            >
              <option value="">-- Pilih Jenis Visa --</option>
              {visaTypes.map(visa => (
                <option key={visa.value} value={visa.value}>
                  {visa.label}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.buttonGroup}>
            <button 
              type="button" 
              style={{
                ...styles.searchBtn,
                ...(isSearching ? styles.searchBtnLoading : {})
              }}
              disabled={isSearching}
              onClick={handleSearch}
            >
              {isSearching ? '⏳ Mencari...' : '🔍 Cari Layanan Visa'}
            </button>
            
            {hasSearched && (
              <button 
                type="button" 
                style={styles.resetBtn}
                onClick={resetSearch}
              >
                🔄 Reset Pencarian
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hasil Pencarian */}
      {hasSearched && (
        <div style={styles.searchResultsContainer}>
          <h2 style={styles.resultsTitle}>
            {isSearching ? 'Mencari layanan visa...' : `Ditemukan ${searchResults.length} layanan visa`}
          </h2>
          
          {!isSearching && searchResults.length === 0 && (
            <div style={styles.noResults}>
              <p>😔 Tidak ada layanan visa yang sesuai dengan pencarian Anda.</p>
              <p>Silakan coba dengan kriteria pencarian yang berbeda.</p>
            </div>
          )}
          
          <div style={styles.resultsGrid}>
            {searchResults.map(service => (
              <VisaServiceCard 
                key={service.id} 
                service={service} 
                onSelect={handleSelectService}
              />
            ))}
          </div>
        </div>
      )}

      {/* Feature Cards - hanya tampil jika belum search */}
      {!hasSearched && (
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Proses Cepat</h3>
            <p style={styles.featureText}>
              Pengajuan visa diproses dengan cepat dan efisien sesuai standar kedutaan
            </p>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Aman & Terpercaya</h3>
            <p style={styles.featureText}>
              Data Anda dijamin aman dengan sistem keamanan tingkat tinggi
            </p>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>👥</div>
            <h3 style={styles.featureTitle}>Konsultasi Expert</h3>
            <p style={styles.featureText}>
              Tim ahli siap membantu konsultasi visa sesuai kebutuhan perjalanan Anda
            </p>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📋</div>
            <h3 style={styles.featureTitle}>Dokumen Lengkap</h3>
            <p style={styles.featureText}>
              Panduan lengkap persiapan dokumen untuk berbagai jenis visa
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'grey',
    minHeight: '100vh'
  },
  header: {
    paddingTop:'120px',
    textAlign: 'center',
    color: 'white',
    marginBottom: '40px'
  },
  headerTitle: {
    fontSize: '3rem',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    margin: '0 0 10px 0'
  },
  headerSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    margin: 0
  },
  visaFormContainer: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    // borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    marginBottom: '40px'
  },
  formTitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2rem',
    fontWeight: '600',
    margin: '0 0 30px 0'
  },
  searchForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
    fontSize: '1.1rem'
  },
  formControl: {
    padding: '15px',
    border: '2px solid #e0e0e0',
    // borderRadius: '12px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    background: 'white',
    outline: 'none'
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px'
  },
  searchBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '18px 40px',
    border: 'none',
    // borderRadius: '12px',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    flex: 1
  },
  resetBtn: {
    background: '#6c757d',
    color: 'white',
    padding: '18px 30px',
    border: 'none',
    // borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  searchBtnLoading: {
    opacity: 0.7,
    cursor: 'not-allowed'
  },
  searchResultsContainer: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    // borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    marginBottom: '40px'
  },
  resultsTitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '1.8rem',
    fontWeight: '600',
    margin: '0 0 30px 0'
  },
  noResults: {
    textAlign: 'center',
    color: '#666',
    fontSize: '1.1rem',
    padding: '40px 20px'
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px'
  },
  serviceCard: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  serviceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px'
  },
  serviceTitle: {
    color: '#333',
    fontSize: '1.3rem',
    fontWeight: '600',
    margin: 0,
    flex: 1
  },
  successRate: {
    background: '#d4edda',
    color: '#155724',
    padding: '5px 10px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginLeft: '10px'
  },
  serviceDescription: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
    margin: '0 0 20px 0'
  },
  serviceInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    background: '#f8f9fa',
    padding: '15px',
    borderRadius: '10px'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  infoLabel: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '5px'
  },
  infoValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333'
  },
  requirements: {
    marginBottom: '25px'
  },
  requirementsTitle: {
    color: '#333',
    fontSize: '1rem',
    marginBottom: '10px',
    margin: '0 0 10px 0'
  },
  requirementsList: {
    margin: '0',
    paddingLeft: '20px'
  },
  requirementItem: {
    color: '#666',
    marginBottom: '5px',
    fontSize: '0.9rem'
  },
  selectButton: {
    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '60px'
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '20px'
  },
  featureTitle: {
    color: '#333',
    marginBottom: '15px',
    fontSize: '1.4rem',
    margin: '0 0 15px 0'
  },
  featureText: {
    color: '#666',
    lineHeight: '1.6',
    margin: 0
  }
};