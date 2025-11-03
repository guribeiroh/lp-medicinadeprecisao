"use client"

import { Button } from "./ui/button"
import { ArrowRight, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  onCTAClick: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  const bullets = [
    {
      text: "",
      highlight: "Estruturar o seu consultório"
    },
    {
      text: "",
      highlight: "Conquistar novos pacientes"
    },
    {
      text: "",
      highlight: "Implementar novos protocolos de tratamento"
    },
    {
      text: "",
      highlight: "Organizar a gestão do seu consultório"
    },
  ]

  const visibleBullets = bullets

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0f1a] via-[#0d1219] to-[#0a0f1a] py-16 sm:py-20 md:py-8">
      {/* Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2563eb]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern - Hidden on mobile for performance */}
      <div
        className="absolute inset-0 opacity-[0.015] hidden md:block"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center max-w-[1400px] mx-auto">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 md:backdrop-blur-xl rounded-full border border-[#2563eb]/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3b82f6]"></span>
                </span>
                <span className="text-sm font-medium text-white/90 tracking-wide">Apenas para 50 Médicos</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="font-extrabold leading-[1.1] tracking-tight">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#f59e0b] mb-3">
                  2 Dias para tirar o seu consultório da UTI Financeira!
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 font-bold mb-4">
                Você sairá com o mapa completo para:
              </p>

              <div className="max-w-2xl">
                <div className="space-y-1.5 sm:space-y-2">
                  {visibleBullets.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        <span className="font-semibold">{item.highlight}</span> {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-white/70 mt-4 max-w-xl mx-auto md:mx-0">
                Mesmo que você ainda não tenha o seu consultório
              </p>
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-sm md:text-base text-white/70">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-xl border border-white/10">
                  <Calendar className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <span className="font-medium">20-21 Nov 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <span className="font-medium">Alphaville/SP</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="https://form.spotform.com.br/medicina-de-precisao"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="group relative h-12 sm:h-12 md:h-12 px-5 sm:px-6 md:px-8 w-full sm:w-auto bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#0ea5e9] hover:from-[#1d4ed8] hover:via-[#2563eb] hover:to-[#0284c7] text-white text-sm md:text-base font-semibold rounded-full shadow-2xl shadow-[#2563eb]/20 transition-all duration-300 hover:shadow-[#2563eb]/40 hover:scale-[1.02] border-0"
                >
                  <span className="flex items-center justify-center gap-2">
                    GARANTIR SUA VAGA
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 pt-2 md:pt-2">
            {[
              { value: "2 Dias", label: "Imersão Total" },
              { value: "50 Ingressos", label: "Limitados" },
              { value: "+20h", label: "de Conteúdo" },
            ].map((stat, index) => (
                <div key={index} className="space-y-0.5">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative w-full">
            <div className="relative">
              {/* Background glow - Hidden on mobile */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#2563eb]/20 via-[#3b82f6]/10 to-transparent rounded-3xl blur-3xl hidden md:block" />

              <div className="relative aspect-[4/5] sm:aspect-[4/5] max-h-[60vh] sm:max-h-[60vh] lg:max-h-[70vh] w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 via-transparent to-transparent z-10" />

                {/* Hero Background Image */}
                <Image
                  src="/hero-background.png"
                  alt="Fundadores da Medicina de Precisão"
                  fill
                  priority
                  quality={50}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8dPj4fwAGzQL78pqtagAAAABJRU5ErkJggg=="
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-top sm:object-center"
                />

                {/* Stats badge on image - Notification Style */}
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 z-20">
                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-2xl blur-xl opacity-40 animate-pulse"></div>
                  
                  <div className="relative bg-white/95 dark:bg-gray-900/95 md:backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden max-w-[190px] sm:max-w-[210px] lg:max-w-[230px]">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#10b981]"></div>
                    
                    <div className="flex items-start gap-3 p-3 sm:p-3.5 lg:p-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg blur-md opacity-50"></div>
                          <div className="relative w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight mb-0.5">
                          Múltiplos milhões
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 leading-tight">
                          Faturados no meio médico
                        </div>
                      </div>
                      
                      {/* Status dot */}
                      <div className="flex-shrink-0">
                        <span className="relative flex h-2 w-2 mt-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
        </div>
        <span className="text-xs font-medium text-white/30 uppercase tracking-wider">Scroll</span>
      </div>
    </section>
  )
}
