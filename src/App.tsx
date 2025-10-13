"use client"

import { VacancyProgress } from "./components/VacancyProgress"
import { Hero } from "./components/Hero"
import { PainPoints } from "./components/PainPoints"
import { WhatIs } from "./components/WhatIs"
import { TargetAudience } from "./components/TargetAudience"
import { Experience } from "./components/Experience"
import { Founders } from "./components/Founders"
import { Testimonials } from "./components/Testimonials"
import { EventGallery } from "./components/EventGallery"
import { ContentMap } from "./components/ContentMap"
import { EventLocation } from "./components/EventLocation"
import { FinalCTA } from "./components/FinalCTA"
import { Footer } from "./components/Footer"

export default function App() {
  const scrollToCTA = () => {
    const element = document.getElementById("register")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <VacancyProgress />
      <Hero onCTAClick={scrollToCTA} />
      <PainPoints />
      <WhatIs onCTAClick={scrollToCTA} />
      <TargetAudience />
      <Experience />
      <Founders />
      <Testimonials />
      <EventGallery />
      <ContentMap onCTAClick={scrollToCTA} />
      <EventLocation />
      <FinalCTA />
      <Footer />
    </div>
  )
}
