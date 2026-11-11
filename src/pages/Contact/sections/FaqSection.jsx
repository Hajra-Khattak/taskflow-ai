import { faqs } from '../contactData'

export default function FaqSection() {
  return (
    <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900/50">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Need some help?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Here are a few answers to help you get started.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-violet-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-500/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {faq.question}

                <span className="text-xl text-violet-600 transition duration-300 group-open:rotate-45 dark:text-violet-400">
                  +
                </span>
              </summary>

              <p className="mt-4 pr-8 text-sm leading-7 text-gray-500 dark:text-gray-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
