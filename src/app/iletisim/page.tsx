import type { Metadata } from 'next'
import PageHero from '../components/PageHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import ReviewForm from '../components/ReviewForm'

export const metadata: Metadata = {
  title: 'İletişim | VEFA Eğitim Merkezi',
  description: 'VEFA İş Makineleri Kursu ile iletişime geçin. Eskişehir\'de operatörlük eğitimi talepleriniz için form doldurun veya bizi ziyaret edin.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Bizimle İletişime Geçin"
        description="Operatörlük eğitimi talepleriniz için formu doldurun veya merkezimizi ziyaret edin. Uzman ekibimiz size en uygun eğitim paketini önerecek."
        badge="7/24 Destek"
        backgroundImage="/images/service-crane.png"
      />
      
      <section className="section">
        <div className="container contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <section className="section map-placeholder">
        <div className="container">
          <h2>Merkezimizi Ziyaret Edin</h2>
          <div className="map-box">
            <p>Harita entegrasyonu bu alanda gösterilecektir.</p>
          </div>
        </div>
      </section>

      <ReviewForm />
    </main>
  )
}