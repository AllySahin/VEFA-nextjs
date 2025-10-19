import HeroSlider from './components/HeroSlider'
import AudienceSection from './components/AudienceSection'
import QuickServices from './components/QuickServices'
import ReferencesSection from './components/ReferencesSection'
import ProcessSection from './components/ProcessSection'
import WhyVefaSection from './components/WhyVefaSection'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <QuickServices />
      <ReferencesSection />
      <AudienceSection />
      <ProcessSection />
      <WhyVefaSection />
      <TestimonialsSection />
    </main>
  )
}