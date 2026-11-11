import { Link } from 'react-router'
import Icon from '../Icon'

export default function FinalCtaSection({ isLoggedIn, ctaTo }) {
  return (
    <section className="relative overflow-hidden px-5 py-28 lg:px-8">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-100 via-blue-50 to-pink-100 dark:from-violet-950/40 dark:via-gray-950 dark:to-blue-950/40" />

      <div className="relative mx-auto max-w-4xl text-center">

        <div className="mx-auto w-36 mascot-float">
          <img loading="lazy" decoding="async" src="/images/mascots/star-sprout-cat.png" alt="" className='w-full' />
        </div>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-violet-700 dark:bg-gray-900 dark:text-violet-300">
          <Icon name="sparkles" size={15} />
          YOUR NEXT CHAPTER STARTS HERE
        </span>

        <h2 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Ready to become your
          <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            most productive self?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
          Start organizing your life, building better habits
          and achieving your goals one day at a time.
        </p>



        <Link
          to={ctaTo}
          className="mt-4 group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
        >
          {isLoggedIn ? "Open dashboard" : "Create your free account"}
          <Icon name="arrow" className="transition group-hover:translate-x-1" />
        </Link>

      </div>
    </section>
  )
}
