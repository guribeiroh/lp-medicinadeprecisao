"use client"

import dynamic from 'next/dynamic'
import { VacancyProgress } from "./components/VacancyProgress"
import { Hero } from "./components/Hero"

// Lazy load components that are below the fold
const BeforeAfter = dynamic(() => import("./components/BeforeAfter").then(mod => ({ default: mod.BeforeAfter })), {
  loading: () => <div className="min-h-screen" />
})
const Speakers = dynamic(() => import("./components/Speakers").then(mod => ({ default: mod.Speakers })), {
  loading: () => <div className="min-h-screen" />
})
const EventLocation = dynamic(() => import("./components/EventLocation").then(mod => ({ default: mod.EventLocation })), {
  loading: () => <div className="min-h-screen" />
})
const WhatIs = dynamic(() => import("./components/WhatIs").then(mod => ({ default: mod.WhatIs })), {
  loading: () => <div className="min-h-screen" />
})
const Founders = dynamic(() => import("./components/Founders").then(mod => ({ default: mod.Founders })), {
  loading: () => <div className="min-h-screen" />
})
const Testimonials = dynamic(() => import("./components/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-screen" />
})
const Supporters = dynamic(() => import("./components/Supporters").then(mod => ({ default: mod.Supporters })), {
  loading: () => <div className="min-h-screen" />
})
const FinalCTA = dynamic(() => import("./components/FinalCTA").then(mod => ({ default: mod.FinalCTA })), {
  loading: () => <div className="min-h-screen" />
})
const Footer = dynamic(() => import("./components/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[200px]" />
})
const WhatsAppFloat = dynamic(() => import("./components/WhatsAppFloat").then(mod => ({ default: mod.WhatsAppFloat })), {
  ssr: false
})

export default function App() {
  const scrollToCTA = () => {
    const element = document.getElementById("register")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <VacancyProgress />
      <Hero onCTAClick={scrollToCTA} />
      <BeforeAfter />
      <Speakers />
      <EventLocation />
      <WhatIs onCTAClick={scrollToCTA} />
      <Founders />
      <Testimonials />
      <Supporters />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
