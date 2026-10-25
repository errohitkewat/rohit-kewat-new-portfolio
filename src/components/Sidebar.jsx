import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../store/profileSlice'
import { openViewer, selectViewer } from '../store/uiSlice'

const RADIUS = 22

export default function Sidebar() {
  const dispatch = useDispatch()
  const p = useSelector(selectProfile)
  const { open } = useSelector(selectViewer)
  const ref = useRef(null)
  const [ok, setOk] = useState(true)

  const openImage = () => {
    if (!ok) return
    const r = ref.current.getBoundingClientRect()
    dispatch(openViewer({ top: r.top, left: r.left, width: r.width, height: r.height, radius: RADIUS }))
  }

  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col overflow-hidden rounded-[28px] bg-surface p-2.5">
      <button ref={ref} onClick={openImage} disabled={!ok} aria-label="View profile photo larger"
        style={{ borderRadius: RADIUS }}
        className={`block h-[min(250px,33vh)] mx-auto  w-full shrink-0 overflow-hidden bg-inv ${ok ? 'cursor-zoom-in' : 'cursor-default'} ${open ? 'opacity-0' : 'opacity-100'}`}>
        {ok
          ? <img src={p.image} alt={p.name} onError={() => setOk(false)} className="h-full w-full object-cover object-[center_20%]" draggable="false" />
          : <span className="grid h-full w-full place-items-center text-5xl font-extrabold tracking-tighter text-invtext">{p.initials}</span>}
      </button>

      <div className="flex min-h-0 flex-1 flex-col px-3 pb-1 pt-4">
        {p.openToWork && (
          <div className="mb-2.5 inline-flex w-fit items-center gap-2 rounded-full bg-bg px-3 py-1 text-xs font-semibold">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ink" />{p.statusText}
          </div>
        )}
        <h2 className="text-xl font-extrabold leading-tight tracking-tight">{p.name}</h2>
        <div className="mb-2 text-[13px] text-muted">{p.handle} · {p.role}</div>
        <p className="mb-3 text-[13px] leading-relaxed text-muted">{p.bio}</p>

        <ul className="rounded-2xl bg-bg px-3.5 py-0.5 text-[13px]">
          {p.facts.map((f) => (
            <li key={f.label} className="flex justify-between gap-3 py-1.5 text-muted">
              <span>{f.label}</span><span className="text-right font-semibold text-ink">{f.value}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-0.5 pt-2 text-[13px] font-semibold">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              className="flex justify-between rounded-xl px-3 py-1.5 text-muted transition-colors hover:bg-bg hover:text-ink">
              {l.label}<span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
