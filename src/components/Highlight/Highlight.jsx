export default function Highlight({ text = '', query = '' }) {
  const value = String(text)
  const q = query.trim()
  if (!q) return value


  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = value.split(new RegExp(`(${escaped})`, 'gi'))


  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark
        key={i}
        className="bg-yellow-200 dark:bg-yellow-500/40 text-inherit rounded px-0.5"
      >
        {part}
      </mark>
    ) : (
      part
    )
  )
}