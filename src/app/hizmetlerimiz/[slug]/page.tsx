import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceBySlug, getAllServiceSlugs } from '../../lib/services'
import PageHero from '../../components/PageHero'
import ServiceDetailContent from '../../components/ServiceDetailContent'

interface ServiceDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Sayfa Bulunamadı | VEFA Eğitim Merkezi'
    }
  }

  return {
    title: `${service.title} | VEFA Eğitim Merkezi`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main>
      <PageHero
        title={service.title}
        description={service.description}
        badge={service.badge}
        backgroundImage={service.backgroundImage}
      />
      <ServiceDetailContent service={service} />
    </main>
  )
}