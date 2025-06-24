// WorkingProcess.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CoreValue.css';

const WorkingProcess = () => {
  const navigate = useNavigate(); // <-- tambahkan ini

  const steps = [
    {
      icon: '📄',
      title: 'Lengkapi dokumen',
      description: 'Upload dokumen & data diri online dengan formulir yang sudah dibuat simpel untuk Anda.'
    },
    {
      icon: '🤖',
      title: 'Verifikasi dan pengajuan online',
      description: 'Proses verifikasi dengan AI & tim kami untuk membantu pengecekan approval rate visa Anda.'
    },
    {
      icon: '💳',
      title: 'Dapatkan visa tepat waktu',
      description: 'Tergantung jenis visa, Anda bisa download hasilnya langsung atau kami kirim ke alamat Anda.'
    }
  ];

  const handleSeeMoreClick = () => {
    navigate('/visa-service'); // <-- arahkan ke path Visa Service
  };

  return (
    <section className="working-process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">
            Cara kerja Indobizcorner
          </h2>
        </div>
        
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="card-icon">
                <span className="icon">{step.icon}</span>
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-description">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="process-footer">
          <button className="btn-more" onClick={handleSeeMoreClick}>
            Lihat selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
