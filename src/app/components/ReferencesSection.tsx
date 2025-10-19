'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Reference {
  id: number
  name: string
  logo: string
}

const references: Reference[] = [
  { id: 1, name: 'Mercedes-Benz', logo: '/images/references/mercedes.png' },
  { id: 2, name: 'Ford Otosan', logo: '/images/references/ford.png' },
  { id: 3, name: 'Tofaş', logo: '/images/references/tofas.png' },
  { id: 4, name: 'Bosch', logo: '/images/references/bosch.png' },
  { id: 5, name: 'Schneider Electric', logo: '/images/references/schneider.png' },
  { id: 6, name: 'Siemens', logo: '/images/references/siemens.png' },
  { id: 7, name: 'Arçelik', logo: '/images/references/arcelik.png' },
  { id: 8, name: 'Vestel', logo: '/images/references/vestel.png' },
  { id: 9, name: 'Coca-Cola', logo: '/images/references/cocacola.png' },
  { id: 10, name: 'Unilever', logo: '/images/references/unilever.png' },
]

export default function ReferencesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Logoları iki kez tekrarla (kesintisiz animasyon için)
  const duplicatedReferences = [...references, ...references]

  return (
    <section className="references-section">
      <div className="container" style={{ maxWidth: '95%' }}>
        <div className="references-slider-container">
          <div className={`references-track ${mounted ? 'animate' : ''}`}>
            {duplicatedReferences.map((reference, index) => (
              <div key={`${reference.id}-${index}`} className="reference-item">
                <div className="reference-logo-wrapper">
                  <Image
                    src={reference.logo}
                    alt={reference.name}
                    width={160}
                    height={80}
                    className="reference-logo"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
