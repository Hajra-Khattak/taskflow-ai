import { Link } from 'react-router'
import Icon from '../Icon'

export default function HeroSection({ isLoggedIn, ctaTo }) {
  return (
    <section
      id="home"
      className="scroll-mt-24 hero-section relative px-5 py-20 sm:py-28 lg:px-8"
    >

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Hero text */}
        <div className="relative z-20 hero-enter">

          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
            <Icon name="sparkles" size={15} />
            YOUR PERSONAL PRODUCTIVITY WORLD
            <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-white">NEW</span>
          </span>

          <h1 className="mt-7 text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Make every day
            <span className="mt-2 block bg-gradient-to-r from-violet-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
              count for something.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            Organize your tasks, build meaningful habits and
            turn your biggest goals into everyday achievements.
            Your productivity journey starts here.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              to={ctaTo}
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
            >
              {isLoggedIn ? "Open dashboard" : "Get started free"}
              <Icon name="arrow" className="transition group-hover:translate-x-1" />
            </Link>

            <a
              href="#features"
              className="inline-flex items-center gap-3 rounded-xl border border-gray-300 px-7 py-4 font-bold transition hover:border-violet-500 hover:bg-violet-50 dark:border-gray-700 dark:hover:bg-gray-900"
            >
              Explore features
            </a>

          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
            {["Easy to use", "Smart planning", "Track your growth"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-emerald-500" />
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* Hero anime character */}
        <div className="relative mx-auto flex min-h-[420px] w-full max-w-xl items-center justify-center lg:min-h-[520px]">

          <div className="hero-orbit absolute h-[340px] w-[340px] rounded-full border border-violet-300/50 dark:border-violet-500/30 sm:h-[430px] sm:w-[430px]" />
          <div className="absolute h-[280px] w-[280px] rounded-full bg-violet-500/15 blur-3xl sm:h-[380px] sm:w-[380px]" />

          <div className="mascot-main relative z-10 ">
            <img
              loading="lazy" decoding="async"
              src="/images/mascots/black-cat-hoodie-boy11.png"
              alt="TaskFlow AI mascot"
              className="w-64 object-contain drop-shadow-2xl sm:w-80 lg:w-96"
            />
          </div>

          {/* Floating task card */}
          <div className="floating-card absolute left-0 top-12 z-20 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 sm:left-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-500">
                <Icon name="check" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Task completed</p>
                <p className="text-sm font-bold">Daily goals</p>
              </div>
            </div>
          </div>

          {/* Floating streak card */}
          <div className="floating-card floating-delay absolute bottom-14 right-0 z-20 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 sm:right-0">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-500/10 p-2 text-orange-500">
                <Icon name="flame" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Current streak</p>
                <p className="text-lg font-black">12 days</p>
              </div>
            </div>
          </div>

          {/* Floating decorative badge */}
          <div className="hidden sm:flex floating-slow absolute right-6 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white shadow-xl">
            <Icon name="heart" size={26} />
          </div>

          <div className="hidden sm:block floating-card absolute bottom-4 left-8 rounded-xl border border-violet-200 bg-violet-50/90 px-4 py-3 text-xs font-bold text-violet-700 shadow-lg dark:border-violet-800 dark:bg-violet-950/80 dark:text-violet-300">
            Your next level awaits!
          </div>

        </div>
      </div>
    </section>
  )
}
