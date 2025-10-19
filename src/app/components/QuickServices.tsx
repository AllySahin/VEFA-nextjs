'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  linkText: string
  image: string
  badge?: string
  price?: string
}

const QuickServiceCard = ({ title, description, href, linkText, image, badge, price }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="quick-service-card-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-card-image">
        <Image
          src={image}
          alt={title}
          width={320}
          height={200}
          className={`card-image ${isHovered ? 'hovered' : ''}`}
        />
        {badge && (
          <div className="service-card-badge">{badge}</div>
        )}
        <div className={`image-overlay ${isHovered ? 'visible' : ''}`}></div>
      </div>
      <div className="service-card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        {price && (
          <div className="service-price">{price}</div>
        )}
        <Link href={href} className="service-card-link">
          {linkText} →
        </Link>
      </div>
    </div>
  )
}

export default function QuickServices() {
  const [services, setServices] = useState<ServiceCardProps[]>([])
  const [loading, setLoading] = useState(true)

  // Varsayılan eğitimler (API'den gelmediyse)
  const defaultServices = [
    {
      title: 'Forklift Eğitimi',
      description: 'MEB onaylı forklift operatör belgesi alın. Teori ve pratik eğitim ile sertifika garantisi.',
      href: '/hizmetlerimiz/forklift',
      linkText: 'Detayları Gör',
      image: '/images/service-forklift.png',
      badge: 'Popüler',
      price: '₺2.500'
    },
    {
      title: 'Manlift Eğitimi',
      description: 'Yüksekte çalışma platformu operatör eğitimi. İş güvenliği sertifikası dahil.',
      href: '/hizmetlerimiz/manlift',
      linkText: 'Detayları Gör',
      image: '/images/service-manlift.png',
      badge: 'MEB Onaylı',
      price: '₺2.200'
    },
    {
      title: 'Ekskavatör Eğitimi',
      description: 'İş makineleri operatör belge eğitimi. İleri seviye teknikler dahil.',
      href: '/hizmetlerimiz/ekskavatör',
      linkText: 'Detayları Gör',
      image: '/images/service-loader.png',
      badge: 'Yeni',
      price: '₺3.200'
    },
    {
      title: 'Kurumsal Eğitim',
      description: 'Şirketinize özel eğitim paketleri. Grup indirimleri ve yerinde eğitim.',
      href: '/kurumsal',
      linkText: 'Teklif Al',
      image: '/images/slider-forklift-manlift.png',
      badge: 'İndirimli',
      price: 'Özel Fiyat'
    },
    {
      title: 'Vinç Operatörlüğü',
      description: 'Mobil vinç ve kule vinç operatör eğitimi. Profesyonel sertifika programı.',
      href: '/hizmetlerimiz/vinc',
      linkText: 'Detayları Gör',
      image: '/images/service-vinc.png',
      badge: 'Sertifikalı',
      price: '₺3.800'
    },
    {
      title: 'İş Güvenliği Eğitimi',
      description: 'İşyeri güvenlik uzmanı eğitimi ve çalışan güvenlik bilinçlendirme programları.',
      href: '/hizmetlerimiz/is-guvenligi',
      linkText: 'Detayları Gör',
      image: '/images/service-forklift.png',
      badge: 'Zorunlu',
      price: '₺1.800'
    },
    {
      title: 'Beko Loder Eğitimi',
      description: 'Kazıcı yükleyici operatör eğitimi. Kazı ve yükleme teknikleri.',
      href: '/hizmetlerimiz/beko-loder',
      linkText: 'Detayları Gör',
      image: '/images/service-loader.png',
      badge: 'Talep Edilen',
      price: '₺3.400'
    },
    {
      title: 'Dozer Operatörlüğü',
      description: 'Buldozer ve iş makineleri operatör sertifikası. Arazi düzenleme eğitimi.',
      href: '/hizmetlerimiz/dozer',
      linkText: 'Detayları Gör',
      image: '/images/service-crane.png',
      badge: 'Profesyonel',
      price: '₺3.600'
    }
  ]

  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        // Admin panelden öne çıkan kursları al
        const response = await fetch('http://localhost:3002/api/featured-courses')
        if (response.ok) {
          const data = await response.json()
          if (data.success && data.data.length > 0) {
            setServices(data.data)
          } else {
            setServices(defaultServices)
          }
        } else {
          setServices(defaultServices)
        }
      } catch (error) {
        console.log('API\'den kurslar alınamadı, varsayılan kurslar kullanılıyor:', error)
        setServices(defaultServices)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedCourses()
  }, [])

  if (loading) {
    return (
      <section className="quick-services-scroll" id="hizmetler">
        <div className="scroll-container">
          <div className="scroll-track">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '200px',
              fontSize: '1.2rem',
              color: '#666'
            }}>
              Eğitimler yükleniyor...
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Sonsuz scroll için kartları 3 kez tekrarla
  const duplicatedServices = [...services, ...services, ...services]

  return (
    <section className="quick-services-scroll" id="hizmetler">
      <div className="scroll-container">
        <div className="scroll-track">
          {duplicatedServices.map((service, index) => (
            <QuickServiceCard key={`${service.title}-${index}`} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}