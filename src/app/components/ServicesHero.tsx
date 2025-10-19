'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface FloatingService {
  id: number
  name: string
  top: string
  left: string
  delay: number
  duration: number
}

export default function ServicesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services: FloatingService[] = [
    {
      id: 1,
      name: 'Forklift Operatörlüğü',
      top: '12%',
      left: '8%',
      delay: 0,
      duration: 6
    },
    {
      id: 2,
      name: 'Manlift Eğitimi',
      top: '22%',
      left: '78%',
      delay: 0,
      duration: 7
    },
    {
      id: 3,
      name: 'Ekskavatör',
      top: '38%',
      left: '12%',
      delay: 0,
      duration: 6.5
    },
    {
      id: 4,
      name: 'Mobil Vinç',
      top: '58%',
      left: '75%',
      delay: 0,
      duration: 7.5
    },
    {
      id: 5,
      name: 'Beko Loder',
      top: '72%',
      left: '15%',
      delay: 0,
      duration: 6.8
    },
    {
      id: 6,
      name: 'Tavan Vinci',
      top: '28%',
      left: '45%',
      delay: 0,
      duration: 7.2
    },
    {
      id: 7,
      name: 'İş Güvenliği',
      top: '65%',
      left: '48%',
      delay: 0,
      duration: 6.3
    },
    {
      id: 8,
      name: 'Greyder Operatörlüğü',
      top: '48%',
      left: '82%',
      delay: 0,
      duration: 7.8
    },
    {
      id: 9,
      name: 'Kazıcı Yükleyici',
      top: '82%',
      left: '52%',
      delay: 0,
      duration: 6.6
    },
    {
      id: 10,
      name: 'Dozer Operatörlüğü',
      top: '18%',
      left: '25%',
      delay: 0,
      duration: 7.4
    }
  ]



  return (
    <section className="services-hero-section">
      <div className="services-hero-background">
        <Image
          src="/images/service-ceiling-crane.png"
          alt="VEFA Eğitim Programları"
          fill
          className="hero-bg-image"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="services-hero-overlay"></div>
      </div>

      {/* Floating Service Boxes */}
      {mounted && (
        <div className="floating-services-container">
          {services.map((service) => (
            <div
              key={service.id}
              className="floating-service-box"
              style={{
                top: service.top,
                left: service.left,
                animationDelay: `${service.delay}s`,
                animationDuration: `${service.duration}s`
              }}
            >
              <span className="service-name">{service.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="container services-hero-content">
        <div className="hero-content-wrapper">
          <div className="hero-badge">
            <span className="badge-text">Sertifikalı Eğitimler</span>
          </div>
          <h1 className="hero-title">96+ İş Makinesi Eğitim Programı</h1>
          <p className="hero-description">
            Türkiye'nin en kapsamlı iş makineleri eğitim merkezi. 96'dan fazla farklı 
            makine türü için MEB onaylı operatörlük eğitimleri. Forklift'ten ekskavatöre, 
            vinçten dozere kadar tüm iş makineleri sertifika programları.
          </p>
        </div>
      </div>
    </section>
  )
}