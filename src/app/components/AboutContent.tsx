'use client'

import { useState } from 'react'
import { FiAward, FiTarget, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

export default function AboutContent() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const stats = [
    { number: 'MEB', label: 'Onaylı Kurum', icon: FiAward },
    { number: '7/24', label: 'Destek Hizmeti', icon: FiTrendingUp },
    { number: '100%', label: 'Pratik Odaklı', icon: FiTarget },
    { number: 'Modern', label: 'Eğitim Araçları', icon: FiCheckCircle }
  ]

  return (
    <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)' }}>
      <div className="container">
        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem', 
          marginBottom: '5rem' 
        }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: hoveredStat === index 
                    ? '0 20px 40px rgba(44, 62, 80, 0.15)' 
                    : '0 4px 15px rgba(0, 0, 0, 0.05)',
                  transform: hoveredStat === index ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                  border: hoveredStat === index ? '2px solid #2c3e50' : '2px solid transparent'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1rem',
                  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <Icon size={28} />
                </div>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: '0.95rem', 
                  color: '#7f8c8d',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem' 
        }}>
          {/* Biz Kimiz */}
          <article style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(44, 62, 80, 0.1)'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
              color: 'white',
              borderRadius: '30px',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              letterSpacing: '0.5px'
            }}>
              BİZ KİMİZ?
            </div>
            <h2 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1.5rem', 
              color: '#2c3e50',
              lineHeight: '1.3'
            }}>
              Modern Eğitim Anlayışıyla Yola Çıktık
            </h2>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.8', 
              marginBottom: '1rem',
              fontSize: '1.05rem'
            }}>
              VEFA İş Makineleri Kursu olarak, Eskişehir ve çevresinde kaliteli operatör 
              eğitimi sunmak amacıyla yola çıktık. Sektörün ihtiyaçlarına uygun, güncel 
              teknolojilerle desteklenen modern bir eğitim modeli oluşturduk.
            </p>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.8',
              fontSize: '1.05rem'
            }}>
              Deneyimli eğitmen kadromuz ve modern eğitim araçlarımızla, kursiyerlerimizin 
              hem teorik hem de pratik anlamda en iyi şekilde gelişmelerini sağlıyoruz.
            </p>
          </article>

          {/* Misyon & Vizyon */}
          <article style={{
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            borderRadius: '20px',
            padding: '2.5rem',
            color: 'white',
            boxShadow: '0 10px 30px rgba(44, 62, 80, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <FiTarget size={24} color="#f39c12" />
                  <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Misyonumuz</h2>
                </div>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  lineHeight: '1.8',
                  fontSize: '1.05rem'
                }}>
                  İş güvenliğine duyarlı, donanımlı ve sertifikalı operatörler yetiştirerek 
                  bölgedeki sanayi ve inşaat projelerinin nitelikli iş gücüne katkı sağlamak.
                </p>
              </div>

              <div style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <FiTrendingUp size={24} color="#f39c12" />
                  <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Vizyonumuz</h2>
                </div>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  lineHeight: '1.8',
                  fontSize: '1.05rem'
                }}>
                  Eskişehir başta olmak üzere Türkiye genelinde referans alınan, teknoloji 
                  odaklı operatörlük eğitim merkezi olmak.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}