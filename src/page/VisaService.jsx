import { useState } from 'react';
import '../styles/VisaService.css';

// Data layanan visa
const visaServices = [
  {
    id: 1,
    country: 'usa',
    countryName: 'Amerika Serikat',
    visaType: 'tourist',
    title: 'Visa Turis Amerika Serikat (B1/B2)',
    description: 'Layanan visa turis untuk perjalanan wisata ke USA dengan proses cepat dan mudah. Visa ini memungkinkan Anda untuk berlibur, mengunjungi keluarga, atau melakukan aktivitas wisata di Amerika Serikat.',
    price: 'Rp 2.500.000',
    priceNumeric: 2500000,
    processingTime: '7-14 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Foto 5x5 cm latar putih', 'Bukti keuangan rekening 3 bulan terakhir', 'Itinerary perjalanan', 'Formulir DS-160', 'Bukti ikatan dengan Indonesia'],
    success_rate: '95%',
    icon: '🇺🇸',
    iconColor: '#1e40af',
    features: ['Interview wajib', 'Visa berlaku 10 tahun', 'Multiple entry', 'Dapat diperpanjang'],
    detailedInfo: {
      validity: '10 tahun',
      maxStay: '6 bulan per kunjungan',
      entries: 'Multiple',
      interview: 'Wajib di kedutaan'
    }
  },
  {
    id: 2,
    country: 'usa',
    countryName: 'Amerika Serikat',
    visaType: 'business',
    title: 'Visa Bisnis Amerika Serikat (B1)',
    description: 'Visa bisnis untuk meeting, konferensi, dan aktivitas bisnis di USA. Cocok untuk pengusaha dan profesional yang perlu melakukan perjalanan bisnis.',
    price: 'Rp 3.000.000',
    priceNumeric: 3000000,
    processingTime: '10-21 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Surat undangan perusahaan', 'Surat keterangan kerja', 'SIUP perusahaan', 'Formulir DS-160', 'Bukti keuangan perusahaan'],
    success_rate: '90%',
    icon: '🇺🇸',
    iconColor: '#f59e0b',
    features: ['Interview wajib', 'Visa berlaku 10 tahun', 'Business activities only', 'Dapat diperpanjang'],
    detailedInfo: {
      validity: '10 tahun',
      maxStay: '6 bulan per kunjungan',
      entries: 'Multiple',
      interview: 'Wajib di kedutaan'
    }
  },
  {
    id: 3,
    country: 'uk',
    countryName: 'Inggris',
    visaType: 'tourist',
    title: 'Visa Turis Inggris (Standard Visitor)',
    description: 'Visa turis untuk berlibur ke Inggris hingga 6 bulan. Memungkinkan Anda untuk berwisata, mengunjungi keluarga, atau melakukan aktivitas wisata di United Kingdom.',
    price: 'Rp 2.200.000',
    priceNumeric: 2200000,
    processingTime: '15-21 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Foto biometrik', 'Bukti akomodasi', 'Tiket pesawat PP', 'Bukti keuangan', 'Surat sponsor (jika ada)'],
    success_rate: '92%',
    icon: '🇬🇧',
    iconColor: '#dc2626',
    features: ['Biometric required', 'Stay up to 6 months', 'Tourism & business', 'Online application'],
    detailedInfo: {
      validity: '6 bulan - 10 tahun',
      maxStay: '6 bulan per kunjungan',
      entries: 'Multiple',
      interview: 'Tidak wajib'
    }
  },
  {
    id: 4,
    country: 'japan',
    countryName: 'Jepang',
    visaType: 'tourist',
    title: 'Visa Turis Jepang (Temporary Visitor)',
    description: 'Visa turis untuk wisata ke Jepang hingga 30 hari. Proses cepat dan mudah untuk liburan ke negeri sakura dengan tingkat keberhasilan yang sangat tinggi.',
    price: 'Rp 800.000',
    priceNumeric: 800000,
    processingTime: '5-7 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Foto 4.5x4.5 cm', 'Tiket pesawat PP', 'Bukti hotel', 'Bukti keuangan', 'Itinerary perjalanan'],
    success_rate: '98%',
    icon: '🇯🇵',
    iconColor: '#7c3aed',
    features: ['No interview', 'Fast processing', 'Single entry', 'Easy requirements'],
    detailedInfo: {
      validity: '3 bulan',
      maxStay: '30 hari',
      entries: 'Single',
      interview: 'Tidak diperlukan'
    }
  },
  {
    id: 5,
    country: 'australia',
    countryName: 'Australia',
    visaType: 'tourist',
    title: 'Visa Turis Australia (Visitor 600)',
    description: 'Electronic visa untuk berlibur ke Australia hingga 12 bulan. Visa elektronik yang memudahkan perjalanan wisata Anda ke benua Australia.',
    price: 'Rp 1.800.000',
    priceNumeric: 1800000,
    processingTime: '5-10 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Foto digital', 'Bukti keuangan', 'Medical checkup', 'Asuransi perjalanan', 'Bukti akomodasi'],
    success_rate: '96%',
    icon: '🇦🇺',
    iconColor: '#059669',
    features: ['E-visa', 'Stay up to 12 months', 'Multiple entry', 'Online application'],
    detailedInfo: {
      validity: '12 bulan',
      maxStay: '3-12 bulan',
      entries: 'Multiple',
      interview: 'Tidak diperlukan'
    }
  },
  {
    id: 6,
    country: 'singapore',
    countryName: 'Singapura',
    visaType: 'business',
    title: 'Visa Bisnis Singapura',
    description: 'Visa bisnis untuk aktivitas komersial di Singapura. Cocok untuk meeting bisnis, konferensi, dan aktivitas perdagangan di Singapura.',
    price: 'Rp 600.000',
    priceNumeric: 600000,
    processingTime: '3-5 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Surat sponsor perusahaan', 'Form aplikasi lengkap', 'Pas foto terbaru', 'Bukti keuangan', 'Surat keterangan kerja'],
    success_rate: '99%',
    icon: '🇸🇬',
    iconColor: '#db2777',
    features: ['Fast processing', 'Business activities', 'Short term stay', 'High success rate'],
    detailedInfo: {
      validity: '2 tahun',
      maxStay: '30 hari per kunjungan',
      entries: 'Multiple',
      interview: 'Tidak diperlukan'
    }
  },
  {
    id: 7,
    country: 'korea',
    countryName: 'Korea Selatan',
    visaType: 'tourist',
    title: 'Visa Turis Korea Selatan (C-3)',
    description: 'Visa turis untuk wisata ke Korea Selatan hingga 90 hari. Nikmati pengalaman K-culture, kuliner, dan wisata di negeri ginseng.',
    price: 'Rp 1.200.000',
    priceNumeric: 1200000,
    processingTime: '7-10 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Foto 3.5x4.5 cm', 'Bukti keuangan', 'Itinerary lengkap', 'Bukti akomodasi', 'Tiket pesawat PP'],
    success_rate: '94%',
    icon: '🇰🇷',
    iconColor: '#0891b2',
    features: ['Stay up to 90 days', 'Tourism only', 'Single entry', 'K-culture experience'],
    detailedInfo: {
      validity: '3 bulan',
      maxStay: '90 hari',
      entries: 'Single',
      interview: 'Tidak diperlukan'
    }
  },
  {
    id: 8,
    country: 'canada',
    countryName: 'Kanada',
    visaType: 'tourist',
    title: 'Visa Turis Kanada (Temporary Resident)',
    description: 'Visa turis untuk mengunjungi Kanada hingga 6 bulan. Jelajahi keindahan alam Kanada dan kota-kota metropolitan yang menawan.',
    price: 'Rp 2.800.000',
    priceNumeric: 2800000,
    processingTime: '14-28 hari',
    requirements: ['Paspor valid min. 6 bulan', 'Foto biometrik', 'Bukti keuangan kuat', 'Surat sponsor (jika ada)', 'Medical exam', 'Police certificate'],
    success_rate: '88%',
    icon: '🇨🇦',
    iconColor: '#dc2626',
    features: ['Biometric required', 'Stay up to 6 months', 'Tourism & family visit', 'eTA required'],
    detailedInfo: {
      validity: '10 tahun',
      maxStay: '6 bulan per kunjungan',
      entries: 'Multiple',
      interview: 'Kadang diperlukan'
    }
  }
];

// Komponen Modal Info
const InfoModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content info-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <span className="modal-icon" style={{ backgroundColor: service.iconColor }}>
              {service.icon}
            </span>
            <div>
              <h3 className="modal-title">{service.title}</h3>
              <span className="modal-subtitle">{service.countryName}</span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="info-section">
            <h4>📝 Deskripsi Layanan</h4>
            <p>{service.description}</p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">💰</div>
              <div>
                <span className="info-label">Harga</span>
                <span className="info-value">{service.price}</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏱️</div>
              <div>
                <span className="info-label">Waktu Proses</span>
                <span className="info-value">{service.processingTime}</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✅</div>
              <div>
                <span className="info-label">Success Rate</span>
                <span className="info-value">{service.success_rate}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h4>📋 Detail Visa</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Masa Berlaku:</span>
                <span className="detail-value">{service.detailedInfo.validity}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Lama Tinggal:</span>
                <span className="detail-value">{service.detailedInfo.maxStay}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Jenis Entry:</span>
                <span className="detail-value">{service.detailedInfo.entries}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Interview:</span>
                <span className="detail-value">{service.detailedInfo.interview}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h4>✨ Fitur Layanan</h4>
            <div className="features-grid">
              {service.features.map((feature, index) => (
                <span key={index} className="feature-badge">{feature}</span>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h4>📋 Persyaratan Dokumen</h4>
            <ul className="requirements-list">
              {service.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Modal Apply
const ApplyModal = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    nationality: 'Indonesia',
    passportNumber: '',
    passportExpiry: '',
    travelDate: '',
    returnDate: '',
    purpose: '',
    previousVisa: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi submit
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`🎉 Aplikasi visa ${service?.title} berhasil dikirim!\n\n📧 Kami akan mengirim email konfirmasi dalam 5 menit.\n📞 Tim kami akan menghubungi Anda dalam 24 jam.\n\nTerima kasih telah mempercayai layanan kami!`);
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        birthDate: '',
        nationality: 'Indonesia',
        passportNumber: '',
        passportExpiry: '',
        travelDate: '',
        returnDate: '',
        purpose: '',
        previousVisa: '',
        notes: ''
      });
    }, 2000);
  };

  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content apply-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <span className="modal-icon" style={{ backgroundColor: service.iconColor }}>
              {service.icon}
            </span>
            <div>
              <h3 className="modal-title">Apply {service.title}</h3>
              <span className="modal-subtitle">Harga: {service.price}</span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="apply-form">
            <div className="form-section">
              <h4>👤 Data Pribadi</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Masukkan nama lengkap sesuai paspor"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="birthDate">Tanggal Lahir *</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h4>📘 Data Paspor</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nationality">Kewarganegaraan</label>
                  <select
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                  >
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other">Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="passportNumber">Nomor Paspor *</label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="A1234567"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="passportExpiry">Tanggal Berakhir Paspor *</label>
                <input
                  type="date"
                  id="passportExpiry"
                  name="passportExpiry"
                  value={formData.passportExpiry}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h4>✈️ Rencana Perjalanan</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="travelDate">Tanggal Berangkat *</label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="returnDate">Tanggal Kembali *</label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="purpose">Tujuan Perjalanan *</label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih tujuan perjalanan</option>
                  <option value="Tourism">Wisata/Liburan</option>
                  <option value="Business">Bisnis</option>
                  <option value="Family Visit">Mengunjungi Keluarga</option>
                  <option value="Conference">Konferensi/Seminar</option>
                  <option value="Medical">Pengobatan</option>
                  <option value="Other">Lainnya</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h4>📋 Informasi Tambahan</h4>
              <div className="form-group">
                <label htmlFor="previousVisa">Pernah mengajukan visa ke negara ini?</label>
                <select
                  id="previousVisa"
                  name="previousVisa"
                  value={formData.previousVisa}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih jawaban</option>
                  <option value="Yes">Ya, pernah</option>
                  <option value="No">Tidak pernah</option>
                  <option value="Denied">Pernah, tapi ditolak</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="notes">Catatan Tambahan</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Informasi tambahan yang ingin disampaikan..."
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Batal
              </button>
              <button 
                type="submit" 
                className="btn-submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? '⏳ Mengirim...' : '🚀 Submit Aplikasi'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Komponen SearchForm
const SearchForm = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCountry, 
  setSelectedCountry, 
  selectedVisaType, 
  setSelectedVisaType, 
  onSearch, 
  onReset, 
  isSearching, 
  hasSearched 
}) => {
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

// Komponen VisaServiceCard yang diperbarui
const VisaServiceCard = ({ service, onOpenInfo, onOpenApply }) => (
  <div className="visa-card-modern">
    <div className="visa-card-icon" style={{ backgroundColor: service.iconColor }}>
      {service.icon}
    </div>
    
    <div className="visa-card-content">
      <h3 className="visa-card-title">{service.title}</h3>
      <p className="visa-card-price">{service.price} / application</p>
      
      <div className="visa-card-actions">
        <button 
          className="btn-info"
          onClick={() => onOpenInfo(service)}
        >
          ℹ️ Info
        </button>
        <button 
          className="btn-apply"
          onClick={() => onOpenApply(service)}
        >
          Apply →
        </button>
      </div>
    </div>
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
  
  // Modal states
  const [infoModal, setInfoModal] = useState({ isOpen: false, service: null });
  const [applyModal, setApplyModal] = useState({ isOpen: false, service: null });

  const handleSearch = () => {
    setIsSearching(true);
    setHasSearched(true);
    
    setTimeout(() => {
      let filtered = visaServices;
      
      if (selectedCountry) {
        filtered = filtered.filter(service => service.country === selectedCountry);
      }
      
      if (selectedVisaType) {
        filtered = filtered.filter(service => service.visaType === selectedVisaType);
      }
      
      if (searchQuery.trim()) {
        filtered = filtered.filter(service => 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.countryName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  const openInfoModal = (service) => {
    setInfoModal({ isOpen: true, service });
  };

  const closeInfoModal = () => {
    setInfoModal({ isOpen: false, service: null });
  };

  const openApplyModal = (service) => {
    setApplyModal({ isOpen: true, service });
  };

  const closeApplyModal = () => {
    setApplyModal({ isOpen: false, service: null });
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSelectedCountry('');
    setSelectedVisaType('');
    setSearchResults([]);
    setHasSearched(false);
  };

  return (
    <div className="visa-service-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🌍 Visa Service Indonesia</h1>
          <p className="hero-subtitle">Layanan visa terpercaya untuk perjalanan impian Anda</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Visa Diproses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Tingkat Keberhasilan</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Negara Tujuan</span>
            </div>
          </div>
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
        onReset={resetSearch}
        isSearching={isSearching}
        hasSearched={hasSearched}
      />

      {hasSearched && (
        <div className="search-results">
          <div className="results-header">
            <h2 className="results-title">
              {isSearching ? 'Mencari layanan visa terbaik...' : `${searchResults.length} Layanan Visa Tersedia`}
            </h2>
            {!isSearching && searchResults.length > 0 && (
              <p className="results-subtitle">Pilih layanan visa yang sesuai dengan kebutuhan perjalanan Anda</p>
            )}
          </div>
          
          {!isSearching && searchResults.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">😔</div>
              <h3>Tidak ada layanan visa yang ditemukan</h3>
              <p>Coba ubah kriteria pencarian Anda atau hubungi kami untuk konsultasi khusus</p>
              <button className="contact-btn" onClick={() => alert('Hubungi kami di WhatsApp: +62 812-3456-7890')}>
                📞 Hubungi Konsultan
              </button>
            </div>
          )}
          
          <div className="visa-grid-modern">
            {searchResults.map(service => (
              <VisaServiceCard 
                key={service.id} 
                service={service} 
                onOpenInfo={openInfoModal}
                onOpenApply={openApplyModal}
              />
            ))}
          </div>
        </div>
      )}

      {!hasSearched && (
        <div className="features-section">
          <h2 className="features-title">Mengapa Memilih Layanan Kami?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Proses Super Cepat</h3>
              <p>Pengajuan visa diproses dengan sistem digital terdepan untuk hasil yang lebih cepat</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>100% Aman & Terpercaya</h3>
              <p>Data pribadi Anda dijamin aman dengan sertifikasi keamanan internasional</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👨‍💼</div>
              <h3>Konsultan Berpengalaman</h3>
              <p>Tim ahli visa dengan pengalaman 10+ tahun siap membantu Anda 24/7</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Tingkat Keberhasilan Tinggi</h3>
              <p>Dengan success rate 95%, kami adalah pilihan terbaik untuk aplikasi visa Anda</p>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <InfoModal 
        service={infoModal.service}
        isOpen={infoModal.isOpen}
        onClose={closeInfoModal}
      />
      
      <ApplyModal 
        service={applyModal.service}
        isOpen={applyModal.isOpen}
        onClose={closeApplyModal}
      />
    </div>
  );
}