import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgressBar from '../common/ScrollProgressBar'
import BackToTopButton from '../common/BackToTopButton'
import LoadingScreen from '../overlays/LoadingScreen'
import CustomCursor from '../effects/CustomCursor'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/40 selection:text-white">
      <LoadingScreen />
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

