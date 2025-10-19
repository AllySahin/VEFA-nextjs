'use client'

import { Suspense } from 'react'
import type { Metadata } from 'next'
import ServicesHero from '../components/ServicesHero'
import ServicesList from '../components/ServicesList'
import ServicesHighlight from '../components/ServicesHighlight'
import { useSearchParams } from 'next/navigation'

function ServicesContent() {
  const searchParams = useSearchParams()
  const kategori = searchParams.get('kategori')

  return (
    <main>
      <ServicesHero />
      <ServicesList activeCategory={kategori} />
      <ServicesHighlight />
    </main>
  )
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Yukleniyor...</div>}>
      <ServicesContent />
    </Suspense>
  )
}