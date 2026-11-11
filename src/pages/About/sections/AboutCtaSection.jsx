import { Link } from 'react-router'

export default function AboutCtaSection() {
  return (
    <section className="px-5 pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 px-6 py-16 text-center text-white sm:px-12 sm:py-20">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
        <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full border-[40px] border-white/10" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest">
            <span>✦</span>
            Your journey starts here
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Ready to make your
            <span className="block text-violet-200">
              days more meaningful?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/80">
            Organize your tasks, build better habits and
            turn your goals into achievements with TaskFlow AI.
          </p>

          <Link
            to="/signup"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-violet-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-violet-50"
          >
            Get started for free
            <span>→</span>
          </Link>

        </div>
      </div>
    </section>
  )
}
