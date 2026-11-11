import { Link } from 'react-router'
import Icon from '../Icon'

export default function MascotSection() {
  return (
    <section className="mascot-section relative overflow-hidden bg-gradient-to-br from-violet-100 via-pink-50 to-blue-100 px-5 py-24 dark:from-violet-950/40 dark:via-gray-900 dark:to-blue-950/40 lg:px-8">

      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:bg-gray-800 dark:text-violet-300">
              <Icon name="heart" size={15} />
              Your productivity companions
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Work hard.
              <span className="block text-violet-600 dark:text-violet-400">
                Dream bigger.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-600 dark:text-gray-400">
              Productivity doesn't have to feel boring.
              Make your everyday journey more enjoyable
              with colorful characters, inspiring moments
              and a workspace that feels like your own world.
            </p>

            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 font-bold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1"
            >
              Begin your journey
              <Icon name="arrow" />
            </Link>
          </div>

          {/* Three different mascot characters */}
          <div className="relative flex min-h-[350px] items-end justify-center">

            <div className="mascot-float w-1/3 max-w-[150px]">
              <img loading="lazy" decoding="async" src="/images/mascots/cheerful-orange-ninja-boy.png" alt="" className="w-full" />
            </div>

            <div className="mascot-float mascot-delay-one z-10 w-2/5 max-w-[190px]">
              <img loading="lazy" decoding="async" src="/images/mascots/star-holding-boy.png" alt="" className="w-full" />
            </div>

            <div className="mascot-float mascot-delay-two w-1/3 max-w-[150px]">
              <img loading="lazy" decoding="async" src="/images/mascots/sporty-blue-girl.png" alt="" className="w-full" />
            </div>

            <div className="floating-card absolute left-0 top-6 rounded-xl bg-white px-4 py-3 text-sm font-bold text-violet-700 shadow-lg dark:bg-gray-800 dark:text-violet-300">
              You've got this!
            </div>

            <div className="floating-card floating-delay absolute right-0 top-24 rounded-xl bg-white px-4 py-3 text-sm font-bold text-pink-600 shadow-lg dark:bg-gray-800 dark:text-pink-400">
              Keep shining!
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
