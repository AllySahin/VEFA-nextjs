'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    image: '/images/slider-forklift-manlift.png',
    alt: 'Forklift ve Manlift Eğitimi',
    badge: 'Yeni Dönem',
    title: 'Profesyonel İş Makineleri Eğitimi',
    description: 'MEB onaylı programlarımızla forklift ve manlift operatörlük eğitimi alın. İlk 50 kayıtta %20 indirim fırsatını kaçırmayın!',
    primaryLink: '/iletisim',
    primaryText: 'Hemen Kayıt Ol',
    secondaryLink: '/hizmetlerimiz',
    secondaryText: 'Eğitimleri İncele'
  },
  {
    id: 2,
    image: '/images/slider-corporate.png',
    alt: 'Kurumsal Eğitim',
    badge: 'MEB Onaylı',
    title: 'Kurumsal Eğitim Paketleri',
    description: 'Şirketiniz için özel tasarlanmış grup eğitimleri. 10+ çalışan gruplarına özel fiyatlandırma ve yerinde eğitim imkanı.',
    primaryLink: '/kurumsal',
    primaryText: 'Teklif Al',
    secondaryLink: '/iletisim',
    secondaryText: 'İletişime Geç'
  },
  {
    id: 3,
    image: '/images/slider-excavator.png',
    alt: 'Ekskavatör Eğitimi',
    badge: '%97 Başarı',
    title: 'İleri Seviye Operatörlük',
    description: 'Ekskavatör ve özel iş makineleri için ileri seviye eğitim programları. %97 başarı oranımızla garantili sertifika.',
    primaryLink: '/hizmetlerimiz',
    primaryText: 'Programları Gör',
    secondaryLink: '/iletisim',
    secondaryText: 'Kayıt Ol'
  }
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const totalSlides = slides.length
  const autoPlayInterval = 6000

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide, autoPlayInterval])

  const handleMouseEnter = () => setIsPlaying(false)
  const handleMouseLeave = () => setIsPlaying(true)

  return (
    <section className="main-hero-slider" id="hero">
      <div 
        className="hero-slider-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="hero-slider-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className={`hero-slide ${index === currentIndex ? 'active' : ''}`}>
              <div className="slide-background">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  className="slide-image"
                  fill
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="slide-overlay"></div>
              </div>
              <div className="container">
                <div className="slide-content">
                  <div className="slide-badge">
                    <span className="badge-text">{slide.badge}</span>
                  </div>
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-actions">
                    <Link href={slide.primaryLink} className="btn-hero-primary">
                      {slide.primaryText}
                    </Link>
                    <Link 
                      href={slide.secondaryLink} 
                      className={`btn-hero-secondary ${slide.primaryText === 'Teklif Al' ? 'mobile-hidden' : ''}`}
                    >
                      {slide.secondaryText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="hero-slider-control prev" 
          aria-label="Önceki slayt"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button 
          className="hero-slider-control next" 
          aria-label="Sonraki slayt"
          onClick={nextSlide}
        >
          ›
        </button>
        
        <div className="hero-slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Slayt ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}