'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ServiceDetail {
  title: string
  content: {
    overview: string
    curriculum: string[]
    requirements: string[]
    benefits: string[]
  }
  duration: string
  price: string
  certificate: string
}

interface ServiceDetailContentProps {
  service: ServiceDetail
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [selectedPayment, setSelectedPayment] = useState<'full' | 'installment'>('full')
  
  // Parse price to number for calculations
  const priceNumber = parseInt(service.price.replace(/[^0-9]/g, ''))
  const installmentCount = 6
  const monthlyPayment = Math.ceil(priceNumber / installmentCount)

  const paymentOptions = [
    {
      id: 'full',
      title: 'Peşin Ödeme',
      price: `${priceNumber} TL`,
      discount: '%10 İndirim',
      discountedPrice: `${Math.ceil(priceNumber * 0.9)} TL`,
      description: 'Tek seferde ödeme ile %10 indirim kazanın',
      badge: 'En Avantajlı'
    },
    {
      id: 'installment',
      title: 'Taksitli Ödeme',
      price: `${monthlyPayment} TL x ${installmentCount} Ay`,
      totalPrice: `Toplam: ${priceNumber} TL`,
      description: '6 aya kadar vade farksız taksit imkanı',
      badge: 'Vade Farksız'
    }
  ]

  return (
    <>
      <section className="section">
        <div className="container service-detail-grid">
          <article className="service-detail-content">
            <h2>Eğitim Hakkında</h2>
            <p>{service.content.overview}</p>

            <h3>Eğitim Müfredatı</h3>
            <ul className="curriculum-list">
              {service.content.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Gereksinimler</h3>
            <ul className="requirements-list">
              {service.content.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className="service-detail-sidebar">
            <div className="service-info-card">
              <h3>Eğitim Bilgileri</h3>
              <div className="info-item">
                <span className="label">Süre:</span>
                <span className="value">{service.duration}</span>
              </div>
              <div className="info-item">
                <span className="label">Fiyat:</span>
                <span className="value">{service.price}</span>
              </div>
              <div className="info-item">
                <span className="label">Sertifika:</span>
                <span className="value">{service.certificate}</span>
              </div>
              
              <h4>Eğitimin Faydaları</h4>
              <ul className="benefits-list">
                {service.content.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              {/* Payment Options */}
              <div className="payment-options-section">
                <h4>Ödeme Seçenekleri</h4>
                <div className="payment-options">
                  {paymentOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`payment-option ${selectedPayment === option.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPayment(option.id as 'full' | 'installment')}
                    >
                      <div className="option-header">
                        <div className="option-radio">
                          <input
                            type="radio"
                            name="payment"
                            value={option.id}
                            checked={selectedPayment === option.id}
                            onChange={() => setSelectedPayment(option.id as 'full' | 'installment')}
                          />
                        </div>
                        <div className="option-info">
                          <h5>{option.title}</h5>
                          {option.badge && <span className="option-badge">{option.badge}</span>}
                        </div>
                      </div>
                      <div className="option-pricing">
                        <div className="price-main">{option.price}</div>
                        {option.id === 'full' && (
                          <>
                            <div className="price-original">Orijinal: {priceNumber} TL</div>
                            <div className="price-discount">{option.discount}</div>
                          </>
                        )}
                        {option.id === 'installment' && (
                          <div className="price-total">{option.totalPrice}</div>
                        )}
                      </div>
                      <p className="option-description">{option.description}</p>
                    </div>
                  ))}
                </div>

                <div className="purchase-actions">
                  <Link
                    href={`/odeme?service=${encodeURIComponent(service.title)}&price=${encodeURIComponent(
                      selectedPayment === 'full' 
                        ? `${Math.ceil(priceNumber * 0.9)} TL` 
                        : `${priceNumber} TL`
                    )}&paymentType=${selectedPayment}&installments=${installmentCount}`}
                    className="btn-header-cta"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {selectedPayment === 'full' 
                      ? `Peşin Satın Al - ${Math.ceil(priceNumber * 0.9)} TL`
                      : `Taksitli Satın Al - ${monthlyPayment} TL/ay`
                    }
                  </Link>
                  
                  <Link href="/iletisim" className="btn-contact">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Bilgi Al
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Hemen Başlayın</h2>
            <p>
              Profesyonel kariyerinize bir adım daha yaklaşın. 
              Uzman ekibimiz size en uygun eğitim planını hazırlasın.
            </p>
            <div className="cta-actions">
              <Link href="/iletisim" className="btn btn-primary btn-lg">
                Kayıt Ol
              </Link>
              <Link href="/hizmetlerimiz" className="btn btn-secondary btn-lg">
                Diğer Eğitimler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}