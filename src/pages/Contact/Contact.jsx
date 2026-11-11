import ContactHeroSection from './sections/ContactHeroSection'
import ContactDetailsSection from './sections/ContactDetailsSection'
import ContactFormSection from './sections/ContactFormSection'
import FaqSection from './sections/FaqSection'
import ContactCtaSection from './sections/ContactCtaSection'

export default function Contact() {
  return (
    <main className="overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <ContactHeroSection />
      <ContactDetailsSection />
      <ContactFormSection />
      <FaqSection />
      <ContactCtaSection />
    </main>
  )
}
