import AboutHeroSection from './sections/AboutHeroSection'
import MissionSection from './sections/MissionSection'
import ValuesSection from './sections/ValuesSection'
import OfferSection from './sections/OfferSection'
import PhilosophySection from './sections/PhilosophySection'
import AboutCtaSection from './sections/AboutCtaSection'

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <AboutHeroSection />
      <MissionSection />
      <ValuesSection />
      <OfferSection />
      <PhilosophySection />
      <AboutCtaSection />
    </main>
  )
}
