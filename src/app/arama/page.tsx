import type { Metadata } from 'next'
import { Suspense } from 'react'
import SearchPage from '../components/SearchPage'

export const metadata: Metadata = {
  title: 'Eğitim Arama | VEFA Eğitim Merkezi',
  description: 'İhtiyacınıza uygun eğitim programını bulun. Forklift, vinç, ekskavatör ve daha fazlası...',
}

function SearchFallback() {
  return (
    <div className="search-loading">
      <div className="loading-spinner"></div>
      <p>Arama sayfası yükleniyor...</p>
    </div>
  )
}

export default function Search() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchPage />
    </Suspense>
  )
}