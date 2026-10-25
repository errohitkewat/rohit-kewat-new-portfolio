import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import ImageViewer from './ImageViewer'

// Full-screen shell: the sidebar card and the top bar start on the same line,
// the page never scrolls, only the content area does.
export default function Layout() {
  const { pathname } = useLocation()
  const scroller = useRef(null)
  useEffect(() => { scroller.current?.scrollTo({ top: 0 }) }, [pathname])

  return (
    <div className="mx-auto flex h-screen max-w-[1400px] gap-8 overflow-hidden p-4 pr-8">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main ref={scroller} className="min-h-0 flex-1 overflow-y-auto pb-4">
          <div key={pathname} className="animate-fade-in"><Outlet /></div>
        </main>
      </div>
      <ImageViewer />
    </div>
  )
}
