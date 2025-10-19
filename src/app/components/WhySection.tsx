import Link from 'next/link'

interface WhyFeature {
  title: string
  description: string
}

const whyFeatures: WhyFeature[] = [
  {
    title: 'MEB Onaylı Sertifikalar',
    description: 'Milli Eğitim Bakanlığı onaylı belgelerimiz ile kariyer kapılarınız açılıyor. Aldığınız sertifikalar tüm Türkiye\'de geçerli ve iş başvurularında kabul görüyor.'
  },
  {
    title: 'Sektör Deneyimli Eğitmenler',
    description: '15+ yıl sektör tecrübesi olan uzman eğitmenlerimiz, sadece teoriyi değil gerçek iş hayatından örneklerle sizi işe hazırlıyor. Pratik bilgiler, gerçek deneyimler.'
  },
  {
    title: 'Güncel ve Modern Ekipmanlar',
    description: 'Sektörde kullanılan son model araç ve ekipmanlarla eğitim alıyorsunuz. İşe başladığınızda teknolojiye yabancı olmayacaksınız.'
  },
  {
    title: 'İstihdam Desteği',
    description: 'Başarıyla mezun olan kursiyerlerimize aktif iş ilanları paylaşıyor, iş görüşmelerine hazırlık yapıyor ve geniş iş ağımız sayesinde istihdam sürecinde yanınızda oluyoruz.'
  },
  {
    title: 'Esnek Eğitim Programları',
    description: 'Hafta içi, hafta sonu ve mesai sonrası eğitim seçenekleriyle çalışma hayatınızı aksatmadan kariyerinize yatırım yapın. Hayat koşturuyor, biz de size uyum sağlıyoruz.'
  }
]

const WhyFeatureCard = ({ feature }: { feature: WhyFeature }) => (
  <div className="why-feature">
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>
)

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <h2>Neden VEFA Eğitim Merkezi?</h2>
          <p>Bizi tercih etmeniz için 5 önemli neden</p>
        </div>
        <div className="why-grid">
          {whyFeatures.map((feature, index) => (
            <WhyFeatureCard key={index} feature={feature} />
          ))}
        </div>
        <div className="section-footer">
          <Link href="/hakkimizda" className="btn btn-secondary btn-lg">
            Daha Fazla Bilgi
          </Link>
        </div>
      </div>
    </section>
  )
}