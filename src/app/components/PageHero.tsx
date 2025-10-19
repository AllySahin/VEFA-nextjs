import Image from 'next/image'

interface PageHeroProps {
  title: string
  description: string
  badge: string
  backgroundImage: string
}

export default function PageHero({ 
  title, 
  description, 
  badge, 
  backgroundImage
}: PageHeroProps) {
  return (
    <section className="modern-page-hero">
      <div className="hero-background">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="hero-bg-image"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">{badge}</span>
          </div>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
        </div>
      </div>
    </section>
  )
}