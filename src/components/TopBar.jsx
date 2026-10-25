import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../store/profileSlice'
import { selectTheme, toggleTheme } from '../store/themeSlice'

const icon = 'absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ease-out'

// The only navigation: section tabs on the left, theme + hire buttons on the right.
export default function TopBar() {
  const dispatch = useDispatch()
  const p = useSelector(selectProfile)
  const dark = useSelector(selectTheme) === 'dark'
  const tabs = [
    { to: '/', label: 'Overview', end: true },
    { to: '/projects', label: 'Projects', n: p.projects.length },
    { to: '/experience', label: 'Experience', n: p.experience.length },
    { to: '/skills', label: 'Skills' },
  ]
  return (
    <div className="flex shrink-0 items-center justify-between pb-5">
      <nav className="inline-flex gap-1 rounded-full bg-surface p-1" aria-label="Sections">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} end={t.end}
            className={({ isActive }) => `whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${isActive ? 'bg-inv text-invtext' : 'text-muted hover:text-ink'}`}>
            {t.label}{t.n ? <span className="ml-1.5 text-[11px] opacity-55">{t.n}</span> : null}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(toggleTheme())} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          className="relative h-9 w-9 rounded-full bg-surface transition-colors hover:bg-surface2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`${icon} ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`} aria-hidden="true">
            <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${icon} ${dark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>
        <a href={`mailto:${p.email}`} className="rounded-full bg-inv px-4 py-2.5 text-[13px] font-semibold text-invtext transition-opacity hover:opacity-85">Hire me</a>
      </div>
    </div>
  )
}
