import Icon from '../Icon'
import SectionHeading from '../SectionHeading'
import { stats, colorStyles } from '../homeData'

export default function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-24 relative px-5 py-20 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Your productivity at a glance"
          title="TASKFLOW OVERVIEW"
          description="Everything important in one place. See your activity, track your progress and celebrate your little wins."
          center
        />

        <div className="overview-panel relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-xl shadow-violet-500/5 dark:border-gray-800 dark:bg-gray-900 sm:p-8">

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <span className="text-xs font-bold tracking-widest text-gray-500">
              DASHBOARD PREVIEW · SAMPLE DATA
            </span>

            <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-500">
              ● You're on track
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-7">
            <div>
              <h3 className="text-2xl font-black">Welcome to your workspace!</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Here's what's happening with your productivity.
              </p>
            </div>

            <div className="rounded-xl bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
              This week
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="stat-card rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </span>

                  <span className={`rounded-xl p-2.5 ${colorStyles[stat.color]}`}>
                    <Icon name={stat.icon} />
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-black">{stat.value}</h3>

                <p className="mt-2 text-xs text-gray-500">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex justify-between gap-4">
              <div>
                <h4 className="font-bold">Weekly productivity</h4>
                <p className="mt-1 text-xs text-gray-500">
                  Your progress toward this week's target.
                </p>
              </div>
              <span className="font-black text-violet-600 dark:text-violet-400">75%</span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div className="progress-fill h-full w-3/4 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400" />
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-20 -right-2 hidden w-25 opacity-90 lg:block">
            <img
              loading="lazy"
              decoding="async"
              src="/images/mascots/laptop-coder-boy.png" alt="Anime mascot"
              className="w-70 h-65 object-contain
         " />
          </div>

        </div>
      </div>
    </section>
  )
}
