import { values } from '../aboutData'

export default function ValuesSection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            What we believe in
          </span>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Our mission & vision
          </h2>

          <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
            We believe that meaningful progress comes from
            small actions, consistent habits and clear goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((item) => (
            <div
              key={item.number}
              className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-violet-800"
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.color}`}>
                  {item.icon === "organize" && "▤"}
                  {item.icon === "habit" && "🔥"}
                  {item.icon === "ai" && "✦"}
                  {item.icon === "progress" && "↗"}
                </span>

                <span className="text-sm font-bold text-gray-300 dark:text-gray-700">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
