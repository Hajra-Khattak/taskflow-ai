import { Link } from 'react-router'
import Icon from '../Icon'
import SectionHeading from '../SectionHeading'
import { features, colorStyles } from '../homeData'

export default function FeaturesSection({ isLoggedIn, ctaTo }) {
  return (
    <section id="features" className="scroll-mt-24 bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8">

      <div className="relative mx-auto max-w-7xl">
        <div className="absolute mx-auto max-w-[200px] lg:mx-0">
          <img loading="lazy" decoding="async" src="/images/mascots/hero-blue-hoodie-boy.png" alt="" className="w-full" />

          <span className="floating-card absolute -right-14 top-6 rounded-xl bg-blue-500 px-3 py-2 text-xs font-bold text-white shadow-lg">
            All in One!
          </span>
        </div>


        <SectionHeading
          eyebrow="Everything in one place"
          title="Tools that move you forward."
          description="A complete productivity workspace with the tools you need to plan, organize and achieve your goals."
          center
        />

        <div className="absolute right-0 top-0 max-w-[200px] lg:mx-0">
          <img loading="lazy" decoding="async" src="/images/mascots/hero-blue-hoodie-boy.png" alt="" className="w-full -scale-x-100" />

          
        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colorStyles[feature.color]}`}>
                <Icon name={feature.icon} size={27} />
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400">
                <Link to={ctaTo}>
                {isLoggedIn ? "Open dashboard" : "Learn More"}
                </Link>
                <Icon name="arrow" size={16} className="transition group-hover:translate-x-1" />

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
