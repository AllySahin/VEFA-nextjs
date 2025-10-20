'use client'

import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiMessageCircle } from 'react-icons/fi'

export default function ContactInfo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const contactItems = [
    {
      icon: FiMapPin,
      title: 'Adres',
      content: 'Örnek Mah. Sanayi Cd. No:12 Tepebaşı / Eskişehir',
      color: '#2c3e50',
      link: 'https://maps.google.com'
    },
    {
      icon: FiPhone,
      title: 'Telefon',
      content: '0 (222) 222 22 22',
      color: '#34495e',
      link: 'tel:+902222222222'
    },
    {
      icon: FiMail,
      title: 'E-posta',
      content: 'info@vefaismakinalari.com',
      color: '#2c3e50',
      link: 'mailto:info@vefaismakinalari.com'
    },
    {
      icon: FiClock,
      title: 'Çalışma Saatleri',
      content: 'Hafta içi 09:00 - 19:00\nCumartesi 10:00 - 16:00',
      color: '#f39c12',
      link: null
    }
  ]

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      borderRadius: '20px',
      padding: '3rem',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.25rem',
          background: 'rgba(243, 156, 18, 0.2)',
          color: '#f39c12',
          borderRadius: '30px',
          fontSize: '0.85rem',
          fontWeight: '600',
          marginBottom: '1rem',
          letterSpacing: '0.5px'
        }}>
          İLETİŞİM
        </div>

        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          Bize Ulaşın
        </h2>
        
        <p style={{ 
          fontSize: '1.05rem', 
          marginBottom: '2.5rem',
          color: 'rgba(255, 255, 255, 0.9)',
          lineHeight: '1.6'
        }}>
          Size en uygun eğitim programını önerebilmemiz için bizimle iletişime geçin.
        </p>

        <div style={{ 
          display: 'grid',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const isHovered = hoveredCard === index
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered 
                    ? 'rgba(255, 255, 255, 0.15)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateX(10px)' : 'translateX(0)',
                  cursor: item.link ? 'pointer' : 'default'
                }}
                onClick={() => item.link && window.open(item.link, item.link.startsWith('http') ? '_blank' : '_self')}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: item.color,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <Icon size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      opacity: 0.8,
                      marginBottom: '0.25rem',
                      fontWeight: '500'
                    }}>
                      {item.title}
                    </div>
                    <div style={{ 
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      whiteSpace: 'pre-line',
                      lineHeight: '1.5'
                    }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/905xxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            background: '#25D366',
            color: 'white',
            borderRadius: '50px',
            fontSize: '1.05rem',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)'
          }}
        >
          <svg 
            viewBox="0 0 32 32" 
            width="20" 
            height="20"
            fill="white"
            style={{ marginRight: '0.5rem' }}
          >
            <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.396 5.194 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.846-4.507-1.846-6.957 0-7.384 6.083-13.467 13.467-13.467s13.467 6.083 13.467 13.467c0 7.384-6.083 13.467-13.467 13.467zM21.787 18.693c-0.239-0.12-1.413-0.697-1.633-0.777-0.219-0.080-0.379-0.120-0.538 0.12s-0.618 0.777-0.758 0.937c-0.139 0.159-0.279 0.179-0.518 0.060s-1.012-0.373-1.926-1.188c-0.713-0.635-1.193-1.419-1.333-1.658s-0.015-0.368 0.105-0.487c0.108-0.107 0.239-0.279 0.359-0.418s0.159-0.239 0.239-0.398c0.080-0.159 0.040-0.299-0.020-0.418s-0.538-1.293-0.737-1.771c-0.195-0.464-0.394-0.402-0.538-0.41-0.139-0.007-0.299-0.009-0.458-0.009s-0.418 0.060-0.638 0.299c-0.219 0.239-0.837 0.817-0.837 1.991s0.857 2.31 0.976 2.469c0.12 0.159 1.685 2.572 4.082 3.606 0.571 0.247 1.016 0.394 1.363 0.504 0.573 0.181 1.094 0.156 1.506 0.094 0.459-0.069 1.413-0.578 1.613-1.136s0.199-1.036 0.139-1.136c-0.060-0.099-0.219-0.159-0.458-0.279z"/>
          </svg>
          WhatsApp ile İletişime Geç
        </a>
      </div>
    </div>
  )
}