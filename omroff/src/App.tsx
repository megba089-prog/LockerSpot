import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Prodotti from './pages/Prodotti'
import ChiSiamo from './pages/ChiSiamo'
import News from './pages/News'
import Contatti from './pages/Contatti'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index        element={<Home />} />
          <Route path="prodotti"  element={<Prodotti />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="news"      element={<News />} />
          <Route path="contatti"  element={<Contatti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
