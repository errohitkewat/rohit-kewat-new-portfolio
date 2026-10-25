export default function ProjectCard({ project: x }) {
  return (
    <a href={x.link} target={x.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
      className="flex flex-col gap-2.5 rounded-3xl bg-surface p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-surface2">
      <h4 className="flex items-center justify-between gap-2 text-base font-bold tracking-tight">
        {x.name}<small className="rounded-full bg-bg px-2.5 py-0.5 text-[11px] font-semibold text-muted">{x.type}</small>
      </h4>
      <p className="flex-1 text-[13px] leading-relaxed text-muted">{x.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {x.tags.map((t) => <span key={t} className="rounded-full bg-bg px-2.5 py-0.5 text-[11px] font-medium text-muted">{t}</span>)}
      </div>
    </a>
  )
}
