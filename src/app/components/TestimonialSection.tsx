'use client'

import { useState } from 'react'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  text: string
  rating: number
  badge?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mehmet Kaya',
    position: 'Depo Sorumlusu',
    company: 'ABC Lojistik',
    text: 'VEFA Eğitim Merkezi\'nde aldığım forklift eğitimi sayesinde kariyerimde büyük bir adım attım. Eğitmenler çok deneyimli ve sabırlıydı.',
    rating: 5,
    badge: 'Forklift'
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    position: 'İnşaat Mühendisi',
    company: 'Yapı İnşaat',
    text: 'Manlift eğitimi için doğru tercihi yaptığımı düşünüyorum. Hem teorik hem pratik eğitim çok kapsamlıydı.',
    rating: 5,
    badge: 'Manlift'
  },
  {
    id: 3,
    name: 'Ali Öztürk',
    position: 'Operatör',
    company: 'İnşaat A.Ş.',
    text: 'Ekskavatör operatör belgesini burada aldım. Eğitim kalitesi ve sonrasındaki iş bulma desteği harikaydı.',
    rating: 5,
    badge: 'Ekskavatör'
  },
  {
    id: 4,
    name: 'Fatma Yılmaz',
    position: 'Lojistik Uzmanı',
    company: 'Kargo Plus',
    text: 'Kurumsal eğitim paketinden çok memnunum. Tüm ekibimiz aynı kalitede eğitim aldı.',
    rating: 5,
    badge: 'Kurumsal'
  },
  {
    id: 5,
    name: 'Hasan Çelik',
    position: 'İnşaat İşçisi',
    company: 'Güven İnşaat',
    text: 'Vinç operatörü eğitimi hayalimdi. Artık daha iyi bir işte çalışıyorum.',
    rating: 5,
    badge: 'Vinç'
  },
  {
    id: 6,
    name: 'Zeynep Ak',
    position: 'Güvenlik Uzmanı',
    company: 'Safe Work Ltd.',
    text: 'İş güvenliği eğitimi kariyerimi değiştirdi. Çok kapsamlı ve pratik bir eğitimdi.',
    rating: 5,
    badge: 'İş Güvenliği'
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`testimonial-star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ))
  }

  return (
    <div 
      className="testimonial-card-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="testimonial-card-header">
        {testimonial.badge && (
          <div className="testimonial-card-badge">{testimonial.badge}</div>
        )}
        <div className="testimonial-quote-icon">"</div>
      </div>
      
      <div className="testimonial-card-content">
        <p className="testimonial-text">{testimonial.text}</p>
        
        <div className="testimonial-rating">
          {renderStars(testimonial.rating)}
        </div>
        
        <div className="testimonial-author">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-info">{testimonial.position} - {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialSection() {
  // Sonsuz scroll için yorumları 3 kez tekrarla
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="testimonial-section-scroll">
      <div className="scroll-container">
        <div className="testimonial-scroll-track">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}