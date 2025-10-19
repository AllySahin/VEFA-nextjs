'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.service || 'Genel Bilgi Talebi',
          message: formData.message || 'Herhangi bir mesaj belirtilmemiş.'
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage('Mesajınız başarıyla gönderildi! E-posta adresinize onay mesajı gönderildi. En kısa sürede sizinle iletişime geçeceğiz.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          consent: false
        })
      } else {
        setSubmitMessage('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      setSubmitMessage('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '3rem',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(44, 62, 80, 0.1)'
    }}>
      <div style={{
        display: 'inline-block',
        padding: '0.5rem 1.25rem',
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        borderRadius: '30px',
        fontSize: '0.85rem',
        fontWeight: '600',
        marginBottom: '1rem',
        letterSpacing: '0.5px'
      }}>
        FORM
      </div>

      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: '1rem',
        color: '#2c3e50',
        fontWeight: '700'
      }}>
        Danışmanlık Formu
      </h2>
      
      <p style={{ 
        color: '#7f8c8d', 
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime geçsin.
      </p>
      
      <form onSubmit={handleSubmit}>
      {submitMessage && (
        <div className={`form-message ${submitMessage.includes('başarıyla') ? 'success' : 'error'}`}>
          {submitMessage}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Ad Soyad *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-posta *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefon *</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">İlgi Alanınız</label>
        <select 
          id="service" 
          name="service" 
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Seçiniz</option>
          <option value="forklift">Forklift Ehliyeti</option>
          <option value="vinc">Vinç Operatörlüğü</option>
          <option value="ekskavatör">Ekskavatör Eğitimi</option>
          <option value="kurumsal">Kurumsal Eğitim</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mesajınız</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          placeholder="Sorularınızı veya taleplerinizi yazınız..."
        />
      </div>

      <div className="form-group checkbox">
        <label>
          <input 
            type="checkbox" 
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required 
          />
          KVKK kapsamında kişisel verilerimin işlenmesini kabul ediyorum.
        </label>
      </div>

      <button 
        type="submit" 
        style={{
          width: '100%',
          padding: '1rem 2rem',
          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '1.05rem',
          fontWeight: '600',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.7 : 1,
          transition: 'all 0.3s ease'
        }}
        disabled={isSubmitting}
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
        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
      </button>
      </form>
    </div>
  )
}