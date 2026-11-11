import { Link } from 'react-router'
import Icon from '../Icon'

export default function AiPlannerSection() {
  return (
    <section id="ai-planner" className=" scroll-mt-24 px-5 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-7 text-white shadow-2xl shadow-violet-500/20 sm:p-12">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
                <Icon name="sparkles" size={16} />
                YOUR AI PLANNING ASSISTANT
              </span>

              <h2 className="mt-7 text-4xl font-black leading-tight sm:text-5xl">
                Big goals.
                <br />
                Smaller steps.
                <br />
                Better results.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-white/80">
                Have a big goal but don't know where to start?
                Let your AI assistant help turn your ambitions
                into a practical action plan.
              </p>

              <Link
                to="/signup"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-700 transition hover:-translate-y-1"
              >
                Explore AI planning
                <Icon name="arrow" />
              </Link>

              <div className="mt-2 w-70">
                <img loading="lazy" decoding="async" src="/images/mascots/blue-headphone-girl1.png" alt="" className="w-full " />
              </div>
            </div>

            {/* AI preview */}
            <div className="relative rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

              <div className="absolute -right-4 -top-15 w-24 mascot-float">
                <img loading="lazy" decoding="async" src="/images/mascots/bubble-tea-panda.png" alt="" className="w-full" />

              </div>

              <div className="flex items-center gap-3 border-b border-white/20 pb-5">
                <div className="rounded-xl bg-white/20 p-3">
                  <Icon name="sparkles" size={25} />
                </div>

                <div>
                  <h3 className="font-bold">TaskFlow AI</h3>
                  <p className="text-xs text-white/60">Your planning companion</p>
                </div>

                <span className="ml-auto rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                  Online
                </span>
              </div>

              <p className="mt-6 text-xs text-white/60">YOUR GOAL</p>

              <div className="mt-2 rounded-xl bg-white/10 p-4 font-semibold">
                Learn React in 30 days
              </div>

              <h4 className="mb-4 mt-7 font-bold">Suggested action plan</h4>

              {[
                "Learn JSX and components",
                "Practice React hooks",
                "Build a small project",
                "Learn React Router",
              ].map((task, index) => (
                <div
                  key={task}
                  className="mb-3 flex items-center gap-3 rounded-xl bg-white/10 p-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-sm font-bold">
                    {index + 1}
                  </span>

                  <span className="flex-1 text-sm">{task}</span>

                  <Icon name="check" size={17} className="text-emerald-300" />
                </div>
              ))}

              <p className="mt-5 text-center text-xs text-white/50">
                Example AI-generated plan
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
