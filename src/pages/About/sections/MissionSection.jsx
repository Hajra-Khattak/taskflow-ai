

export default function MissionSection() {
  return (
    <section
      id="our-mission"
      className="bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        <div className="relative mx-auto max-w-sm">
          <div className="absolute inset-5 rounded-full bg-pink-500/10 blur-3xl" />

          <img
            src="/images/mascots/purple-headphone-girl.png"
            alt="Cute mascot holding a book"
            className="relative w-full object-contain"
          />

          <div className="absolute bottom-8 left-0 rounded-2xl bg-white px-5 py-3 shadow-xl dark:bg-gray-800">
            <p className="font-bold text-violet-600 dark:text-violet-400">
              Small steps matter! 💜
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Why TaskFlow AI?
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Productivity should feel
            <span className="text-violet-600 dark:text-violet-400">
              {" "}simple and enjoyable.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
            Sometimes managing everything in life can feel
            overwhelming. Tasks pile up, habits become difficult
            to maintain and big goals seem far away.
          </p>

          <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
            That's why TaskFlow AI brings your productivity tools
            into one organized space. Instead of feeling overwhelmed,
            you can focus on one step at a time and celebrate
            your progress along the way.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-violet-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-2xl font-black text-violet-600 dark:text-violet-400">
                One
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Organized workspace
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400">
                Every day
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                A chance to improve
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
