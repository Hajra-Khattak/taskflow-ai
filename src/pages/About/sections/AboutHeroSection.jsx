import { Link } from 'react-router'

export default function AboutHeroSection() {
  return (
    <section className="relative px-5 py-20 sm:py-28 lg:px-8">

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
            <span className="text-base">✦</span>
            Get to know us
          </span>

          <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            More than just
            <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
              a task manager.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            TaskFlow AI is your personal productivity space.
            We bring tasks, habits and goals together to help
            you create better routines and make every day count.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-500/20 transition duration-300 hover:-translate-y-1"
            >
              Start your journey
              <span>→</span>
            </Link>

            <a
              href="#our-mission"
              className="rounded-xl border border-gray-300 px-7 py-4 font-bold transition duration-300 hover:border-violet-500 hover:text-violet-600 dark:border-gray-700 dark:hover:text-violet-400"
            >
              Our mission
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span>✓ Simple planning</span>
            <span>✓ Better habits</span>
            <span>✓ Smarter goals</span>
          </div>
        </div>

        {/* Hero mascot */}

        <div className="relative flex min-h-[380px] items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-violet-500/15 blur-3xl sm:h-96 sm:w-96" />

          <div className="absolute h-72 w-72 rounded-full border border-violet-300/40 dark:border-violet-500/30 sm:h-96 sm:w-96" />

          <img
            src="/images/mascots/laptop-coder-boy.png"
            alt="TaskFlow AI mascot"
            className="relative z-10 w-70 object-contain drop-shadow-xl transition duration-500 hover:scale-105 sm:w-96"
          />

          <div className="absolute left-0 top-10 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90">
            <p className="text-xs text-gray-500">Your daily reminder</p>
            <p className="mt-1 font-bold">Keep growing! ✨</p>
          </div>

          <div className="absolute bottom-8 right-0 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90">
            <p className="text-xs text-gray-500">Your next goal</p>
            <p className="mt-1 font-bold text-violet-600 dark:text-violet-400">
              Make progress 🎯
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
