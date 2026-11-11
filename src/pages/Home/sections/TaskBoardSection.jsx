import { Link } from 'react-router'
import Icon from '../Icon'
import SectionHeading from '../SectionHeading'
import { taskColumns, taskColors } from '../homeData'

export default function TaskBoardSection() {
  return (
    <section id="tasks" className="scroll-mt-24 bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_2fr]">

          <div>
            <SectionHeading
              eyebrow="Stay organized"
              title="Your tasks. Your progress."
              description="Keep everything moving with a simple visual task board. Know exactly what needs your attention."
            />

            <div className="relative mx-auto max-w-[200px] lg:mx-0">
              <img loading="lazy" decoding="async" src="/images/mascots/sleepy-bookworm-girl.png" alt="" className="w-full" />

              <span className="floating-card absolute right-0 top-6 rounded-xl bg-blue-500 px-3 py-2 text-xs font-bold text-white shadow-lg">
                Keep going!
              </span>
            </div>

            <Link
              to="/signup"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Manage tasks
              <Icon name="arrow" size={18} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {taskColumns.map((column) => (
              <div
                key={column.title}
                className="task-column rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="mb-5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${taskColors[column.color]}`} />
                    <h3 className="text-sm font-bold">{column.title}</h3>
                  </div>
                  <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-bold dark:bg-gray-800">
                    {column.count}
                  </span>
                </div>

                <div className="space-y-3">
                  {column.tasks.map((task) => (
                    <div
                      key={task.title}
                      className="task-card rounded-xl border border-gray-100 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold leading-5">
                          {task.title}
                        </h4>
                        {column.color === "green" && (
                          <Icon name="check" size={16} className="shrink-0 text-emerald-500" />
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-md bg-violet-500/10 px-2 py-1 text-[10px] font-bold text-violet-600 dark:text-violet-400">
                          {task.category}
                        </span>
                        <span className="text-[10px] text-gray-500">
                          {task.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
