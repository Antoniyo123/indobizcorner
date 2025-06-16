import React, { useState } from 'react';
import '../styles/VisaService.css';

const initialForm = {
  fullName: '', email: '', phone: '', birthDate: '', nationality: 'Indonesia',
  passportNumber: '', passportExpiry: '', travelDate: '', returnDate: '',
  purpose: '', previousVisa: '', notes: ''
};

const ApplyModal = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Aplikasi visa ${service?.title} berhasil dikirim!`);
      setIsSubmitting(false);
      onClose();
      setFormData(initialForm);
    }, 2000);
  };

  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content apply-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <span className="modal-icon" style={{ backgroundColor: service.iconColor }}>{service.icon}</span>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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

export default ApplyModal;
