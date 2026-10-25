import { useSelector } from 'react-redux'
import { selectProfile } from '../store/profileSlice'
import Heatmap from '../components/Heatmap'

export default function Overview() {
  const p = useSelector(selectProfile)
  return (
    <section>
      <h3 className="mb-2.5 text-sm font-bold">About me</h3>
      {p.about.map((t, i) => <p key={i} className={`mb-3 max-w-[620px] text-[15px] leading-relaxed ${i ? 'text-muted' : ''}`}>{t}</p>)}
      <div className="my-6"><Heatmap /></div>
      <div className="rounded-3xl bg-inv px-8 py-9 text-center text-invtext">
        <h3 className="mb-1.5 text-2xl font-extrabold leading-tight tracking-tighter">Let’s build something solid.</h3>
        <p className="mb-4 text-sm opacity-65">Available for full-time roles and select freelance work.</p>
        <a href={`mailto:${p.email}`} className="inline-block rounded-full bg-bg px-5 py-2.5 text-[13px] font-semibold text-ink">Send an email</a>
      </div>
    </section>
  )
}
