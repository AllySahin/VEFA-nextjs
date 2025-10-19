'use client'

import Link from 'next/link'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

export default function CorporateContent() {
  const benefits = [
    'Yerinde eğitim ve saha değerlendirmesi',
    'Kurumsal raporlama ve gelişim planı',
    'MEB onaylı sertifikalandırma',
    'Periyodik yenileme eğitimleri'
  ]

  const packages = [
    { name: 'Standart Paket', detail: '10 personele kadar', color: '#3498db' },
    { name: 'Plus Paket', detail: '25 personele kadar', color: '#9b59b6' },
    { name: 'Özel Paket', detail: 'Sahada özel modüller', color: '#e74c3c' },
    { name: 'Destek', detail: 'Eğitim sonrası performans takibi', color: '#27ae60' }
  ]

  return (
    <section style={{ padding: '5rem 0', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Content */}
          <article style={{ flex: 1 }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Büyüyen Ekipler için Esnek Eğitim
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#555',
              marginBottom: '2rem'
            }}>
              VEFA İş Makineleri Kursu olarak, şirketlerin saha operasyonlarında 
              güvenliği ve verimliliği artırmalarına yardımcı oluyoruz. Eğitim 
              içeriklerimiz üretim planlarınıza göre şekillenir ve vardiya düzeninizi 
              aksatmadan tamamlanır.
            </p>
            
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0'
            }}>
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 0',
                    fontSize: '1.05rem',
                    color: '#444',
                    borderBottom: index < benefits.length - 1 ? '1px solid #e0e0e0' : 'none'
                  }}
                >
                  <FiCheckCircle style={{ color: '#27ae60', fontSize: '1.5rem', flexShrink: 0 }} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </article>
          
          {/* Right Package Cards */}
          <aside style={{
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            color: 'white'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Kurumsal Paketler
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    marginBottom: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: pkg.color,
                      boxShadow: `0 0 10px ${pkg.color}`
                    }} />
                    <div style={{ flex: 1 }}>
                      <strong style={{
                        display: 'block',
                        fontSize: '1.1rem',
                        marginBottom: '0.25rem'
                      }}>
                        {pkg.name}
                      </strong>
                      <span style={{
                        fontSize: '0.95rem',
                        opacity: 0.9
                      }}>
                        {pkg.detail}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              href="/iletisim" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                color: '#2c3e50',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.05rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              Kurumsal Teklif Al
              <FiArrowRight />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}