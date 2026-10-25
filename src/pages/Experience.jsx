import { useSelector } from 'react-redux'
import { selectProfile } from '../store/profileSlice'

export default function Experience() {
  const p = useSelector(selectProfile)
  return (
    <section className="relative pl-8">
      <span className="absolute bottom-4 left-1.5 top-2 w-1 rounded bg-surface" />
      {p.experience.map((e, i) => (
        <article key={e.title} className="relative pb-7">
          <span className={`absolute -left-8 top-1 h-3.5 w-3.5 rounded-full ${i === 0 ? 'bg-inv' : 'bg-surface2'}`} />
          <div className="text-xs font-medium text-muted">{e.when}</div>
          <h4 className="text-base font-bold tracking-tight">{e.title}</h4>
          <div className="mb-2 text-[13px] text-muted">{e.place}</div>
          <ul className="max-w-[600px] list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </article>
      ))}
    </section>
  )
}
