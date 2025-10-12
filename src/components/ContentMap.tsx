"use client"
import { Button } from "./ui/button"
import { motion } from "motion/react"
import { Building2, TrendingUp, Stethoscope, Megaphone, Brain, ArrowRight } from "lucide-react"

interface ContentMapProps {
  onCTAClick: () => void
}

export function ContentMap({ onCTAClick }: ContentMapProps) {
  const topics = [
    {
      icon: Building2,
      title: "Gestão médica",
      description: "Como organizar e escalar o consultório",
    },
    {
      icon: TrendingUp,
      title: "Estratégias de faturamento",
      description: "Modelos prontos e aplicáveis",
    },
    {
      icon: Stethoscope,
      title: "Excelência clínica",
      description: "Protocolos e cannabis medicinal",
    },
    {
      icon: Megaphone,
      title: "Marketing médico ético",
      description: "Posicionamento e comunicação",
    },
    {
      icon: Brain,
      title: "Mentalidade de precisão",
      description: "Clareza, propósito e execução",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0d1219] to-[#0a0f1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#2563eb]/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6 px-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563eb]/10 text-[#3b82f6] rounded-full border border-[#2563eb]/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#2563eb] rounded-full animate-pulse" />
              <span className="text-sm font-medium">Conteúdo Programático</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
              O MAPA DA PRECISÃO
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
              Em 2 dias, você vai sair com um mapa exato do seu crescimento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
            {topics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                  <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex flex-col">
                    <div className="relative inline-block mb-4 md:mb-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                      <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center px-4"
          >
            <Button
              onClick={onCTAClick}
              size="lg"
              className="group h-12 md:h-14 px-6 md:px-8 w-full sm:w-auto bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#0ea5e9] hover:from-[#1d4ed8] hover:via-[#2563eb] hover:to-[#0284c7] text-white text-sm md:text-base font-semibold rounded-full shadow-2xl shadow-[#2563eb]/20 transition-all duration-300 hover:shadow-[#2563eb]/40 hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2">
                Quero construir o meu mapa agora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
