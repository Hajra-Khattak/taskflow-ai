

export default function ContactHeroSection() {
  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-600/10" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-600/10" />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300">
          <span>✦</span> We'd love to hear from you
        </span>

        <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Let's make something
          <span className="block bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            amazing together.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
          Have a question, an idea, or just want to say hello?
          We're always happy to connect with people who love making
          every day count.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact-form"
            className="rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-700"
          >
            Send us a message →
          </a>

          <a
            href="mailto:hello@taskflow.ai"
            className="rounded-xl border border-gray-200 px-7 py-3.5 font-semibold text-gray-700 transition duration-300 hover:border-violet-400 hover:text-violet-600 dark:border-gray-800 dark:text-gray-300 dark:hover:text-violet-400"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
