'use client'

import { FiAward, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi'

export default function WhyVefaSection() {
  const reasons = [
    {
      icon: <FiAward />,
      title: 'MEB Onaylı Sertifikalar',
      description: 'Tüm eğitimlerimiz Milli Eğitim Bakanlığı onaylıdır. Aldığınız sertifikalar geçerli ve güvenilirdir.'
    },
    {
      icon: <FiUsers />,
      title: 'Uzman Eğitmen Kadrosu',
      description: 'Alanında deneyimli, sertifikalı eğitmenlerimiz ile kaliteli eğitim alırsınız.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Modern Ekipmanlar',
      description: 'En güncel iş makineleri ve ekipmanlar ile uygulamalı pratik eğitim imkanı sunuyoruz.'
    },
    {
      icon: <FiShield />,
      title: 'İş Güvenliği Önceliğimiz',
      description: 'Eğitimlerimizde iş güvenliği kurallarına tam uyum sağlanır, güvenli çalışma ortamı sunulur.'
    }
  ]

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            VEFA'yı Neden Seçmelisiniz?
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Modern eğitim anlayışı ve kaliteli hizmet ile fark yaratıyoruz
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                color: '#f39c12'
              }}>
                {reason.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                color: 'white'
              }}>
                {reason.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                opacity: 0.9
              }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
