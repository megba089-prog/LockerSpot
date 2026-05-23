import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.classList.remove('page-enter')
      void mainRef.current.offsetWidth // reflow
      mainRef.current.classList.add('page-enter')
    }
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <main ref={mainRef} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
