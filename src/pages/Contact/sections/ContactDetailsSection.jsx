import { contactDetails } from '../contactData'

export default function ContactDetailsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-500/40"
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.color}`}>
              {item.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              {item.description}
            </p>

            <p className="mt-5 font-semibold text-violet-600 transition group-hover:text-violet-700 dark:text-violet-400">
              {item.value} →
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
