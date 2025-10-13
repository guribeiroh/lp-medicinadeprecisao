"use client"

import { Button } from "./ui/button"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react"

interface HeroProps {
  onCTAClick: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  const bullets = [
    {
      text: "com visão de empresa e crescimento previsível.",
      highlight: "Estruturar seu consultório"
    },
    {
      text: "de alto valor percebido que elevam seus resultados e autoridade.",
      highlight: "Criar protocolos clínicos"
    },
    {
      text: "em seus pacientes com ciência, propósito e precisão",
      highlight: "Promover longevidade e performance"
    },
    {
      text: "seu valor com segurança construindo autoridade e liberdade.",
      highlight: "Precificar, posicionar e comunicar"
    },
  ]

  const visibleBullets = bullets // Mostra todos os 4 bullets

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0f1a] via-[#0d1219] to-[#0a0f1a] py-16 sm:py-20 md:py-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2563eb]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center max-w-[1400px] mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-[#2563eb]/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3b82f6]"></span>
                </span>
                <span className="text-sm font-medium text-white/90 tracking-wide">Apenas para 50 Médicos</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 sm:space-y-3 md:space-y-4"
            >
              <h1 className="font-extrabold leading-[1.1] tracking-tight">
                <span className="block text-white mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Médico, você já tem precisão para salvar vidas.
                </span>
                <span className="block gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[rgba(41,105,237,1)]">
                  Agora é hora de ter precisão para mudar a sua carreira médica
                </span>
              </h1>

              <div className="max-w-2xl">
                <div className="space-y-1.5 sm:space-y-2">
                  <AnimatePresence mode="sync">
                    {visibleBullets.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-2 group overflow-hidden"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#3b82f6] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                          <span className="text-white font-semibold">{item.highlight}</span> {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-sm md:text-base text-white/70"
            >
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
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
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
                    QUERO PARTICIPAR DO EVENTO
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 pt-2 md:pt-2"
            >
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
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#2563eb]/20 via-[#3b82f6]/10 to-transparent rounded-3xl blur-3xl" />

              <div className="relative aspect-[4/5] sm:aspect-[4/5] max-h-[60vh] sm:max-h-[60vh] lg:max-h-[70vh] w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 via-transparent to-transparent z-10" />

                {/* Hero Background Image */}
                <img
                  src="/hero-background.png"
                  alt="Fundadores da Medicina de Precisão"
                  className="absolute inset-0 w-full h-full object-cover object-top sm:object-center"
                />

                {/* Stats badge on image - Notification Style */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 z-20"
                >
                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-2xl blur-xl opacity-40 animate-pulse"></div>
                  
                  <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden max-w-[190px] sm:max-w-[210px] lg:max-w-[230px]">
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white/40 rounded-full"
          />
        </div>
        <span className="text-xs font-medium text-white/30 uppercase tracking-wider">Scroll</span>
      </motion.div>
    </section>
  )
}
