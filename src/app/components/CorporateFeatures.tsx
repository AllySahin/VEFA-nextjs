'use client'

import { FiBarChart, FiShield, FiSettings, FiUsers } from 'react-icons/fi'

interface CorporateFeature {
  icon: React.ReactNode
  title: string
  description: string
}

const corporateFeatures: CorporateFeature[] = [
  {
    icon: <FiBarChart />,
    title: 'Veri Odaklı Analiz',
    description: 'Eğitim öncesi ve sonrası performans raporları ile gelişimi ölçün.'
  },
  {
    icon: <FiShield />,
    title: 'İş Güvenliği Uyum',
    description: 'İSG yönetmeliklerine uygun, denetimde geçerli sertifikalar.'
  },
  {
    icon: <FiSettings />,
    title: 'Özel Eğitim Planları',
    description: 'Sektör ve ekipman türüne göre özelleştirilmiş müfredatlar.'
  },
  {
    icon: <FiUsers />,
    title: 'Sürekli İş Ortaklığı',
    description: 'Yenileme eğitimleri ve danışmanlık ile sürekli destek.'
  }
]

const CorporateFeatureCard = ({ feature, index }: { feature: CorporateFeature, index: number }) => (
  <article 
    style={{
      background: 'white',
      padding: '2.5rem',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      cursor: 'default',
      border: '1px solid #e0e0e0',
      position: 'relative',
      overflow: 'hidden'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.12)'
      e.currentTarget.style.borderColor = '#2c3e50'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
      e.currentTarget.style.borderColor = '#e0e0e0'
    }}
  >
    {/* Decorative Number */}
    <div style={{
      position: 'absolute',
      top: '1rem',
      right: '1.5rem',
      fontSize: '4rem',
      fontWeight: 'bold',
      color: '#f8f9fa',
      lineHeight: 1
    }}>
      {(index + 1).toString().padStart(2, '0')}
    </div>

    {/* Icon */}
    <div style={{
      width: '70px',
      height: '70px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      fontSize: '2rem',
      color: 'white',
      position: 'relative',
      zIndex: 1
    }}>
      {feature.icon}
    </div>

    {/* Content */}
    <h3 style={{
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '1rem',
      position: 'relative',
      zIndex: 1
    }}>
      {feature.title}
    </h3>
    <p style={{
      fontSize: '1rem',
      lineHeight: '1.7',
      color: '#555',
      position: 'relative',
      zIndex: 1
    }}>
      {feature.description}
    </p>
  </article>
)

export default function CorporateFeatures() {
  return (
    <section style={{
      padding: '5rem 0',
      background: '#f8f9fa'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '1rem'
          }}>
            Operasyonlarınıza Değer Katıyoruz
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Kurumsal eğitim çözümlerimizle işletmenizin verimliliğini artırın
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {corporateFeatures.map((feature, index) => (
            <CorporateFeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}