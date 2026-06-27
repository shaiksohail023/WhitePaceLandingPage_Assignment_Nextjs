import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustedLogos from '@/components/sections/TrustedLogos'
import Features from '@/components/sections/Features'
import Integrations from '@/components/sections/Integrations'
import Statistics from '@/components/sections/Statistics'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Resources from '@/components/sections/Resources'
import CTA from '@/components/sections/CTA'
import ScrollProgress from '@/components/ui/ScrollProgress'
import ScrollAnimations from '@/components/ui/ScrollAnimations'
import DarkModeProvider from '@/components/ui/DarkModeProvider'

export default function Home() {
  return (
    <DarkModeProvider>
      <ScrollProgress />
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <TrustedLogos />
        <Features />
        <Integrations />
        <Statistics />
        <HowItWorks />
        <Testimonials />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </DarkModeProvider>
  )
}
