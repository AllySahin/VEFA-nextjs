'use client'

import { useState } from 'react'
import { FiUser, FiAward, FiBriefcase, FiBookOpen } from 'react-icons/fi'
import type { IconType } from 'react-icons'

interface TeamMember {
  name: string
  position: string
  description: string
  icon: IconType
  specialty: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Uzman Eğitmen Kadromuz',
    position: 'MEB Onaylı Eğitmenler',
    description: 'Alanında deneyimli, sertifikalı eğitmen kadromuz.',
    icon: FiAward,
    specialty: 'İş Makineleri Eğitimi'
  },
  {
    name: 'İş Güvenliği Ekibimiz',
    position: 'İSG Uzmanları',
    description: 'İş sağlığı ve güvenliği konusunda uzman kadro.',
    icon: FiBriefcase,
    specialty: 'İş Sağlığı ve Güvenliği'
  },
  {
    name: 'Pratik Eğitim Ekibimiz',
    position: 'Saha Koordinatörleri',
    description: 'Pratik eğitimlerde deneyimli ve profesyonel kadro.',
    icon: FiBookOpen,
    specialty: 'Uygulamalı Eğitim'
  },
  {
    name: 'Danışmanlık Ekibimiz',
    position: 'Eğitim Danışmanları',
    description: 'Kişiye özel eğitim planlaması ve danışmanlık hizmeti.',
    icon: FiUser,
    specialty: 'Eğitim Planlaması'
  }
]

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section style={{ 
      padding: '5rem 0', 
      background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            color: 'white',
            borderRadius: '30px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem',
            letterSpacing: '1px'
          }}>
            EKİBİMİZ
          </div>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Uzman Eğitmen Kadromuz
          </h2>
          <p style={{ 
            color: '#7f8c8d', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            Alanında uzman, deneyimli eğitmenlerimizle kaliteli eğitim sunuyoruz
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            const isHovered = hoveredIndex === index
            
            return (
              <article
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: isHovered 
                    ? '2px solid #2c3e50' 
                    : '2px solid rgba(44, 62, 80, 0.1)',
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                  boxShadow: isHovered 
                    ? '0 20px 40px rgba(44, 62, 80, 0.15)' 
                    : '0 4px 15px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Background Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '120px',
                  background: isHovered 
                    ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' 
                    : 'linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%)',
                  transition: 'all 0.3s ease'
                }} />

                {/* Profile Icon */}
                <div style={{ position: 'relative', zIndex: 1, marginBottom: '1rem' }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto 1rem',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '4px solid white',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <Icon size={40} color="#2c3e50" />
                  </div>
                </div>

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    marginBottom: '0.5rem',
                    color: '#2c3e50',
                    fontWeight: '600'
                  }}>
                    {member.name}
                  </h3>
                  
                  <div style={{
                    display: 'inline-block',
                    padding: '0.35rem 1rem',
                    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    {member.position}
                  </div>

                  <p style={{ 
                    color: '#7f8c8d',
                    lineHeight: '1.6',
                    fontSize: '0.95rem',
                    marginBottom: '1rem'
                  }}>
                    {member.description}
                  </p>

                  <div style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(44, 62, 80, 0.1)'
                  }}>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#f39c12',
                      fontWeight: '600',
                      letterSpacing: '0.5px'
                    }}>
                      {member.specialty}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '3rem',
          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          borderRadius: '20px',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600' }}>
            Ekibimizle Tanışın
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Eğitim merkezimizi ziyaret ederek uzman kadromuzla tanışabilir, 
            eğitim programlarımız hakkında detaylı bilgi alabilirsiniz.
          </p>
          <a 
            href="/iletisim"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#2c3e50',
              borderRadius: '50px',
              fontSize: '1.05rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid white',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = '#2c3e50'
            }}
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  )
}