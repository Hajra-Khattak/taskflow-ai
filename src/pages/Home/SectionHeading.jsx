import Icon from './Icon'

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
        <Icon name="sparkles" size={14} />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
