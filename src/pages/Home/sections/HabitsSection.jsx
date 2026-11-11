import { Link } from 'react-router'
import Icon from '../Icon'
import SectionHeading from '../SectionHeading'
import { habits } from '../homeData'

export default function HabitsSection() {
  return (
    <section id="habits" className="scroll-mt-24 relative overflow-hidden px-5 py-24 lg:px-8">

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Build consistency"
          title="Little habits. Legendary progress."
          description="Your daily habits shape your future. Keep your streaks alive and celebrate every step forward."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">

          {/* Current streak */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-rose-500 to-pink-600 p-8 text-white shadow-xl shadow-orange-500/20">

            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[25px] border-white/10" />

            <Icon name="flame" size={38} />

            <p className="mt-8 text-sm font-semibold text-white/80">
              Your current streak
            </p>

            <h3 className="mt-2 text-7xl font-black">12</h3>
            <p className="mt-2 text-xl font-bold">Days in a row</p>

            <div className="mt-9 border-t border-white/20 pt-6">
              <p className="text-sm text-white/80">Personal best</p>
              <p className="mt-1 text-3xl font-black">18 days</p>
            </div>

            <div className="absolute bottom-0 right-0 w-36 opacity-70">
              <img loading="lazy" decoding="async" src="/images/mascots/bubble-tea-penguin.png" alt="" className="w-full" />
            </div>
          </div>

          {/* Habit progress */}
          <div className="space-y-4 lg:col-span-2">

            {habits.map((habit) => (
              <div
                key={habit.name}
                className="habit-card rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{habit.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Best streak: {habit.best} days
                    </p>
                  </div>

                  <div className="text-right">
                    <p className={`text-xl font-black ${habit.color === "orange" ? "text-orange-500" : habit.color === "blue" ? "text-blue-500" : "text-pink-500"}`}>
                      {habit.current} days
                    </p>
                    <p className="text-xs text-gray-500">Current streak</p>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <div
                    className={`progress-fill h-full rounded-full ${habit.color === "orange" ? "bg-orange-500" : habit.color === "blue" ? "bg-blue-500" : "bg-pink-500"}`}
                    style={{ width: `${habit.progress}%` }}
                  />
                </div>

                <p className="mt-2 text-right text-xs text-gray-500">
                  {habit.progress}% weekly goal
                </p>
              </div>
            ))}

            <Link
              to="/signup"
              className="inline-flex items-center gap-2 font-bold text-violet-600 hover:text-violet-700 dark:text-violet-400"
            >
              Explore habit tracking
              <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
