import { useMemo } from 'react'

// Decorative activity grid. Swap `cells` for real GitHub data if you like.
export default function Heatmap() {
  const { cells, total } = useMemo(() => {
    let seed = 7, total = 0
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280
    const cells = Array.from({ length: 53 * 7 }, (_, i) => {
      const wk = Math.floor(i / 7), dow = i % 7
      const v = rnd() + (wk > 20 && wk < 44 ? 0.12 : 0) + (dow === 0 || dow === 6 ? -0.25 : 0)
      const l = v < 0.35 ? 0 : v < 0.55 ? 1 : v < 0.75 ? 2 : v < 0.9 ? 3 : 4
      total += l * 3
      return l
    })
    return { cells, total }
  }, [])

  return (
    <div className="rounded-3xl bg-surface p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-sm font-bold">Contributions in the last year</h3>
        <span className="text-xs text-muted">{total.toLocaleString()} contributions</span>
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto" aria-label="Contribution activity">
        {cells.map((l, i) => <i key={i} className="block h-[11px] w-[11px] rounded-[3px]" style={{ background: `var(--h${l})` }} />)}
      </div>
      <div className="mt-2.5 flex items-center justify-end gap-1 text-xs text-muted">
        Less {[0, 1, 2, 3, 4].map((l) => <i key={l} className="block h-[11px] w-[11px] rounded-[3px]" style={{ background: `var(--h${l})` }} />)} More
      </div>
    </div>
  )
}
