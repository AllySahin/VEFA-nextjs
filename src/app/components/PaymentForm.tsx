'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface PaymentData {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardHolder: string
  email: string
  phone: string
  billingAddress: {
    name: string
    address: string
    city: string
    postalCode: string
    country: string
  }
}

export default function PaymentForm() {
  const searchParams = useSearchParams()
  const service = searchParams.get('service') || 'Forklift Eğitimi'
  const price = searchParams.get('price') || '₺2.500'
  const paymentType = searchParams.get('paymentType') || 'full'
  const installments = searchParams.get('installments') || '1'
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
    email: '',
    phone: '',
    billingAddress: {
      name: '',
      address: '',
      city: '',
      postalCode: '',
      country: 'Türkiye'
    }
  })

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('billingAddress.')) {
      const addressField = field.split('.')[1]
      setPaymentData(prev => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [addressField]: value
        }
      }))
    } else {
      setPaymentData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    handleInputChange('cardNumber', formatted)
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value)
    handleInputChange('expiryDate', formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Generate transaction ID
      const transactionId = `VEFA${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`
      
      // Send confirmation email
      const emailData = {
        email: paymentData.email,
        name: paymentData.billingAddress.name || paymentData.cardHolder,
        service,
        price,
        paymentType,
        installments: paymentType === 'installment' ? installments : undefined,
        phone: paymentData.phone,
        transactionId
      }

      // Send email notification
      try {
        await fetch('/api/send-payment-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData)
        })
      } catch (emailError) {
        console.error('E-posta gönderme hatası:', emailError)
        // Don't block the success flow if email fails
      }

      setIsProcessing(false)
      setStep(3) // Success step
      
    } catch (error) {
      console.error('Ödeme hatası:', error)
      setIsProcessing(false)
      // Handle payment error
    }
  }

  const nextStep = () => {
    if (step < 2) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (step === 3) {
    return (
      <section className="payment-success">
        <div className="container">
          <div className="success-content">
            <div className="success-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#10b981"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>Ödeme Başarılı!</h2>
            <p>
              <strong>{service}</strong> eğitimi için ödemeniz başarıyla alınmıştır.
            </p>
            <div className="success-details">
              <div className="detail">
                <span>Tutar:</span>
                <span>{price}</span>
              </div>
              <div className="detail">
                <span>İşlem Tarihi:</span>
                <span>{new Date().toLocaleDateString('tr-TR')}</span>
              </div>
              <div className="detail">
                <span>E-posta:</span>
                <span>{paymentData.email}</span>
              </div>
            </div>
            <div className="email-notification">
              <div className="email-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#10b981" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="#10b981" strokeWidth="2"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#10b981"/>
                </svg>
              </div>
              <div className="email-content">
                <h4>E-posta Gönderildi!</h4>
                <p>
                  Ödeme onayı ve eğitim detayları <strong>{paymentData.email}</strong> adresine gönderildi.
                  Eğitim koordinatörümüz en kısa sürede sizinle iletişime geçecektir.
                </p>
              </div>
            </div>
            <p className="success-info">
              Spam klasörünüzü de kontrol etmeyi unutmayın. Herhangi bir sorunuz için 
              <a href="mailto:destek@vefaegitim.com"> destek@vefaegitim.com</a> adresinden 
              bizimle iletişime geçebilirsiniz.
            </p>
            <div className="success-actions">
              <a href="/" className="btn-header-cta">Ana Sayfa</a>
              <a href="/hizmetlerimiz" className="btn-secondary">Diğer Eğitimler</a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="payment-section">
      <div className="container">
        <div className="payment-container">
          {/* Progress Steps */}
          <div className="payment-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Kişisel Bilgiler</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Ödeme Bilgileri</span>
            </div>
          </div>

          <div className="payment-content">
            {/* Order Summary */}
            <div className="order-summary">
              <h3>Sipariş Özeti</h3>
              <div className="order-item">
                <div className="item-info">
                  <h4>{service}</h4>
                  <p>MEB onaylı sertifikalı eğitim programı</p>
                  {paymentType === 'installment' && (
                    <div className="installment-info">
                      <span className="installment-badge">Taksitli Ödeme</span>
                      <p>{installments} aya kadar vade farksız taksit</p>
                    </div>
                  )}
                  {paymentType === 'full' && (
                    <div className="discount-info">
                      <span className="discount-badge">%10 Peşin İndirimi</span>
                      <p>Tek seferde ödeme avantajı</p>
                    </div>
                  )}
                </div>
                <div className="item-price">{price}</div>
              </div>
              <div className="order-features">
                <div className="feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Sertifika garantisi</span>
                </div>
                <div className="feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>İş bulma desteği</span>
                </div>
                <div className="feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                  <span>Uzman eğitmen kadrosu</span>
                </div>
              </div>
              <div className="order-total">
                <span>Toplam</span>
                <span>{price}</span>
              </div>
            </div>

            {/* Payment Form */}
            <div className="payment-form">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="form-step">
                    <h3>Kişisel Bilgiler</h3>
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="email">E-posta Adresi *</label>
                        <input
                          type="email"
                          id="email"
                          value={paymentData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Telefon Numarası *</label>
                        <input
                          type="tel"
                          id="phone"
                          value={paymentData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group full-width">
                        <label htmlFor="billingName">Ad Soyad *</label>
                        <input
                          type="text"
                          id="billingName"
                          value={paymentData.billingAddress.name}
                          onChange={(e) => handleInputChange('billingAddress.name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group full-width">
                        <label htmlFor="billingAddress">Adres *</label>
                        <textarea
                          id="billingAddress"
                          value={paymentData.billingAddress.address}
                          onChange={(e) => handleInputChange('billingAddress.address', e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">Şehir *</label>
                        <input
                          type="text"
                          id="city"
                          value={paymentData.billingAddress.city}
                          onChange={(e) => handleInputChange('billingAddress.city', e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="postalCode">Posta Kodu</label>
                        <input
                          type="text"
                          id="postalCode"
                          value={paymentData.billingAddress.postalCode}
                          onChange={(e) => handleInputChange('billingAddress.postalCode', e.target.value)}
                        />
                      </div>
                    </div>
                    <button type="button" onClick={nextStep} className="btn-header-cta">
                      Devam Et
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step">
                    <h3>Kart Bilgileri</h3>
                    <div className="form-grid">
                      <div className="form-group full-width">
                        <label htmlFor="cardHolder">Kart Üzerindeki İsim *</label>
                        <input
                          type="text"
                          id="cardHolder"
                          value={paymentData.cardHolder}
                          onChange={(e) => handleInputChange('cardHolder', e.target.value.toUpperCase())}
                          required
                        />
                      </div>
                      <div className="form-group full-width">
                        <label htmlFor="cardNumber">Kart Numarası *</label>
                        <input
                          type="text"
                          id="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="expiryDate">Son Kullanma Tarihi *</label>
                        <input
                          type="text"
                          id="expiryDate"
                          value={paymentData.expiryDate}
                          onChange={handleExpiryDateChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cvv">CVV *</label>
                        <input
                          type="text"
                          id="cvv"
                          value={paymentData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                          placeholder="123"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                    <div className="security-info">
                      <div className="security-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="9" cy="9" r="1" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Güvenli Ödeme</strong>
                        <p>Tüm ödeme bilgileriniz SSL sertifikası ile korunmaktadır.</p>
                      </div>
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={prevStep} className="btn-back">
                        Geri
                      </button>
                      <button type="submit" disabled={isProcessing} className="btn-header-cta">
                        {isProcessing ? (
                          <>
                            <div className="loading-spinner"></div>
                            İşleniyor...
                          </>
                        ) : (
                          `Ödeme Yap ${price}`
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}