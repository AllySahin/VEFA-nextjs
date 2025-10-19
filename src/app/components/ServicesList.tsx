'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Service {
  title: string
  description: string
  slug: string
  image: string
  duration: string
  price: string
  features: string[]
  badge?: string
  category: string
}

const services: Service[] = [
  {
    title: 'Forklift Operatörlük Eğitimi',
    description: 'Standart ve reach truck forkliftler ile güvenli kaldırma ve istifleme uygulamaları.',
    slug: 'forklift-egitimi',
    image: '/images/service-forklift.png',
    duration: '5 Gün',
    price: '₺2.500',
    features: ['Teori Eğitimi', 'Pratik Uygulama', 'MEB Sertifikası', 'Sınav Hazırlığı'],
    badge: 'Popüler',
    category: 'is-makineleri'
  },
  {
    title: 'Manlift (Personel Yükseltici)',
    description: 'Yüksekte çalışma güvenlik protokolleri ve platform kontrolü pratikleri.',
    slug: 'manlift-egitimi',
    image: '/images/service-manlift.png',
    duration: '4 Gün',
    price: '₺2.200',
    features: ['Güvenlik Eğitimi', 'Platform Kontrolü', 'Yüksekte Çalışma', 'Belgelendirme'],
    badge: 'MEB Onaylı',
    category: 'is-makineleri'
  },
  {
    title: 'Ekskavatör Operatörlüğü',
    description: 'Altyapı projeleri için kazı teknikleri ve yük transferi uygulamalarına odaklı eğitim.',
    slug: 'ekskavatör-egitimi',
    image: '/images/service-loader.png',
    duration: '6 Gün',
    price: '₺3.200',
    features: ['Kazı Teknikleri', 'Saha Uygulaması', 'İleri Seviye', 'Sertifika'],
    badge: 'İleri Seviye',
    category: 'is-makineleri'
  },
  {
    title: 'Mobil Vinç Operatörlüğü',
    description: 'Mobil vinçlerin kurulumu, denge ağırlıkları ve güvenli yük kaldırma teknikleri.',
    slug: 'mobil-vinc-egitimi',
    image: '/images/service-crane.png',
    duration: '7 Gün',
    price: '₺3.800',
    features: ['Kurulum Eğitimi', 'Yük Kaldırma', 'Güvenlik', 'Profesyonel Belge'],
    category: 'is-makineleri'
  },
  {
    title: 'Tavan Vinci Operatörlüğü',
    description: 'Fabrika içi taşıma, yük dengeleme ve acil durum prosedürleri üzerine eğitim.',
    slug: 'tavan-vinci-egitimi',
    image: '/images/service-ceiling-crane.png',
    duration: '5 Gün',
    price: '₺2.800',
    features: ['Fabrika İçi', 'Yük Dengeleme', 'Acil Durum', 'Belgelendirme'],
    category: 'is-makineleri'
  },
  {
    title: 'Kazıcı Yükleyici (Beko Loder)',
    description: 'İleri seviye manevra, kazı ve yükleme uygulamaları ile saha dersleri.',
    slug: 'beko-loder-egitimi',
    image: '/images/service-loader.png',
    duration: '6 Gün',
    price: '₺3.400',
    features: ['Manevra Eğitimi', 'Kazı & Yükleme', 'Saha Dersleri', 'Sertifika'],
    badge: 'Yeni',
    category: 'is-makineleri'
  },
  {
    title: 'Sabitleyici Platform (Sakson)',
    description: 'Yüksekte bakım-onarım işleri için sabit platform kontrol ve güvenlik standartları.',
    slug: 'sakson-egitimi',
    image: '/images/service-manlift.png',
    duration: '4 Gün',
    price: '₺2.400',
    features: ['Platform Kontrolü', 'Bakım-Onarım', 'Güvenlik', 'Belgelendirme'],
    category: 'is-makineleri'
  },
  {
    title: 'İş Güvenliği Uzmanlığı',
    description: 'Operatörler için iş güvenliği mevzuatı, risk analizi ve saha denetimleri.',
    slug: 'is-guvenligi-egitimi',
    image: '/images/service-forklift.png',
    duration: '3 Gün',
    price: '₺1.800',
    features: ['Mevzuat Eğitimi', 'Risk Analizi', 'Saha Denetimi', 'Sertifika'],
    badge: 'Zorunlu',
    category: 'is-guvenligi'
  }
]

const ServiceCard = ({ service }: { service: Service }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      className="service-detail-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-detail-image">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={250}
          className={`service-image ${isHovered ? 'hovered' : ''}`}
        />
        {service.badge && (
          <div className="service-detail-badge">{service.badge}</div>
        )}
        <div className={`service-image-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="overlay-info">
            <span className="info-duration">⏱️ {service.duration}</span>
            <span className="info-price">💰 {service.price}</span>
          </div>
        </div>
      </div>
      
      <div className="service-detail-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        
        <div className="service-features-list">
          {service.features.map((feature, idx) => (
            <span key={idx} className="feature-tag">
              ✓ {feature}
            </span>
          ))}
        </div>
        
        <div className="service-detail-footer">
          <div className="service-detail-meta">
            <span className="meta-item">
              <strong>Süre:</strong> {service.duration}
            </span>
            <span className="meta-item price-highlight">
              {service.price}
            </span>
          </div>
          <Link href={`/hizmetlerimiz/${service.slug}`} className="btn-header-cta">
            Detayları Gör →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function ServicesList({ activeCategory }: { activeCategory?: string | null }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(activeCategory || null)

  // URL'den gelen kategoriyi takip et
  useEffect(() => {
    if (activeCategory) {
      setSelectedCategory(activeCategory)
    }
  }, [activeCategory])

  const categories = [
    { id: 'is-makineleri', label: 'İş Makineleri Eğitimleri' },
    { id: 'is-guvenligi', label: 'İş Güvenliği Eğitimleri' },
    { id: 'ozel-egitimler', label: 'Özel Eğitim Programları' }
  ]

  const filteredServices = selectedCategory
    ? services.filter(s => s.category === selectedCategory)
    : services

  return (
    <section className="section services-list-section">
      <div className="container">
        <div className="section-header">
          <h2>Tüm Eğitim Programları</h2>
          <p>
            Sıfırdan başlayan eğitim programlarımız, teorik eğitim + saha uygulaması + 
            sınav hazırlık modüllerini içerir.
          </p>
        </div>

        {/* Kategori Filtreleri */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              padding: '0.75rem 1.5rem',
              border: selectedCategory === null ? '2px solid #1a4c80' : '2px solid #e0e0e0',
              borderRadius: '50px',
              background: selectedCategory === null ? '#1a4c80' : 'white',
              color: selectedCategory === null ? 'white' : '#333',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Tümü
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.75rem 1.5rem',
                border: selectedCategory === cat.id ? '2px solid #1a4c80' : '2px solid #e0e0e0',
                borderRadius: '50px',
                background: selectedCategory === cat.id ? '#1a4c80' : 'white',
                color: selectedCategory === cat.id ? 'white' : '#333',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="services-detail-grid">
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <p>Bu kategoride henüz eğitim bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </section>
  )
}