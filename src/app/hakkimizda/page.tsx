import type { Metadata } from 'next'
import PageHero from '../components/PageHero'
import AboutContent from '../components/AboutContent'
import ValuesSection from '../components/ValuesSection'
import TeamSection from '../components/TeamSection'

export const metadata: Metadata = {
  title: 'Hakkımızda | VEFA Eğitim Merkezi',
  description: 'VEFA İş Makineleri Kursu\'nun Eskişehir\'deki vizyonu, misyonu ve uzman eğitmen kadrosu hakkında bilgi edinin.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="VEFA Hakkında"
        description="Eskişehir'de iş makineleri operatörlüğü alanında modern eğitim anlayışı ve kaliteli hizmet sunan eğitim merkezi. MEB onaylı programlarımızla profesyonel operatörler yetiştiriyoruz."
        badge="MEB Onaylı"
        backgroundImage="/images/slider-excavator.png"
      />
      <AboutContent />
      <ValuesSection />
      <TeamSection />
    </main>
  )
}