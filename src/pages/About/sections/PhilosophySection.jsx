import { Link } from 'react-router'

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8">

      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        <div>
          <span className="inline-flex rounded-full bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400">
            A little motivation
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Don't chase perfection.
            <span className="block text-pink-500">
              Celebrate progress.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-gray-600 dark:text-gray-400">
            You don't need to accomplish everything in one day.
            Start with one task, build one habit and take one
            step toward your goal. Every little win counts.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-4 font-bold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-1"
          >
            Make your first move
            <span>→</span>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-10 rounded-full bg-pink-500/15 blur-3xl" />

          <img
            src="/images/mascots/sporty-blue-girl.png"
            alt="TaskFlow AI mascot celebrating progress"
            className="relative 4/5 mx-auto w-4/5 object-contain"
          />

          <div className="absolute text-center right-26 -top-13 rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-900">
            <span className="text-2xl text-center">⭐⭐⭐</span>
            <p className="mt-1 text-sm font-bold">You're doing great!</p>
          </div>
        </div>

      </div>
    </section>
  )
}
