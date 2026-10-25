import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="rounded-3xl bg-surface p-8">
      <h3 className="mb-1.5 text-xl font-extrabold tracking-tight">Page not found</h3>
      <p className="mb-4 text-sm text-muted">That address doesn’t exist on this portfolio.</p>
      <Link to="/" className="inline-block rounded-full bg-inv px-5 py-2.5 text-[13px] font-semibold text-invtext">Back to overview</Link>
    </section>
  )
}
