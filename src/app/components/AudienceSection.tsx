import Link from 'next/link'

interface AudienceCard {
  title: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
}

const audienceCards: AudienceCard[] = [
  {
    title: 'Bireysel Eğitim',
    description: 'İş arayanlara ve kariyerlerini geliştirmek isteyenlere',
    features: [
      'Esnek eğitim saatleri',
      'Kişiye özel danışmanlık',
      'İş bulma desteği',
      'Uygun fiyat seçenekleri'
    ],
    buttonText: 'Hemen Başla',
    buttonLink: '/iletisim'
  },
  {
    title: 'Kurumsal Eğitim',
    description: 'Şirketler ve kurumlar için özel eğitim paketleri',
    features: [
      'Yerinde eğitim imkanı',
      'Grup indirimleri',
      'Özel eğitim programları',
      'Uzman eğitmen kadrosu'
    ],
    buttonText: 'Teklif Al',
    buttonLink: '/kurumsal'
  }
]

export default function AudienceSection() {
  return (
    <section className="audience-section-enhanced">
      <div className="container">
        <div className="audience-cards-enhanced">
          {audienceCards.map((card, index) => (
            <div key={index} className={`audience-card-enhanced ${index === 0 ? 'individual' : 'corporate'}`}>
              <div className="card-icon">
                {index === 0 ? (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" fill="currentColor"/>
                  </svg>
                )}
              </div>
              <div className="card-enhanced-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="features-enhanced">
                  {card.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={card.buttonLink} className="btn-header-cta">
                {card.buttonText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}