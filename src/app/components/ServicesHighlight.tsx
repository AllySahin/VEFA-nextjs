import Link from 'next/link'
import Image from 'next/image'

export default function ServicesHighlight() {
  return (
    <>
      {/* CTA Bölümü */}
      <section className="section highlight services-cta">
        <div className="container">
          <div className="services-cta-content">
            <div className="cta-text">
              <h2>Kurumsal Eğitim Paketlerimizi İnceleyin</h2>
              <p>
                Kombine eğitim paketlerimiz ile kısa sürede birden fazla sertifikaya sahip olun. 
                Kurumsal ekipler için özel fiyatlandırma ve yerinde eğitim imkanı sunuyoruz.
              </p>
              <ul className="cta-benefits">
                <li>✓ 10+ kişilik gruplara özel indirim</li>
                <li>✓ Yerinde eğitim hizmeti</li>
                <li>✓ Esnek eğitim takvimi</li>
                <li>✓ Özel danışmanlık desteği</li>
              </ul>
            </div>
            <div className="cta-image-container">
              <Image
                src="/images/slider-corporate.png"
                alt="Kurumsal Eğitim"
                width={500}
                height={350}
                className="cta-image"
              />
            </div>
          </div>
          <div className="highlight-actions">
            <Link href="/kurumsal" className="btn-header-cta btn-lg">
              Kurumsal Paketleri Gör
            </Link>
            <Link href="/iletisim" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white' }}>
              Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}