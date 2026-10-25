import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../store/profileSlice'
import { closeViewer, selectViewer } from '../store/uiSlice'

const EASE = 'cubic-bezier(0.32, 0.72, 0, 1)'
const MS = 480

// Shared-element zoom: the photo grows from its exact on-screen box (position,
// size and corner radius) to a large centred view, and shrinks back on close.
export default function ImageViewer() {
  const dispatch = useDispatch()
  const p = useSelector(selectProfile)
  const { open, rect } = useSelector(selectViewer)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (!open) return
    // two frames so the browser paints the "small" state before animating
    const a = requestAnimationFrame(() => requestAnimationFrame(() => setOn(true)))
    return () => cancelAnimationFrame(a)
  }, [open])

  const close = useCallback(() => {
    setOn(false)
    setTimeout(() => dispatch(closeViewer()), MS)
  }, [dispatch])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  if (!open || !rect) return null

  const vw = window.innerWidth, vh = window.innerHeight
  const S = Math.min(vw * 0.8, vh * 0.78, 600)
  const target = { left: (vw - S) / 2, top: (vh - S) / 2 - 18, width: S, height: S, borderRadius: 28 }
  const origin = { left: rect.left, top: rect.top, width: rect.width, height: rect.height, borderRadius: rect.radius || 22 }
  const t = `left ${MS}ms ${EASE}, top ${MS}ms ${EASE}, width ${MS}ms ${EASE}, height ${MS}ms ${EASE}, border-radius ${MS}ms ${EASE}`

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={`${p.name} photo`}>
      <div onClick={close} className="absolute inset-0 bg-black/70 backdrop-blur-md"
        style={{ opacity: on ? 1 : 0, transition: `opacity ${MS}ms ease` }} />
      <img src={p.image} alt={p.name} onClick={close} draggable="false"
        className="absolute cursor-zoom-out object-cover object-[center_20%] shadow-2xl"
        style={{ ...(on ? target : origin), transition: t }} />
      <div className="pointer-events-none absolute inset-x-0 text-center text-white"
        style={{ top: target.top + S + 18, opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(8px)', transition: `opacity ${MS}ms ease, transform ${MS}ms ${EASE}` }}>
        <div className="text-lg font-bold">{p.name}</div>
        <div className="text-sm text-white/70">{p.role}</div>
      </div>
      <button onClick={close} aria-label="Close photo"
        className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-xl text-white transition-colors hover:bg-white/25"
        style={{ opacity: on ? 1 : 0, transition: 'opacity .3s' }}>×</button>
    </div>
  )
}
