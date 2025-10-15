import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { motion } from "motion/react"
import { Flame, Users, Clock, MapPin, ArrowRight, Zap } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1219] to-[#0a0f1a]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2563eb]/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#3b82f6]/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#0ea5e9]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,.1) 1.5px, transparent 1.5px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* CTA Box */}
          <motion.div
            id="register"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-[#2563eb]/20 shadow-2xl space-y-8 md:space-y-10">
              {/* Header */}
              <div className="text-center space-y-4 md:space-y-6">
                <div className="flex justify-center">
                  <Badge className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white px-5 py-2.5 text-sm border-0 shadow-lg">
                    <Zap className="w-4 h-4 mr-2" />
                    INGRESSOS LIMITADOS
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                  Os ingressos são limitados e exclusivos a <span className="text-[#3b82f6]">50 médicos</span>
                </h3>

                <p className="text-base md:text-lg lg:text-xl text-white/80">
                  E quem tem precisão nas escolhas, <span className="text-white">age primeiro</span>.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: Users, text: "Apenas 50 ingressos" },
                  { icon: Clock, text: "20 e 21 de Novembro" },
                  { icon: MapPin, text: "Alphaville/SP" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                      <div className="relative flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl">
                        <div className="flex-shrink-0">
                          <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                            <div className="relative w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <span className="text-white/90 group-hover:text-white text-sm md:text-base transition-colors">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Main CTA */}
              <div className="text-center pt-2 md:pt-4">
                <a 
                  href="https://form.spotform.com.br/medicina-de-precisao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="group relative px-6 sm:px-8 md:px-10 py-6 md:py-8 bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#0ea5e9] hover:from-[#1d4ed8] hover:via-[#2563eb] hover:to-[#0284c7] text-white text-base sm:text-lg md:text-xl h-auto rounded-full shadow-2xl shadow-[#2563eb]/50 transition-all duration-300 hover:shadow-[#2563eb]/70 hover:scale-105 border-0 w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2 md:gap-3">
                      <Flame className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                      <span className="hidden sm:inline">QUERO PARTICIPAR DO MEDICINA DE PRECISÃO</span>
                      <span className="sm:hidden">QUERO PARTICIPAR</span>
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </span>
                  </Button>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="text-center pt-4">
                <p className="text-sm text-white/60">🔒 Inscrição segura e confirmação imediata</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
