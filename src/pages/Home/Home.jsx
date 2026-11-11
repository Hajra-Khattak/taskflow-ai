import { useAuth } from '../../context/AuthContext'
import HeroSection from './sections/HeroSection'
import OverviewSection from './sections/OverviewSection'
import TaskBoardSection from './sections/TaskBoardSection'
import HabitsSection from './sections/HabitsSection'
import MascotSection from './sections/MascotSection'
import AiPlannerSection from './sections/AiPlannerSection'
import FeaturesSection from './sections/FeaturesSection'
import FinalCtaSection from './sections/FinalCtaSection'
import './Home.css'

export default function Home() {
  const { user } = useAuth()
  const isLoggedIn = Boolean(user)
  const ctaTo = isLoggedIn ? '/dashboard' : '/signup'

  return (
    <div className="overflow-x-clip bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <HeroSection isLoggedIn={isLoggedIn} ctaTo={ctaTo} />
      <OverviewSection />
      <TaskBoardSection />
      <HabitsSection />
      <MascotSection />
      <AiPlannerSection />
      <FeaturesSection isLoggedIn={isLoggedIn} ctaTo={ctaTo} />
      <FinalCtaSection isLoggedIn={isLoggedIn} ctaTo={ctaTo} />
    </div>
  )
}
