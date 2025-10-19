'use client'

interface ProcessStep {
  step: number
  title: string
  description: string
  details: string[]
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Kayıt ve Danışmanlık',
    description: 'İhtiyaçlarınızı belirleyerek size en uygun eğitim programını öneriyoruz.',
    details: [
      'Ücretsiz program danışmanlığı',
      'Ödeme planı seçenekleri',
      'Hızlı kayıt işlemleri'
    ]
  },
  {
    step: 2,
    title: 'Teorik Eğitim',
    description: 'Deneyimli eğitmenlerimizle kapsamlı teorik eğitim alırsınız.',
    details: [
      'Uzman eğitmen kadrosu',
      'Güncel müfredat',
      'İnteraktif ders materyalleri'
    ]
  },
  {
    step: 3,
    title: 'Pratik Eğitim',
    description: 'Modern araç ve ekipmanlarla uygulamalı pratik eğitim yaparsınız.',
    details: [
      'Gerçek araçlar ile eğitim',
      'Saha uygulamaları',
      'Birebir eğitmen desteği'
    ]
  },
  {
    step: 4,
    title: 'Sınav ve Belgelendirme',
    description: 'MEB onaylı sınavı geçerek sertifikanızı alırsınız.',
    details: [
      'MEB onaylı sınav',
      'Geçerli sertifika',
      'Dijital belge sistemi'
    ]
  }
]

export default function ProcessSection() {
  return (
    <section className="process-section-minimal">
      <div className="container">
        <div className="process-header-minimal">
          <h2>4 Adımda Başarıya</h2>
          <p>Kayıttan sertifika alımına kadar profesyonel süreç</p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={step.step} className="timeline-item">
              <div className="timeline-number">{step.step}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}