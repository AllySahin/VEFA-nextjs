import type { Metadata } from 'next'
import PageHero from '../components/PageHero'
import CorporateContent from '../components/CorporateContent'
import CorporateFeatures from '../components/CorporateFeatures'

export const metadata: Metadata = {
  title: 'Kurumsal Eğitim Çözümleri | VEFA Eğitim Merkezi',
  description: 'Eskişehir\'de şirketlere özel iş makineleri operatörlük eğitim paketleri. İş güvenliği, verimlilik ve sertifikasyon çözümleri.',
}

export default function CorporatePage() {
  return (
    <main>
      <PageHero
        title="Kurumsal Eğitim Paketleri"
        description="Şirketinizin saha operasyonlarını güçlendirmek için iş güvenliğine uygun, sertifikalı operatör eğitimleri. 10+ çalışan gruplarına özel fiyatlandırma."
        badge="Kurumsal Çözümler"
        backgroundImage="/images/slider-corporate.png"
      />
      <CorporateContent />
      <CorporateFeatures />
    </main>
  )
}