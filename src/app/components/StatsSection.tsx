'use client'

import { useState, useEffect } from 'react'

export default function StatsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      number: '15.000+',
      label: 'Eğitim Alan Kursiyerler',
      description: 'Yıllar içinde başarıyla sertifikalandırdığımız profesyoneller'
    },
    {
      number: '%98',
      label: 'Başarı Oranı',
      description: 'Kursiyerlerimizin sınavlarda gösterdiği yüksek başarı'
    },
    {
      number: '50+',
      label: 'Farklı Eğitim Programı',
      description: 'İş makineleri ve iş güvenliği alanında uzman eğitimler'
    },
    {
      number: '20+',
      label: 'Yıllık Tecrübe',
      description: 'Sektörde güvenilir ve köklü bir kuruluş olarak hizmet'
    }
  ]

  if (!mounted) return null

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <span className="section-badge">Rakamlarla VEFA</span>
          <h2 className="section-title">Güvenilir Eğitim, Kanıtlanmış Başarı</h2>
          <p className="section-description">
            Sektörün önde gelen eğitim kurumu olarak, binlerce kursiyere kaliteli eğitim sunmanın gururunu yaşıyoruz.
            İşte başarımızı gösteren rakamlar.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="stats-cta">
          <div className="cta-content">
            <h3>Siz de bu başarının parçası olmaya hazır mısınız?</h3>
            <p>Profesyonel eğitimlerimiz ile kariyerinize yön verin. Uzman eğitmenlerimiz ve modern olanaklarımızla sizleri bekliyoruz.</p>
            <div className="cta-buttons">
              <a href="/hizmetlerimiz" className="btn-primary">
                Eğitim Programlarını İncele
                <span className="btn-arrow">→</span>
              </a>
              <a href="/iletisim" className="btn-secondary">
                Hemen İletişime Geç
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
          <div className="cta-features">
            <div className="feature-item">
              <span>MEB Onaylı Sertifikalar</span>
            </div>
            <div className="feature-item">
              <span>Uzman Eğitmen Kadrosu</span>
            </div>
            <div className="feature-item">
              <span>Modern Eğitim Araçları</span>
            </div>
            <div className="feature-item">
              <span>Uygun Ödeme Seçenekleri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
