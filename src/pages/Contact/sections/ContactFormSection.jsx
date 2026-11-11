import { useState } from 'react'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

export default function ContactFormSection() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // ponytail: form is not sent anywhere yet, wire it to an email service or API route when needed
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData(EMPTY_FORM)
  }

  return (
    <section id="contact-form" className="px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Get in touch
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Every great idea starts with a
            <span className="text-violet-600 dark:text-violet-400">
              {" "}conversation.
            </span>
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-gray-600 dark:text-gray-400">
            Whether you need help, have feedback, or want to share an
            exciting idea, drop us a message. Fill out the form and
            we'll be happy to hear from you.
          </p>

          <div className="mt-10 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 p-7 dark:border-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
            <div className="flex items-center gap-4">
              <img
                src="/images/mascots/star-holding-boy.png"
                alt="TaskFlow mascot"
                className="h-24 w-24 object-contain"
              />

              <div>
                <h3 className="text-lg font-bold">
                  We're listening! ✨
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Your thoughts help us make TaskFlow AI better every day.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
              ✓
            </span>
            We appreciate every message and suggestion.
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/40 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20 sm:p-9">
          <h3 className="text-2xl font-bold">Send us a message</h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Fill in the details below and let us know how we can help.
          </p>

          {submitted && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
              Thank you! Your message has been submitted in this demo.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="General question">General question</option>
                <option value="Technical support">Technical support</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Your message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us what's on your mind..."
                required
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 font-bold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:from-violet-700 hover:to-purple-700"
            >
              Send Message →
            </button>

            <p className="text-center text-xs text-gray-400">
              Your information is only used to respond to your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
