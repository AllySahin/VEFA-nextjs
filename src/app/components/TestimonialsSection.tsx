'use client'

import { useState, useEffect } from 'react'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      course: 'Forklift Operatörlük Eğitimi',
      rating: 5,
      comment: 'VEFA Eğitim Merkezi\'nde aldığım forklift eğitimi sayesinde kariyerimde büyük bir adım attım. Eğitmenler çok deneyimli ve sabırlıydı. Kesinlikle tavsiye ederim.',
      date: 'Ocak 2025'
    },
    {
      name: 'Mehmet Kaya',
      course: 'Mobil Vinc Operatörlüğü',
      rating: 5,
      comment: 'Profesyonel bir eğitim aldım. Teorik ve pratik eğitim dengesi mükemmeldi. Eğitim sonrası hemen iş buldum. Teşekkürler VEFA!',
      date: 'Aralık 2024'
    },
    {
      name: 'Ali Demir',
      course: 'Manlift Operatörlük Eğitimi',
      rating: 5,
      comment: 'Modern ekipmanlar ve uzman eğitmenler ile harika bir eğitim aldım. İş güvenliği konusunda çok şey öğrendim. Çok memnunum.',
      date: 'Kasım 2024'
    },
    {
      name: 'Fatih Öztürk',
      course: 'Beko Loder Eğitimi',
      rating: 5,
      comment: 'Eğitim kalitesi gerçekten üst düzeyde. Pratik yapma imkanı çok fazla. Sertifikamı aldıktan sonra hemen işe başladım.',
      date: 'Ekim 2024'
    },
    {
      name: 'Emre Şahin',
      course: 'İş Güvenliği Eğitimi',
      rating: 5,
      comment: 'İş güvenliği konusunda çok kapsamlı bir eğitim aldım. Eğitmenler alanında uzman ve deneyimli.',
      date: 'Eylül 2024'
    },
    {
      name: 'Mustafa Çelik',
      course: 'Ekskavatör Operatörlüğü',
      rating: 5,
      comment: 'Uygulamalı eğitim çok faydalıydı. Gerçek iş ortamında pratik yapma fırsatı buldum.',
      date: 'Ağustos 2024'
    }
  ]

  const totalSlides = Math.ceil(testimonials.length / itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerView
    const end = start + itemsPerView
    return testimonials.slice(start, end)
  }

  return (
    <section style={{
      padding: '5rem 0',
      background: '#f8f9fa'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#2c3e50'
          }}>
            Müşteri Yorumları
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Eğitim alan kursiyerlerimizin deneyimleri
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative' }}>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#34495e'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2c3e50'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <FiChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#34495e'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2c3e50'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <FiChevronRight />
          </button>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${itemsPerView}, 1fr)`,
            gap: '2rem',
            transition: 'all 0.5s ease'
          }}>
            {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
                border: '1px solid #e0e0e0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              {/* Rating Stars */}
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem',
                fontSize: '1.2rem',
                color: '#f39c12'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} fill="#f39c12" />
                ))}
              </div>

              {/* Comment */}
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
                minHeight: '80px'
              }}>
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div style={{
                borderTop: '1px solid #e0e0e0',
                paddingTop: '1rem'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  marginBottom: '0.25rem'
                }}>
                  {testimonial.name}
                </h4>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  marginBottom: '0.25rem'
                }}>
                  {testimonial.course}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#999'
                }}>
                  {testimonial.date}
                </p>
              </div>
            </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '3rem'
          }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: currentIndex === index ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: currentIndex === index ? '#2c3e50' : '#d0d0d0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 3rem 0 !important;
          }
          button[style*="absolute"] {
            width: 40px !important;
            height: 40px !important;
            left: -10px !important;
          }
          button[style*="absolute"]:last-of-type {
            right: -10px !important;
          }
        }
      `}</style>
    </section>
  )
}
