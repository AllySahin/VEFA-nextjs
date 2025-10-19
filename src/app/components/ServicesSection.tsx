'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface ServiceCategory {
  id: string
  title: string
  description: string
  image: string
  programs: number
  popularTag?: boolean
}

const categories: ServiceCategory[] = [
  {
    id: 'is-makineleri',
    title: 'İş Makineleri Eğitimleri',
    description: 'Forklift, manlift, ekskavatör, yükleyici ve daha fazlası için profesyonel operatör eğitimleri',
    image: '/images/service-forklift.png',
    programs: 15,
    popularTag: true
  },
  {
    id: 'is-guvenligi',
    title: 'İş Güvenliği Eğitimleri',
    description: 'İşyeri güvenliği uzmanı, çalışan güvenliği ve risk değerlendirmesi eğitimleri',
    image: '/images/service-crane.png',
    programs: 12
  },
  {
    id: 'ozel-egitimler',
    title: 'Özel Eğitim Programları',
    description: 'Kurumsal eğitimler ve özel sektör ihtiyaçlarına yönelik özelleştirilmiş programlar',
    image: '/images/service-loader.png',
    programs: 10
  }
]

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="services-categories-section">
      <div className="container">
        <div className="categories-header">
          <span className="section-badge">Eğitim Kategorileri</span>
          <h2 className="section-title">Sizin İçin En Uygun Programı Bulun</h2>
          <p className="section-description">
            MEB onaylı sertifikalı eğitim programlarımız ile kariyerinizi ileriye taşıyın.<br />
            Uzman eğitmenlerimiz ve modern eğitim olanaklarımızla başarıya giden yolda yanınızdayız.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/hizmetlerimiz?kategori=${category.id}`}
              className="category-card"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {category.popularTag && (
                <div className="popular-badge">Popüler</div>
              )}
              
              <div className="category-image-wrapper">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={400}
                  height={300}
                  className={`category-image ${hoveredId === category.id ? 'hovered' : ''}`}
                />
                <div className={`category-overlay ${hoveredId === category.id ? 'visible' : ''}`}>
                  <div className="programs-count">
                    <span className="count-number">{category.programs}</span>
                    <span className="count-label">Eğitim Programı</span>
                  </div>
                </div>
              </div>

              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-action">
                  <span className="action-text">Programları İncele</span>
                  <span className="action-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="categories-footer">
          <div className="footer-content">
            <h3>Aradığınız programı bulamadınız mı?</h3>
            <p>Size özel eğitim programları oluşturabiliriz. Detaylı bilgi için bizimle iletişime geçin.</p>
          </div>
          <div className="footer-actions">
            <Link href="/hizmetlerimiz" className="btn-header-cta">
              Tüm Programları Gör
            </Link>
            <Link href="/iletisim" className="btn-contact">
              Bize Ulaşın
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}