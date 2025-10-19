'use client'

import { useState } from 'react'
import { FiStar } from 'react-icons/fi'

interface ReviewFormData {
  name: string
  email: string
  rating: number
  comment: string
  consent: boolean
}

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    email: '',
    rating: 5,
    comment: '',
    consent: false
  })

  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // API endpoint'inizi buraya ekleyin
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('Yorumunuz başarıyla gönderildi! İncelendikten sonra yayınlanacaktır.')
        setFormData({
          name: '',
          email: '',
          rating: 5,
          comment: '',
          consent: false
        })
      } else {
        setSubmitMessage('Yorum gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Yorum gönderme hatası:', error)
      setSubmitMessage('Yorum gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section style={{ 
      padding: '5rem 0',
      background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
              color: 'white',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '1px'
            }}>
              YORUM YAP
            </div>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: '#2c3e50',
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Deneyiminizi Paylaşın
            </h2>
            <p style={{ 
              color: '#7f8c8d', 
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              VEFA İş Makineleri Kursu hakkındaki görüşlerinizi bizimle paylaşın
            </p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(44, 62, 80, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              {submitMessage && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  background: submitMessage.includes('başarıyla') 
                    ? '#d4edda' 
                    : '#f8d7da',
                  color: submitMessage.includes('başarıyla') 
                    ? '#155724' 
                    : '#721c24',
                  border: `1px solid ${submitMessage.includes('başarıyla') ? '#c3e6cb' : '#f5c6cb'}`
                }}>
                  {submitMessage}
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#2c3e50',
                  fontWeight: '600'
                }}>
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    borderRadius: '12px',
                    border: '2px solid #e0e0e0',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#2c3e50'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#2c3e50',
                  fontWeight: '600'
                }}>
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    borderRadius: '12px',
                    border: '2px solid #e0e0e0',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#2c3e50'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.75rem',
                  color: '#2c3e50',
                  fontWeight: '600'
                }}>
                  Değerlendirme *
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '2rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <FiStar
                        size={32}
                        fill={(hoveredRating || formData.rating) >= star ? '#f39c12' : 'none'}
                        color="#f39c12"
                      />
                    </button>
                  ))}
                  <span style={{ 
                    marginLeft: '1rem', 
                    fontSize: '1.2rem',
                    color: '#7f8c8d',
                    alignSelf: 'center'
                  }}>
                    {formData.rating} / 5
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#2c3e50',
                  fontWeight: '600'
                }}>
                  Yorumunuz *
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Eğitim deneyiminizi, eğitmen kadromuz ve hizmet kalitemiz hakkındaki görüşlerinizi paylaşın..."
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    borderRadius: '12px',
                    border: '2px solid #e0e0e0',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#2c3e50'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  color: '#555'
                }}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    style={{
                      width: '18px',
                      height: '18px',
                      cursor: 'pointer'
                    }}
                  />
                  Yorumumu yayınlanmasına ve KVKK kapsamında işlenmesine onay veriyorum.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: isSubmitting 
                    ? '#95a5a6'
                    : 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(44, 62, 80, 0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Yorumu Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
