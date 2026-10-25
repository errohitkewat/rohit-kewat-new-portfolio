import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProfile } from '../store/profileSlice'

export default function Skills() {
  const p = useSelector(selectProfile)
  const [go, setGo] = useState(false)
  useEffect(() => { const t = setTimeout(() => setGo(true), 40); return () => clearTimeout(t) }, [])
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        {p.skillGroups.map((g) => (
          <div key={g.title} className="rounded-3xl bg-surface p-5">
            <h3 className="mb-3 text-sm font-bold">{g.title}</h3>
            {g.items.map(([name, v]) => (
              <div key={name} className="my-3 flex items-center gap-3 text-[13px] font-medium">
                <span className="w-28 shrink-0">{name}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded bg-bg" role="progressbar" aria-valuenow={v} aria-valuemin="0" aria-valuemax="100" aria-label={name}>
                  <i className="block h-full rounded bg-inv transition-[width] duration-[800ms] ease-out" style={{ width: go ? `${v}%` : 0 }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-3xl bg-surface p-5">
        <h3 className="mb-3 text-sm font-bold">Tools I work with</h3>
        <div className="flex flex-wrap gap-1.5">{p.tools.map((t) => <span key={t} className="rounded-full bg-bg px-3.5 py-1 text-xs font-medium text-muted">{t}</span>)}</div>
      </div>
    </section>
  )
}
