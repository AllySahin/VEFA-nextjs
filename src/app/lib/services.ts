interface ServiceDetail {
  slug: string
  title: string
  description: string
  badge: string
  backgroundImage: string
  duration: string
  price: string
  certificate: string
  content: {
    overview: string
    curriculum: string[]
    requirements: string[]
    benefits: string[]
  }
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'forklift-egitimi': {
    slug: 'forklift-egitimi',
    title: 'Forklift Operatörlük Eğitimi',
    description: 'Forklift kullanımı için gerekli tüm teorik ve pratik bilgileri içeren, MEB onaylı sertifikalı eğitim programı.',
    badge: 'En Popüler Program',
    backgroundImage: '/images/service-forklift.png',
    duration: '40 Saat',
    price: '1.500 TL',
    certificate: 'MEB Onaylı',
    content: {
      overview: 'Forklift operatörlük eğitimimiz, modern sanayi tesislerinde güvenli ve verimli çalışabilmek için gerekli tüm becerileri kazandırır. Teorik eğitim ile pratik uygulamaların mükemmel kombinasyonu.',
      curriculum: [
        'Forklift türleri ve özellikleri',
        'Güvenli kullanım teknikleri',
        'Yük kaldırma ve taşıma',
        'İstifçeme ve depolama',
        'Bakım ve onarım bilgisi',
        'İş güvenliği kuralları'
      ],
      requirements: [
        'En az 18 yaş',
        'Okuma yazma bilgisi',
        'Sağlık raporu',
        'Kimlik fotokopisi'
      ],
      benefits: [
        'MEB onaylı sertifika',
        'İş bulma desteği',
        'Pratik eğitim garantisi',
        'Uzman eğitmenler'
      ]
    }
  },
  'mobil-vinc-egitimi': {
    slug: 'mobil-vinc-egitimi',
    title: 'Mobil Vinç Operatörlüğü',
    description: 'Mobil vinçlerin kurulumu, denge ağırlıkları ve güvenli yük kaldırma teknikleri eğitimi.',
    badge: 'İleri Seviye',
    backgroundImage: '/images/service-crane.png',
    duration: '60 Saat',
    price: '2.500 TL',
    certificate: 'MEB Onaylı',
    content: {
      overview: 'Mobil vinç operatörlüğü eğitimi, inşaat ve sanayi sektörlerinde kritik öneme sahip yük kaldırma işlemleri için kapsamlı bir program sunar.',
      curriculum: [
        'Mobil vinç türleri',
        'Kurulum ve kalibrasyon',
        'Güvenli yük kaldırma',
        'Risk analizi',
        'Bakım prosedürleri',
        'Acil durum protokolleri'
      ],
      requirements: [
        'En az 21 yaş',
        'B sınıfı ehliyet',
        'Sağlık raporu',
        'Temel matematik bilgisi'
      ],
      benefits: [
        'Yüksek kazanç imkanı',
        'Geniş iş olanakları',
        'Uzmanlık sertifikası',
        'Sürekli eğitim desteği'
      ]
    }
  },
  'ekskavatör-egitimi': {
    slug: 'ekskavatör-egitimi',
    title: 'Ekskavatör Operatörlüğü',
    description: 'Altyapı projeleri için kazı teknikleri ve yük transferi uygulamalarına odaklı eğitim.',
    badge: 'Yüksek Talep',
    backgroundImage: '/images/slider-excavator.png',
    duration: '48 Saat',
    price: '1.800 TL',
    certificate: 'MEB Onaylı',
    content: {
      overview: 'Ekskavatör operatörlük eğitimi, inşaat sektörünün vazgeçilmez iş makinelerinden biri olan ekskavatörlerin profesyonel kullanımını öğretir.',
      curriculum: [
        'Ekskavatör mekanizması',
        'Kazı teknikleri',
        'Yük manipülasyonu',
        'Saha güvenliği',
        'Bakım ve kontroller',
        'Çevre korunması'
      ],
      requirements: [
        'En az 20 yaş',
        'İlköğretim mezunu',
        'Sağlık raporu',
        'Fiziksel uygunluk'
      ],
      benefits: [
        'Sektörel sertifika',
        'Pratik deneyim',
        'İş garantisi desteği',
        'Güncel teknikler'
      ]
    }
  }
}

export function getServiceBySlug(slug: string): ServiceDetail | null {
  return serviceDetails[slug] || null
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceDetails)
}