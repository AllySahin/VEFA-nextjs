'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { serviceDetails } from '../lib/services'

interface SearchResult {
  id: string
  title: string
  description: string
  price: string
  duration: string
  image: string
  slug: string
  keywords: string[]
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Eğitim verilerini arama formatına dönüştür
  const searchableServices: SearchResult[] = Object.values(serviceDetails).map(service => ({
    id: service.slug,
    title: service.title,
    description: service.description,
    price: service.price,
    duration: service.duration,
    image: service.backgroundImage,
    slug: service.slug,
    keywords: [
      service.title.toLowerCase(),
      service.description.toLowerCase(),
      service.slug.toLowerCase(),
      // Ek anahtar kelimeler
      ...(service.title.includes('Forklift') ? ['forklift', 'yük', 'depo', 'liman'] : []),
      ...(service.title.includes('Vinç') ? ['vinç', 'crane', 'kaldırma', 'inşaat'] : []),
      ...(service.title.includes('Ekskavatör') ? ['ekskavatör', 'kazma', 'hafriyat', 'inşaat'] : []),
      ...(service.title.includes('Manlift') ? ['manlift', 'platform', 'yüksek', 'bakım'] : []),
      ...(service.title.includes('Kepçe') ? ['kepçe', 'loader', 'yükleme', 'hafriyat'] : []),
      ...(service.title.includes('Kurumsal') ? ['kurumsal', 'şirket', 'toplu', 'grup'] : [])
    ]
  }))

  // Arama fonksiyonu
  const performSearch = (query: string) => {
    setIsLoading(true)
    
    if (!query.trim()) {
      setFilteredResults([])
      setIsLoading(false)
      return
    }

    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
    
    const results = searchableServices.filter(service => {
      return searchTerms.some(term => 
        service.keywords.some(keyword => keyword.includes(term))
      )
    })

    // Relevance score hesaplama
    const scoredResults = results.map(service => {
      let score = 0
      searchTerms.forEach(term => {
        // Başlık eşleşmesi daha yüksek puan
        if (service.title.toLowerCase().includes(term)) {
          score += 10
        }
        // Açıklama eşleşmesi
        if (service.description.toLowerCase().includes(term)) {
          score += 5
        }
        // Anahtar kelime eşleşmesi
        service.keywords.forEach(keyword => {
          if (keyword.includes(term)) {
            score += 3
          }
        })
      })
      return { ...service, score }
    })

    // Skora göre sırala
    scoredResults.sort((a, b) => b.score - a.score)
    
    setTimeout(() => {
      setFilteredResults(scoredResults)
      setIsLoading(false)
    }, 300) // UX için küçük gecikme
  }

  // URL parametresi değiştiğinde arama yap
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery)
    }
  }, [initialQuery])

  // Form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchQuery)
  }

  return (
    <main className="search-page">
      <div className="container">
        <div className="search-header">
          <h1>Eğitim Arama</h1>
          <p>İhtiyacınıza uygun eğitim programını bulun</p>
        </div>

        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-container">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Eğitim adı, kategori veya anahtar kelime girin... (örn: forklift, vinç, ekskavatör)"
              className="search-input"
              autoFocus
            />
            <button type="submit" className="search-button" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-spinner-small"></div>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
            </button>
          </div>
        </form>

        {/* Popüler Aramalar */}
        {!searchQuery && (
          <div className="popular-searches">
            <h3>Popüler Aramalar</h3>
            <div className="search-tags">
              {['Forklift', 'Vinç', 'Ekskavatör', 'Manlift', 'Kurumsal'].map((tag) => (
                <button
                  key={tag}
                  className="search-tag"
                  onClick={() => {
                    setSearchQuery(tag)
                    performSearch(tag)
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Arama Sonuçları */}
        <div className="search-results">
          {searchQuery && !isLoading && (
            <div className="results-header">
              <h2>
                "{searchQuery}" için {filteredResults.length} sonuç bulundu
              </h2>
            </div>
          )}

          {isLoading && (
            <div className="search-loading">
              <div className="loading-spinner"></div>
              <p>Aranıyor...</p>
            </div>
          )}

          {!isLoading && filteredResults.length > 0 && (
            <div className="results-grid">
              {filteredResults.map((result) => (
                <div key={result.id} className="result-card">
                  <div className="result-image">
                    <Image
                      src={result.image}
                      alt={result.title}
                      width={300}
                      height={200}
                      className="card-image"
                    />
                  </div>
                  <div className="result-content">
                    <h3>{result.title}</h3>
                    <p>{result.description}</p>
                    <div className="result-meta">
                      <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>{result.duration}</span>
                      </div>
                      <div className="meta-item price">
                        <span>{result.price}</span>
                      </div>
                    </div>
                    <div className="result-actions">
                      <Link href={`/hizmetlerimiz/${result.slug}`} className="btn-header-cta">
                        Detayları Gör
                      </Link>
                      <Link 
                        href={`/odeme?service=${encodeURIComponent(result.title)}&price=${encodeURIComponent(result.price)}`}
                        className="btn-outline"
                      >
                        Hemen Başla
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && searchQuery && filteredResults.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                  <line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="11" cy="17" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3>Sonuç bulunamadı</h3>
              <p>
                "<strong>{searchQuery}</strong>" için eşleşen eğitim bulunamadı.
                Farklı kelimeler deneyin veya tüm eğitimlerimizi görüntüleyin.
              </p>
              <Link href="/hizmetlerimiz" className="btn-header-cta">
                Tüm Eğitimleri Gör
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}