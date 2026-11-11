import { features } from '../aboutData'

export default function OfferSection() {
  return (
    <section className="bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Everything you need
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              One workspace.
              <span className="block text-violet-600 dark:text-violet-400">
                Endless possibilities.
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-600 dark:text-gray-400">
            Explore the tools designed to make your everyday
            productivity journey easier.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-2xl font-black text-white shadow-lg`}>
                {feature.icon}
              </div>

              <h3 className="mt-7 text-lg font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
