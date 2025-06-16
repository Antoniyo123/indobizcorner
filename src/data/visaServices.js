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
  export default visaServices;
