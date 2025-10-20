'use client'

import { useState } from 'react'
import { FiShield, FiRefreshCw, FiLayout, FiTrendingUp } from 'react-icons/fi'
import type { IconType } from 'react-icons'

interface Value {
  icon: IconType
  title: string
  description: string
  color: string
}

const values: Value[] = [
  {
    icon: FiShield,
    title: 'Güven',
    description: 'Kursiyerlerimizin eğitim sürecinde kendilerini güvende hissetmelerini sağlarız.',
    color: '#3498db'
  },
  {
    icon: FiRefreshCw,
    title: 'Sürekli Eğitim',
    description: 'Güncel mevzuat ve teknolojilerle içeriklerimizi yenileriz.',
    color: '#9b59b6'
  },
  {
    icon: FiLayout,
    title: 'Sürdürülebilirlik',
    description: 'Çevreye duyarlı ve uzun vadeli çözümler üretiriz.',
    color: '#27ae60'
  },
  {
    icon: FiTrendingUp,
    title: 'Başarı',
    description: 'Sınav başarı oranlarımızı sürekli geliştirir, sektörel beklentileri aşarız.',
    color: '#f39c12'
  }
]

export default function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section style={{ 
      padding: '5rem 0', 
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(243, 156, 18, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(243, 156, 18, 0.2)',
            color: '#f39c12',
            borderRadius: '30px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem',
            letterSpacing: '1px'
          }}>
            DEĞERLERİMİZ
          </div>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: 'white',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Bizi Farklı Kılan Prensipler
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            Eğitimlerimizin temelini oluşturan ve bizi sektörde öne çıkaran değerlerimiz
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {values.map((value, index) => {
            const Icon = value.icon
            const isHovered = hoveredIndex === index
            
            return (
              <article
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: isHovered 
                    ? 'white' 
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  border: isHovered 
                    ? `2px solid ${value.color}` 
                    : '2px solid rgba(255, 255, 255, 0.1)',
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  transition: 'all 0.4s ease',
                  boxShadow: isHovered 
                    ? `0 20px 40px ${value.color}40` 
                    : '0 4px 15px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Number */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '10px',
                  fontSize: '5rem',
                  fontWeight: 'bold',
                  color: isHovered ? `${value.color}15` : 'rgba(255, 255, 255, 0.03)',
                  transition: 'color 0.3s ease'
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: isHovered 
                    ? `linear-gradient(135deg, ${value.color} 0%, ${value.color}dd 100%)` 
                    : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transform: isHovered ? 'rotate(5deg) scale(1.05)' : 'rotate(0deg) scale(1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <Icon 
                    size={32} 
                    color={isHovered ? 'white' : value.color} 
                    style={{ transition: 'color 0.3s ease' }}
                  />
                </div>

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    marginBottom: '1rem',
                    color: isHovered ? '#2c3e50' : 'white',
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{ 
                    color: isHovered ? '#555' : 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontSize: '1.05rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {value.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}