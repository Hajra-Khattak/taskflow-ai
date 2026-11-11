import { Link } from 'react-router'

export default function ContactCtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 px-7 py-16 text-center text-white shadow-2xl shadow-violet-500/20 sm:px-14">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Let's build better habits together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
            Your next productive chapter starts with one small step.
            Let's make it count!
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition duration-300 hover:-translate-y-1 hover:bg-violet-50"
          >
            Get Started Today →
          </Link>
        </div>
      </div>
    </section>
  )
}
